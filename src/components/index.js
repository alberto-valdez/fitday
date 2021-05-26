import { useContext, useEffect, useState } from "react"
import { DataContext } from "../context/dataContext"
import { store } from "../firebaseStore";
import Cargando from "./cargando";
import { NavLink } from "react-router-dom";
import swal from 'sweetalert';
import ReactTooltip from "react-tooltip";
export default function Index(){

    const {usuario, id, fechaMenu, fechaToGet,perfilUser, foodData,estadoPage, setEstadoPage, getMenuCollection} = useContext(DataContext);
    const [prueba, setPrueba] = useState({state:'prueba2'});
   
    
    const [macroViews, setMacroViews] = useState({
        proteinas: '0',
        carbohidratos: '0',
        grasas: '0',
        calorias: '0'
    })
 
   

    useEffect(()=>{
        if(foodData){
            let kcal = 0;
            let pro = 0;
            let gra = 0;
            let car = 0;
            for(let i in foodData){
                kcal += parseFloat(foodData[i].calorias);
                gra += parseFloat(foodData[i].grasas);
                pro += parseFloat(foodData[i].proteinas);
                car += parseFloat(foodData[i].carbohidratos);

            }
           setMacroViews({
            proteinas: pro.toFixed(2),
            carbohidratos: car.toFixed(2),
            grasas: gra.toFixed(2),
            calorias: kcal.toFixed(2)
           })
        }
    },[foodData])
   

   const eliminar = (idFood, e) =>{
       e.preventDefault()

       swal({
           title: "¿Quieres eliminar este alimento?",
           icon:'warning',
           buttons: true,
           dangerMode: true,
       }). then((willDelete)=>{
           if(willDelete){
            store.collection('menu').doc(`${id}`).collection(`${fechaToGet}`).doc(`${idFood}`).delete().then((res)=>{
                swal('Alimento eliminado',{
                    icon:'success',
                })
                getMenuCollection()
             }).catch((error)=>{   
                 console.log(error);
                 swal('Algo salió mal',{
                    icon:'warning',
                })
       
             })
           } else {
               swal('Se canceló la eliminación')
           }
       })
  

   }

if(!usuario){
    return(

     <div><Cargando/></div>
    )
} else if (foodData){

    const foodMap = foodData.map((food, i = foodData.id)=>{

        return(
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
                <div className="d-flex justify-content-center">
                    <button onClick={(e)=>eliminar(food.id, e)} className='btn '>Eliminar</button>
                </div>
            </div>
        </section>
        )
    })

    return( <div>

        <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
                <div className="card mt-5 ">
                <div className='col  d-flex  mt-5 justify-content-around'>
                    <p className='fecha-index'>{fechaMenu}</p>
                   
                </div>
                <hr/>
                <div className='col  d-flex  mt-1 justify-content-center'>
                { !perfilUser ? (
                    <h6>Cargando...</h6>
                ) : (
                    <h6 data-tip data-for='calorias'>{perfilUser.kcalMeta} Kcal</h6>
                )
                }
                 
                    <ReactTooltip 
                        id='calorias'
                        place="bottom"
                        effect="solid">
                            Calorias que debes consumir
                    </ReactTooltip>
                </div>
                <div className='col  d-flex  mt-2 justify-content-around'>
                <div className='col'>
                    <p className='text-center'>{macroViews.carbohidratos}</p>
                    <hr/>
                    <p className='text-center'>Carbohidratos</p>
                </div>
                <div className='col'>
                    <p className='text-center'>{macroViews.proteinas}</p>
                     <hr/>
                    <p className='text-center'>Proteinas</p>
                </div>
                <div className='col'>
                    <p className='text-center'>{macroViews.grasas}</p>
                     <hr/>
                    <p className='text-center'>Grasas</p>
                </div>
    
                <div className='col'>
                    <p className='text-center'>{macroViews.calorias}</p>
                     <hr/>
                    <p className='text-center'>Kcal</p>
                </div>
                </div>
                <div className='buscador'>
                <div className="box-food overflow-auto">
                    {foodMap}
              
                </div>
                </div>
    
                <div className='col mt-3  d-flex justify-content-center btn-alimentos'>
                
                <NavLink className='btn btn-dark btn-block ' to='/lista'>Agregar</NavLink>
                </div>
                </div>
            </div>
          
        </div>
    
    </div>
    )
} else if(!foodData){

    return(
    <div>

    <div className="row">
        <div className="col-lg-12   d-flex justify-content-center">
            <div className="card mt-5 ">
            <div className='col  d-flex  mt-5 justify-content-around'>
                <p className='fecha-index'>{fechaMenu}</p>
               
            </div>
            <hr/>
            <div className='col  d-flex  mt-1 justify-content-center'>

                { !perfilUser ? (
                    <h6>Cargando...</h6>
                ) : (
                    <h6  data-tip data-for='calorias'>{perfilUser.kcalMeta} Kcal</h6>
                )
                }
                 
                    <ReactTooltip 
                        id='calorias'
                        place="bottom"
                        effect="solid">
                            Calorias que debes consumir
                    </ReactTooltip>
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
                <p className='text-center'>Proteinas</p>
            </div>
            <div className='col'>
                <p className='text-center'>0</p>
                 <hr/>
                <p className='text-center'>Grasas</p>
            </div>

            <div className='col' data-tip data-for='kcal'>
                <p className='text-center'>0</p>
                 <hr/>
                <p className='text-center'>Kcal</p>
            </div>
            <ReactTooltip 
                        id='kcal'
                        place="bottom"
                        effect="solid">
                            Calorias que haz consumido
                    </ReactTooltip>
            </div>
            <div className='buscador'>
            <div className="food-list">
                <div className='d-flex justify-content-center'>
                <p className='text-uppercase mt-3 foodName'>No hay alimentos en este menu</p>
            
                </div>
            
          
            </div>
            </div>

            <div className='col mt-3  d-flex justify-content-center btn-alimentos'>
            
            <NavLink className='btn btn-dark btn-block ' to='/lista'>Agregar</NavLink>
            </div>
            </div>
        </div>
       
    </div>

</div>
    )
}
    
}