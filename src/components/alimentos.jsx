import { useEffect, useState } from "react"
import { useHistory } from "react-router";
import { store } from "../firebaseStore";


export default function Alimentos (){

 const [termSearch, setTermSearch] = useState(null);
 const [foodData, setFoodData] = useState(null);
 const historial = useHistory();
 const buscar = (e) =>{
     e.preventDefault();

     console.log(foodData)
 }
 const agregarAlimento = (e) =>{
    e.preventDefault();
    historial.push('/addAlimento')
   
}

 useEffect(()=>{
    store.collection('alimentos').get().then(snapshot=>{
        const postData = [];
        snapshot.forEach((doc)=> postData.push({...doc.data(), id: doc.id}));
        console.log(postData)
        setFoodData(postData);
    })
 },[])


 if(foodData){

    const foodMap = foodData.map((food, i = foodData.id)=>{
    return (    
            <section key={i}>
            <div className="food-list">
                <div className='d-flex justify-content-around'>
                <p className='text-uppercase foodName'>{food.nombre}</p>
                <p>Kcal: {food.calorias}</p>
                </div>
                <div className='d-flex justify-content-around'>
                <p>P: {food.proteinas}</p>
                <p>G: {food.grasas}</p>
                <p>C: {food.carbohidratos}</p>
                </div>
                <hr/>
                <div className="d-flex justify-content-center">
                    <button className='btn '>Seleccionar</button>
                </div>
            </div>
        </section>
    )
    })

    return (
        <div>
        <div className="row">
            
            <div className="col-10 d-flex justify-content-center">
                <div className='card mt-5'>  
                <div className="input-group mb-3 buscador">
                    <input type="text" className='form-control' placeholder='Buscar alimento' onChange={(e)=>{setTermSearch(e.target.value)}}/>
                    <button className='btn btn-outline-secondary' type='button' onClick={buscar} >Buscar</button>
                    <button className='btn btn-outline-secondary' type='button' onClick={agregarAlimento} >+</button>
                </div>

                <div className='buscador'>
                    {foodMap}
                </div>

                </div>
            </div>
            <div className="col-2">
                banner
            </div>

        </div>    
            
        </div>
    )
 } else if(!foodData){
return(
    <div>Cragando...</div>
    )
  
 } else {
     return (
        <div>
        <div className="row">
            
            <div className="col-10 d-flex justify-content-center">
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
            <div className="col-2">
                banner
            </div>
    
        </div>    
            
        </div>
     )
 }
    
}