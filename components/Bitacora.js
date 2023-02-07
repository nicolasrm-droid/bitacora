import React from 'react'
import Image from 'next/image'
import Heading from './Heading'

const Bitacora = () => {
  return (
    <div className='img1 bg-[#0b1011] ' >
      <Heading title="Bitacora - Arduino1" />
      <div >
      <img id="imagen1" src="imagen 1.jpeg" alt="Arduino 1"></img>
      </div>
      <div>
        <img id="imagen2" src="imagen2.jpeg" alt="Arduino 1"></img>
      </div>
      <div id='video' alt="video">
        <video controls type="video.mp4"> 
          <source src="video.mp4" />
        </video>
      </div>
      <div className='py-4 px-2 text-center '>
        <p>En esta primera sesion no enseñaron que es un Arduino como conectarlo a la protoboard hicimos un ejercios con leds 
          como queda registrado en en video 
        </p>
      </div>
    </div>






  )
}

export default Bitacora