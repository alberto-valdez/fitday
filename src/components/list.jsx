import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { DataContext } from "../context/dataContext";
import { store } from "../firebaseStore";
import Cargando from "./cargando";


export default function Lista(){

 const [termSearch, setTermSearch] = useState(null);
 const {foodDataList} = useContext(DataContext)
 const [searchData, setSearchData] = useState('');
 const historial = useHistory();
 const buscar = (e) =>{
     e.preventDefault();

     setSearchData(termSearch);
     
 }
 const agregarAlimento = (e) =>{
    e.preventDefault();
    historial.push('/addAlimento')
   
}




 if(foodDataList != undefined){
  
    const foodMap = foodDataList.filter((food) =>{
        if(searchData == ''){
            
            return food
        } else if(food.nombre.toLowerCase().includes(searchData.toLowerCase())){
            console.log(food)
            return food
        }
    }).map((food, i = foodDataList.id)=>{
    return (    
            <section key={i} className='mt-2'>
            <div className="food-list">
                <div className='d-flex justify-content-around'>
                <p className='text-uppercase foodName'>{food.nombre}</p>
                <p>Kcal: {food.calorias}</p>
                </div>
                <div className='d-flex justify-content-center'>
                <p className='text-uppercase foodMerch'>{food.marca}</p>
                
                </div>
                <div className='d-flex justify-content-around'>
                <p>P: {food.proteinas}</p>
                <p>G: {food.grasas}</p>
                <p>C: {food.carbohidratos}</p>
                </div>
                <hr/>
                <div    className="d-flex justify-content-center">
                    <NavLink data-tip data-for='sel' to={'/lista/add/'+food.id}className='btn '>Seleccionar</NavLink>
                    <ReactTooltip 
                        id='sel'
                        place="bottom"
                        effect="solid">
                            Selecciona para agregar a tu menu
                    </ReactTooltip>
                </div>
                
            </div>
        </section>
    )
    })

    return (
        <div>
        <div className="row">
            
            <div className="col-12 d-flex justify-content-center">
                <div className='card mt-5'>  
                <form onSubmit={buscar}>
                <div className="input-group mb-3 buscador">
                    
                    <input type="text" className='form-control' placeholder='Buscar alimento' onChange={(e)=>{setTermSearch(e.target.value)}} required/>
                    <button className='btn btn-outline-secondary' type='submit' >Buscar</button>
                    
                    <button className='btn btn-outline-secondary' data-tip data-for='addFood' type='button' onClick={agregarAlimento} >+</button>
                    <ReactTooltip 
                        id='addFood'
                        place="bottom"
                        effect="solid">
                            Agregar un nuevo alimento a la base de datos
                    </ReactTooltip>
                </div>
                </form>
                <div className='buscador'>
                    <div className="box-food overflow-auto">
                    {foodMap}
                    </div>
                  
                </div>

                </div>
            </div>
       

        </div>    
            
        </div>
    )
 } else if(!foodDataList){
return(
    <div><Cargando/></div>
    )
  
 } else {
     return (
        <div>
        <div className="row">
            
            <div className="col-12 d-flex justify-content-center">
                <div className='card mt-5'>  
                <div className="input-group mb-3 buscador">
                    <input type="text" className='form-control' placeholder='Buscar alimento' onChange={(e)=>{setTermSearch(e.target.value)}}/>
                    <button className='btn btn-outline-secondary' type='button' onClick={buscar} >Buscar</button>
                </div>
    
                <div>
                        <h3>Aún no hay alimentos</h3>
                </div>
    
                </div>
            </div>
           
    
        </div>    
            
        </div>
     )
 }
    
}