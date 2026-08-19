import LayoutLegal from '../components/LayoutLegal'

export default function PoliticaPrivacidad() {
  return (
    <LayoutLegal titulo="Política de privacidad" actualizado="agosto de 2026">
      <p>
        Esta política describe cómo Digital Impacto trata los datos personales que
        recolecta a través de este sitio web, en cumplimiento de la Ley 1581 de
        2012, el Decreto 1074 de 2015 y demás normas concordantes de la República
        de Colombia.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        Digital Impacto, agencia de marketing digital con sede en Pereira,
        Colombia. Correo de contacto para asuntos de datos personales:{' '}
        <a href="mailto:digitalimpactosoporte@gmail.com">
          digitalimpactosoporte@gmail.com
        </a>
        .
      </p>

      <h2>2. Datos que recolectamos</h2>
      <p>
        A través del formulario de contacto recolectamos: nombre, teléfono, nombre
        del negocio, ciudad, correo electrónico y el servicio de interés.
      </p>
      <p>
        Si agendas una llamada de diagnóstico, la plataforma Cal.com recoge tu
        nombre, correo y la franja horaria seleccionada. Si nos escribes por
        WhatsApp, recibimos tu número telefónico y el contenido de tus mensajes.
      </p>
      <p>
        Adicionalmente recolectamos datos de navegación de forma automática
        mediante cookies y tecnologías similares, según se detalla en nuestra{' '}
        <a href="/politica-de-cookies">política de cookies</a>.
      </p>

      <h2>3. Finalidades del tratamiento</h2>
      <ul>
        <li>Responder tus solicitudes y entregarte una propuesta comercial.</li>
        <li>Contactarte por teléfono, correo o WhatsApp para dar seguimiento.</li>
        <li>Prestar y administrar los servicios contratados.</li>
        <li>
          Enviarte información sobre nuestros servicios, siempre que lo hayas
          autorizado.
        </li>
        <li>
          Medir el rendimiento de nuestras campañas publicitarias y mejorar el
          sitio.
        </li>
      </ul>
      <p>
        No vendemos ni comercializamos tus datos personales con terceros.
      </p>

      <h2>4. Autorización</h2>
      <p>
        Al enviar el formulario o contactarnos por los canales dispuestos en el
        sitio, autorizas de manera previa, expresa e informada el tratamiento de
        tus datos personales para las finalidades aquí descritas. Puedes revocar
        esa autorización en cualquier momento.
      </p>

      <h2>5. Encargados y transferencia de datos</h2>
      <p>
        Para operar utilizamos proveedores tecnológicos que actúan como encargados
        del tratamiento y que pueden almacenar información en servidores fuera de
        Colombia:
      </p>
      <ul>
        <li>
          <strong>Baserow</strong>: base de datos donde se almacenan los leads del
          formulario.
        </li>
        <li>
          <strong>Vercel</strong>: alojamiento del sitio web.
        </li>
        <li>
          <strong>Cal.com</strong>: agendamiento de las llamadas de diagnóstico.
        </li>
        <li>
          <strong>Meta Platforms</strong>: medición publicitaria a través del
          Pixel de Meta, y comunicación por WhatsApp.
        </li>
      </ul>

      <h2>6. Tus derechos como titular</h2>
      <p>Conforme al artículo 8 de la Ley 1581 de 2012, tienes derecho a:</p>
      <ul>
        <li>
          Conocer, actualizar y rectificar tus datos personales frente a Digital
          Impacto.
        </li>
        <li>
          Solicitar prueba de la autorización otorgada, salvo en los casos en que
          la ley no la exija.
        </li>
        <li>
          Ser informado sobre el uso que se ha dado a tus datos, previa solicitud.
        </li>
        <li>
          Presentar quejas ante la Superintendencia de Industria y Comercio por
          infracciones a la ley.
        </li>
        <li>
          Revocar la autorización y solicitar la supresión de tus datos, cuando no
          exista un deber legal o contractual que lo impida.
        </li>
        <li>Acceder de forma gratuita a tus datos personales.</li>
      </ul>

      <h2>7. Cómo ejercer tus derechos</h2>
      <p>
        Envía tu solicitud a{' '}
        <a href="mailto:digitalimpactosoporte@gmail.com">
          digitalimpactosoporte@gmail.com
        </a>{' '}
        indicando tu nombre, los datos de contacto donde quieres recibir
        respuesta y una descripción clara de lo que solicitas.
      </p>
      <p>
        Atenderemos las consultas en un plazo máximo de diez (10) días hábiles y
        los reclamos en un plazo máximo de quince (15) días hábiles, contados
        desde el día siguiente al recibo de la solicitud, conforme a los artículos
        14 y 15 de la Ley 1581 de 2012.
      </p>

      <h2>8. Seguridad y conservación</h2>
      <p>
        Aplicamos medidas técnicas y administrativas razonables para proteger tus
        datos frente a accesos no autorizados, pérdida o alteración. Conservamos
        la información mientras dure la relación comercial y por el tiempo
        adicional necesario para cumplir obligaciones legales o contractuales.
      </p>

      <h2>9. Menores de edad</h2>
      <p>
        Nuestros servicios están dirigidos a personas mayores de edad. No
        recolectamos de manera consciente datos de menores.
      </p>

      <h2>10. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política para reflejar cambios legales o de
        nuestros procesos. La versión vigente será siempre la publicada en esta
        página, con su fecha de última actualización.
      </p>
    </LayoutLegal>
  )
}
