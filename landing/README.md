# Landing — Digital Impacto

Landing de conversión construida con **React + Vite + Tailwind CSS + Framer Motion**.

## Desarrollo

```bash
npm install
npm run dev
```

## Variables de entorno

Copia `.env.example` a `.env` y completa:

| Variable | Descripción |
| --- | --- |
| `BASEROW_API_TOKEN` | Token de Baserow para guardar los leads del formulario (tabla `1119968`). |

En producción se configura en Vercel: *Project Settings → Environment Variables*.

## Integraciones

- **Cal.com** — `digitalimpacto/45min`, abierto como popup desde todos los CTA de agendar.
- **WhatsApp** — botón flotante hacia `wa.me/573023877471`.
- **Meta Pixel** — ID `2289041488597112`, cargado en `index.html`. El envío del formulario dispara el evento `Lead`.
- **Baserow** — el formulario hace `POST /api/leads`; la edge function reenvía a Baserow con el token del servidor.

## Assets

- `public/logo.jpeg` — logo de la marca.
- `public/hero.mp4` — video de fondo del hero.

## Despliegue

Pensado para Vercel. La carpeta `api/` se despliega como edge function; el
`Root Directory` del proyecto debe apuntar a `landing`.
