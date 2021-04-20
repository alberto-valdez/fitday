import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import { DataContext } from "../context/dataContext"
import { store } from "../firebaseStore";
import Cargando from "./cargando";

export default function Perfil (){

    const {id, perfilUser} = useContext(DataContext);
   
  

     

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
            <img className='  d-flex justify-content-center' src="https://media.istockphoto.com/vectors/hamburger-junk-food-icon-vector-id928415518?b=1&k=6&m=928415518&s=612x612&w=0&h=Hjy-pIAjI9aOJE_2ir8n_Ssq-BZ5DdUQoe74OSjyeKI=" alt=""/>
            </div>
                       
                        <div className="card-body text-center">
                            <h3 className='card-title text-uppercase'>{perfilUser.nombre}</h3>
                            <p>{perfilUser.edad} años {perfilUser.estatura} Cm. {perfilUser.peso} Kg.</p>
                            <hr/>
                        </div>
                        <div className="card-body">
                         
                           <div className="col-12  text-center" ><p className='datos-perfil'>Objetivo</p><p>{perfilUser.meta}</p></div>
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