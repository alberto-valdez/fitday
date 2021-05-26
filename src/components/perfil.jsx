import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import { DataContext } from "../context/dataContext"
import Cargando from "./cargando";
import icon from '../assets/img/hearthicon.jpeg'
export default function Perfil (){

    const {perfilUser} = useContext(DataContext);
    const [objetivo, setObjetivo] = useState('')
   
    useEffect(()=>{
        if(perfilUser.meta == '1'){
            setObjetivo('Subir de peso')
        } else if (perfilUser.meta == '3'){
            setObjetivo('Bajar de peso')
        } else {
            setObjetivo('Mantenimiento')
        }
    },[perfilUser])

     

    return (
    <div>
        {!perfilUser ? (
            <div><Cargando/></div>
        ):(
            <div className='container-fluid'>
              
            <div className='row'>

                <div className="col-12  d-flex justify-content-center">
                    <div className="card mt-5">
            <div className="col d-flex justify-content-center mt-5">
            <img className='  d-flex justify-content-center' src={icon} alt="icon"/>
            </div>
                       
                        <div className="card-body text-center">
                            <h3 className='card-title text-uppercase'>{perfilUser.nombre}</h3>
                            <p>{perfilUser.edad} años {perfilUser.estatura} Cm. {perfilUser.peso} Kg.</p>
                            <hr/>
                        </div>
                        <div className="card-body">
                         
                           <div className="col-12  text-center" ><p className='datos-perfil'>Objetivo</p><p>{objetivo}</p></div>
                           <div className="col-12 text-center" ><p className='datos-perfil'>Gasto calorico basal</p><p>{perfilUser.basal} Kcal</p></div>
                           <div className="col-12 text-center" ><p className='datos-perfil'>Gasto calorico meta</p><p>{perfilUser.kcalMeta} Kcal</p></div>
                        </div>


                        <div className="card-body">
                      <NavLink to={'/crear'} className='btn btn-dark btn-block'>Editar</NavLink>
                      </div>
                    </div>
                </div>

        









            </div>

            </div>
        )
        }
    </div>
    )
}