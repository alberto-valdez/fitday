import { useContext } from "react"
import { DataContext } from "../context/dataContext"
import Cargando from "./cargando";

export default function Index(){

    const {usuario} = useContext(DataContext);
console.log(usuario)


if(!usuario){
    return <div><Cargando/></div>
} else {

    return(
    <div>

    <div className="row">
        <div className="col-10 d-flex justify-content-center">
            <div className="card mt-5 ">
            <h3 className='text-center mt-2'>MENU</h3>
            <div className='col  d-flex justify-content-center'>
            
            <button className='btn btn-dark'>Agregar nuevo menú</button>
            </div>
            </div>
        </div>
        <div className="col-2">banner</div>
    </div>

</div>
    )
}
    
}