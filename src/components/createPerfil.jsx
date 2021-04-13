import { useEffect, useState } from "react"
import {store} from '../firebaseStore';
import { useContext } from "react"
import { DataContext } from "../context/dataContext"
import Cargando from "./cargando";
import { Redirect } from "react-router";

import swal from "sweetalert";
export default function CreatePerfil() {
  
    const [perfil, setPerfil] = useState({
        nombre:'',
        edad:'',
        estatura:'',
        peso:'',
        sexo:'',
        meta:'',
        basal:'',
        kcalMeta:''
    });
    const {usuario, id} = useContext(DataContext);
    const [activdad, setActvidad] = useState(null);
    const [redirectState, setRedirectState] = useState(false);
    useEffect(()=>{
        
      console.log('este es el id: '+id)
    },[]) 
    
    useEffect(()=>{
        
        if(activdad){
          
            let peso = 10 * parseFloat(perfil.peso);
            let altura = 2.25 * parseFloat(perfil.estatura);
            let edad = 5 * parseFloat(perfil.edad);
            console.log(peso + ' ' + altura + ' ' + edad)

                if(perfil.sexo == 'Hombre'){
                let TMB = peso + altura - edad + 5;
                let gastoBasalFloat = (TMB * parseFloat(activdad)) + 300;
                let gastoBasal = Math.floor(gastoBasalFloat);
               
                
                    if(perfil.meta == '1'){
                     let kcal = gastoBasal + 300;
                    setPerfil({...perfil, kcalMeta: kcal.toString(), basal: gastoBasal.toString()})
                   

                    } else if( perfil.meta == '2'){
                        setPerfil({...perfil, kcalMeta: gastoBasal.toString(), basal: gastoBasal.toString()})
                    } else {
                        let kcal = gastoBasal - 300;
                        setPerfil({...perfil, kcalMeta: kcal.toString(), basal: gastoBasal.toString()})
                    }


                } else {

                let TMB = peso + altura - edad - 161;
                let gastoBasalFloat = (TMB * parseFloat(activdad)) + 180;
                let gastoBasal = Math.floor(gastoBasalFloat);

                    if(perfil.meta == '1'){
                        let kcal = gastoBasal + 300;
                    setPerfil({...perfil, kcalMeta: kcal.toString(), basal: gastoBasal.toString()})
                    

                    } else if( perfil.meta == '2'){
                        setPerfil({...perfil, kcalMeta: gastoBasal.toString(), basal: gastoBasal.toString()})
                    } else {
                        let kcal = gastoBasal - 300;
                        setPerfil({...perfil, kcalMeta: kcal.toString(), basal: gastoBasal.toString()})
                    }
                    }


        }
    },[activdad])

   
    const savePerfil = async (e) =>{
        e.preventDefault();
  
     
        try{
           // collection().add(perfil
             const data = await store.doc(`/perfil/${id}`).set(perfil)
            if(data){
                swal('Se ha creado el perfil',{
                    icon:'success',
                })
                setRedirectState(true)
                
            }


        } catch(err){
            swal('No se pudo crear perfil',{
                icon:'warning',
            })
        }
    }

    if(redirectState){
        return(
            <Redirect to='/index'/>
        )
    }


    if(!usuario){
        return <div><Cargando/></div>
    } 
     
        return (
            <div className='container'>
    
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-8 create-perfil">
                        <form onSubmit={savePerfil}>
                            <div className='row'>
    
                            <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
                            <input type="text" onChange={(e)=>{setPerfil({...perfil, nombre: e.target.value})}}  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" className="form-control" placeholder="Ingresa Nombre" required/>
                            </div>
    
                            <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Edad</span>
                            <input type="number" onChange={(e)=>{setPerfil({...perfil, edad: e.target.value})}} className="form-control" placeholder="Ingresa Edad"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required/>    
                           </div>
    
    
                           <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Estatura</span>
                            <input type="number" onChange={(e)=>{setPerfil({...perfil, estatura: e.target.value})}} className="form-control" placeholder="Ingresa Estatura" required/>
                           </div>
    
                           <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Peso</span>
                            <input type="number" onChange={(e)=>{setPerfil({...perfil, peso: e.target.value})}} className="form-control" placeholder="Ingresa Peso" required/>
                            
                           </div>
                           
                          
                            <div className="input-group mb-3">
                           <select  className='form-control' id="inputGroupSelect01" defaultValue={null} onChange={(e)=>{setPerfil({...perfil, sexo: e.target.value})}} required >
                              <option value={null} selected disabled>Seelecciona tu sexo biologico</option>
                              <option value='Hombre'>Hombre</option>
                              <option value='Mujer'>Mujer</option>
                          </select>
                            </div>
    
                            <div className="input-group mb-3">
    
                            <select className='form-control'  defaultValue={null}  name='meta'  onChange={(e)=>{setPerfil({...perfil, meta: e.target.value})}} required >
                              <option value={null} selected disabled>Selecciona un objetivo</option>
                              <option value='1'>Subir de peso</option>
                              <option value='2'>Mantenimiento</option>
                              <option value='3'>Bajar de peso </option>
                          </select>
                            </div>
    
    
                            <div className="input-group mb-3">
                           
                            <select   className='form-control' defaultValue={null}  name='actividad' onChange={(e)=>{setActvidad( e.target.value)}} required >
                              <option value={null} selected disabled>¿Que tan seguido haces ejercicio?</option>
                              <option value='1.2'>Nunca</option>
                              <option value='1.375'>De 1 a 3 días por semana</option>
                              <option value='1.55'>De 3 a 5 días por semana</option>
                              <option value='1.725'>Todos los dias de la semana</option>
                              <option value='1.9'>2 veces al día</option>
    
                          </select>
                            </div>
                                                
                            
                          <button type='submit' className='btn btn-danger btn-block'>Crear Usuario</button>
                            </div>
                        </form>
                    </div>
                </div>
    
            </div>
        )
   
    
}