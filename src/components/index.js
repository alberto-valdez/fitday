import { useContext, useEffect, useState } from "react"
import { DataContext } from "../context/dataContext"
import Cargando from "./cargando";

export default function Index(){

    const {usuario} = useContext(DataContext);
    console.log(usuario)
    const {foodData, setFoodData} = useState(null);
    const {fecha, setFecha} = useState();
    
    useEffect(()=>{

      
   
     
    },[])



if(!usuario){
    return <div><Cargando/></div>
} else if (foodData){

    return(
    <div>

    <div className="row">
        <div className="col-10 d-flex justify-content-center">
            <div className="card mt-5 ">
            <div className='col  d-flex  mt-5 justify-content-around'>
                <p className='fecha-index'>11 Abril 2021</p>
                <a>Historial</a>
            </div>
            <hr/>
            <div className='col  d-flex  mt-1 justify-content-center'>
                <h6>Meta: 1890 Kcal</h6>
            </div>
            <div className='col  d-flex  mt-2 justify-content-around'>
            <div className='col'>
                <p className='text-center'>0</p>
                <hr/>
                <p className='text-center'>Carbohidratos</p>
            </div>
            <div className='col'>
                <p className='text-center'>0</p>
                 <hr/>
                <p className='text-center'>Proteina</p>
            </div>
            <div className='col'>
                <p className='text-center'>0</p>
                 <hr/>
                <p className='text-center'>Grasas</p>
            </div>

            <div className='col'>
                <p className='text-center'>0</p>
                 <hr/>
                <p className='text-center'>Kcal</p>
            </div>
            </div>
            <div className='col  d-flex justify-content-center'>
            
            <button className='btn btn-dark'>Agregar</button>
            </div>
            </div>
        </div>
        <div className="col-2">banner</div>
    </div>

</div>
    )
} else if(!foodData){

    return(
    <div>

    <div className="row">
        <div className="col-10 d-flex justify-content-center">
            <div className="card mt-5 ">
            <div className='col  d-flex  mt-5 justify-content-around'>
                <p className='fecha-index'>11 Abril 2021</p>
                <a>Historial</a>
            </div>
            <hr/>
            <div className='col  d-flex  mt-1 justify-content-center'>
                <h6>Meta: 1890 Kcal</h6>
            </div>
            <div className='col  d-flex  mt-2 justify-content-around'>
            <div className='col'>
                <p className='text-center'>0</p>
                <hr/>
                <p className='text-center'>Carbohidratos</p>
            </div>
            <div className='col'>
                <p className='text-center'>0</p>
                 <hr/>
                <p className='text-center'>Proteina</p>
            </div>
            <div className='col'>
                <p className='text-center'>0</p>
                 <hr/>
                <p className='text-center'>Grasas</p>
            </div>

            <div className='col'>
                <p className='text-center'>0</p>
                 <hr/>
                <p className='text-center'>Kcal</p>
            </div>
            </div>
            <div className='buscador'>
            <div className="food-list">
                <div className='d-flex justify-content-center'>
                <p className='text-uppercase mt-3 foodName'>No hay alimentos en este menu</p>
            
                </div>
            
          
            </div>
            </div>

            <div className='col mt-3  d-flex justify-content-center btn-alimentos'>
            
            <button className='btn btn-dark btn-block '>Agregar</button>
            </div>
            </div>
        </div>
        <div className="col-2">banner</div>
    </div>

</div>
    )
}
    
}