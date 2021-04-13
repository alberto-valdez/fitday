import { useContext, useEffect, useState } from "react"
import { DataContext } from "../context/dataContext"
import { store } from "../firebaseStore";
import Cargando from "./cargando";
import { NavLink } from "react-router-dom";
import swal from 'sweetalert';
export default function Index(){

    const {usuario, id, fechaMenu, fechaToGet} = useContext(DataContext);
    const [prueba, setPrueba] = useState({state:'prueba2'});
    const [foodData, setFoodData] = useState(null);
    const [estadoPage, setEstadoPage] = useState(false);
 
    useEffect(()=>{
       

        if(fechaToGet != '' && id != null){
            store.collection('menu').doc(`${id}`).collection(`${fechaToGet}`).get().then(snapshot=>{
                const getData = [];
                snapshot.forEach((doc)=>getData.push({...doc.data(), id: doc.id}));
               if(getData.length <= 0){
                 setFoodData(null)
               } else {
                setFoodData(getData)

               }
             })
        }

     
      
            
    },[id, estadoPage])
   
   

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
                setEstadoPage(!estadoPage)
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
            <div className="col-10 d-flex justify-content-center">
                <div className="card mt-5 ">
                <div className='col  d-flex  mt-5 justify-content-around'>
                    <p className='fecha-index'>{fechaMenu}</p>
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
                <div className="box-food overflow-auto">
                    {foodMap}
              
                </div>
                </div>
    
                <div className='col mt-3  d-flex justify-content-center btn-alimentos'>
                
                <NavLink className='btn btn-dark btn-block ' to='/lista'>Agregar</NavLink>
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
                <p className='fecha-index'>{fechaMenu}</p>
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
            
            <NavLink className='btn btn-dark btn-block ' to='/lista'>Agregar</NavLink>
            </div>
            </div>
        </div>
        <div className="col-2">banner</div>
    </div>

</div>
    )
}
    
}