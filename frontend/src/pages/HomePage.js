import React from 'react'

const HomePage = () => {
  return (
    <main className='holder'>
      <div className='homeimg'>
        <img src='images/home/home.png' alt='e-nos construcciones'/>
      </div>
      <div className='columnas'>
        <div className='bienvenidos left'>
          <h2>Bienvenidos</h2>
          <p>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className='testimonios right'>
          <h2>Testimonios</h2>
          <div className='testimonio'>
            <span className='cita'>
              Simplemente excelente
            </span>
            <span className='autor'>
              Juan Perez
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;