import { NavLink } from 'react-router-dom'
import caratula from '../../assets/img/d.png'

export default function DoppioInfo(){
    return(
        <div className="row">
            <div className="col-4 d-flex justify-content-center caratula">
                <img src= {caratula} alt=""/>
            </div>

            <div className="col-8">
                <div className="col-12 info-dop">
                <h1>¡Cuenta calorias!</h1>
                <h2>¡Consigue tus metas!</h2>
                </div>
               
                <div className="col-12 info-dop-text">
                <p>Doppio es la app que te ayudará a llevar un listado de los alimentos que consumes. Esto te ayudará a cumplir tus objetivos, así sea subir, bajar o mantener tu peso actual, o 
                    simplemente mejorar tu alimentación llevandola a un lado más saludable.

                </p>
              
                </div>

                

            <div className="col-12  wrapper">
              <div className="words">
                  <span>Doppio</span>
                  <span>¡Monitorea!</span>
                  <span>¡Mejora!</span>
                  <span>¡Cuenta!</span>
              </div>
                </div>

                <div className="col-12 d-flex justify-content-center mt-5">
                 <NavLink to='/signup' className='btn btn-dark text-center'>COMENSAR AHORA</NavLink>
                </div>
            </div>
        </div>
    )
}