export const config = { runtime: 'edge' }

const BASEROW_URL =
  'https://api.baserow.io/api/database/rows/table/1119968/?user_field_names=true'

const CAMPOS_REQUERIDOS = [
  'nombre',
  'telefono',
  'negocio',
  'ciudad',
  'email',
  'servicio',
]

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

export default async function handler(request) {
  if (request.method !== 'POST') {
    return json({ error: 'Método no permitido' }, 405)
  }

  const token = process.env.BASEROW_API_TOKEN
  if (!token) {
    return json({ error: 'Configuración del servidor incompleta' }, 500)
  }

  let datos
  try {
    datos = await request.json()
  } catch {
    return json({ error: 'Cuerpo inválido' }, 400)
  }

  const faltantes = CAMPOS_REQUERIDOS.filter(
    (campo) => !String(datos?.[campo] ?? '').trim(),
  )
  if (faltantes.length > 0) {
    return json({ error: 'Faltan campos', campos: faltantes }, 400)
  }

  const respuesta = await fetch(BASEROW_URL, {
    method: 'POST',
    headers: {
      Authorization: `Token ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Nombre: datos.nombre,
      Telefono: datos.telefono,
      Negocio: datos.negocio,
      Ciudad: datos.ciudad,
      Email: datos.email,
      Servicio: datos.servicio,
    }),
  })

  if (!respuesta.ok) {
    const detalle = await respuesta.text()
    console.error('Baserow rechazó el lead:', respuesta.status, detalle)
    return json({ error: 'No se pudo guardar el lead' }, 502)
  }

  return json({ ok: true }, 200)
}
