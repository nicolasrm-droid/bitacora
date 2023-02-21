import React from 'react'
import Heading from './Heading'

const Bitacora3 = () => {
    return (
        <div className='img1 bg-[#0b1011] ' >
            <Heading title="Bitacora - Sesion3" />
            <div id='videocel' alt="video">
                <video controls muted type="video.mp4">
                    <source src="SensorServo.mp4" />
                </video>

            </div>
            <div><p className='py-4 px-2 text-center '>Aqui podemos ver como el sensor hace rotar el servomotor</p></div>
            <div >
                <img id="imagen6" src="Pato.jpeg" alt="Arduino 1"></img>
            </div>
            <div className='py-4 px-2 text-center '>
                <p>En esta sesion se hizo un ejercicio de realizar un proyecto de animatronica con 3 servomotores que tuviera 3 movimientos
                </p>
            </div>
            <div id='videocel' alt="video" >
                <video controls muted type="video.mp4">
                    <source src="VideoPato.mp4" />
                </video>

            </div>
            <div className='py-4 text-center'>
                <p>Para el pato se usaron 3 servomotores 2 para el movimiento de las patas y 1 para el movimiento de la cabeza.
                    Se tuvo encuenta el peso de la parte inferior y tambien la suerficie de las patas para que este se pudiera sostener y poder dar el paso.
                </p>
            </div>
        </div>






    )
}

export default Bitacora3