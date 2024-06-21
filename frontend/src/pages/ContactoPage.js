import React from 'react'

const ContactoPage = () => {
  return (
    <main className='holder contacto'>
      <div>
        <h2>Contacto rápido</h2>
        <form className='formulario' action='method'>
          <p>
            <label for='nombre'>Nombre</label>
            <input type='text'/>
          </p>
          <p>
            <label for='email'>E-mail</label>
            <input type='text'/>
          </p>
          <p>
            <label for='telefono'>Teléfono</label>
            <input type='text'/>
          </p>
          <p>
            <label for='mensaje'>Mensaje</label>
            <textarea></textarea>
          </p>
          <p className='acciones'><input type='submit' value='Enviar'/></p>
        </form>
      </div>
      <div className='datos'>
        <h2>Otras vías de comunicación</h2>
        <p>También podes contactarnos a través de los siguientes medios</p>
        <ul>
          <li>Teléfono: 0303456</li>
          <li>E-mail: administracion@enos.com.ar</li>
          <li>Facebook</li>
          <li>Whatsapp</li>
        </ul>

      </div>

    </main>
  )
}

export default ContactoPage;