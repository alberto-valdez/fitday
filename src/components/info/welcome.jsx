import { useContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { DataContext } from "../../context/dataContext";
import CreatePerfil from "../createPerfil";

export default function Welcome(){

    const {perfilUser} = useContext(DataContext);
    if(perfilUser) {
        return (
            <Redirect to='/index'/>
        )
    }
    return(
        <div className="row ">
            
            <div className="col-12 d-flex justify-content-center mt-5">
            <h1>Bienvenido a</h1>
            
            </div>
            <div className="col-12 d-flex justify-content-center">
          
            <h1>DOPPIO</h1>
            </div>    

            <div className="col-12 d-flex justify-content-center  mt-5">
          
          <label className='p-5 font-h'>La aplicación que te permite llevar un control de lo que comes.</label>
          </div>        

          <div className="col-12 d-flex justify-content-center">
          <label className='p-5 font-h'>¡Crea un perfil para poder a empezar a usar la herramienta que te ayudará a conseguir tus metas alimenticias!</label>
          </div>      

          <div className="col-12 d-flex justify-content-center  mt-5">
         <NavLink to='/crear' className='btn btn-dark'>Crear perfil</NavLink>
          </div>      
        </div>
    )
}