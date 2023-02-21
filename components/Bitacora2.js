import React from 'react'
import Heading from './Heading'

const Bitacora2 = () => {
    return (
        <div className='img1 bg-[#0b1011] ' >
            <Heading title="Bitacora - Sesion2" />
                       
            <div >
                <img id="imagen6" src="Servo.jpeg" alt="Arduino 1"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>En esta sesion se hizo realizo un ejercico de conectar un servomotor al arduino y a la protoboard</p>
            </div>
            <div id='video' alt="video">
                <video controls muted type="video.mp4">
                    <source src="videoservo.mp4" />
                </video>
            </div>
            <div className='py-4 text-center'>
                <p>
                  Aqui podemos ver el funcionamiento del servomotor.
                </p>
            </div>
            <div>
            <img id="imagen6" src="sensor.jpeg" alt="Arduino 1"></img>
            </div>
            <div className='py-4 text-center'>
                <p>
                  Tambien se realizo una actividad con un sensor de proximidad para que encendiera unos leds.
                </p>
            </div>
            <div id='videocel' alt="video">
                <video controls muted type="video.mp4">
                    <source src="VideoSensor.mp4" />
                </video>
            </div>


        </div>






    )
}

export default Bitacora2
