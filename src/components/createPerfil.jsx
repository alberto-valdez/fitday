import { useEffect, useState } from "react"
import {store} from '../firebaseStore';
import { useContext } from "react"
import { DataContext } from "../context/dataContext"
import Cargando from "./cargando";
import { Redirect } from "react-router";

import swal from "sweetalert";
import ReactTooltip from "react-tooltip";
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
    const {usuario, id, perfilUser, getPerfilUser} = useContext(DataContext);
    const [activdad, setActvidad] = useState(null);
    const [redirectState, setRedirectState] = useState(false);
    useEffect(()=>{
      if(perfilUser){
          setPerfil(perfilUser);
      }
    },[perfilUser]) 
    
    useEffect(()=>{
        
        if(activdad){
          
            let peso = 10 * parseFloat(perfil.peso);
            let altura = 6.25 * parseFloat(perfil.estatura);
            let edad = 5 * parseFloat(perfil.edad);
                if(perfil.sexo == 'Hombre'){
                let TMB = peso + altura - edad + 5;
                let gastoBasalFloat = (TMB * parseFloat(activdad));
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
                let gastoBasalFloat = (TMB * parseFloat(activdad));
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

   
    const savePerfil =  (e) =>{
        e.preventDefault();
        store.doc(`/perfil/${id}`).set(perfil).then(data=>{
            swal('Se ha creado el perfil',{
                icon:'success',
            })
            getPerfilUser();
            setRedirectState(true)
        }).catch(err =>{
            swal('No se pudo crear perfil',{
                icon:'warning',
            })
        })
     
        
    }
    const updatePerfil = () =>{
       
  
        store.doc(`/perfil/${id}`).update(perfil).then(data=>{
            swal('Se ha editado el perfil',{
                icon:'success',
            })
            getPerfilUser();
            setRedirectState(true)
        }).catch(err =>{
            swal('No se pudo crear perfil',{
                icon:'warning',
            })
        })
        
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
                    <div className="col-12 col-lg-8 card">
                           
                            
                        <form onSubmit={savePerfil}>
                            <div className='row buscador login-arreglos' >
                            <div className="col-12 d-flex justify-content-center mb-3">
                            <h3 className='text-center'>Crear Perfil</h3>
                                </div>
                            <div className="col-12 d-flex justify-content-between mb-3">
                            <label className='mt-2'>Nombre</label>
                            <input defaultValue={perfil.nombre} type="text" onChange={(e)=>{setPerfil({...perfil, nombre: e.target.value})}}  className="form-control alimento-input-name" placeholder='' required />
                            </div>

                            <div className="col-12 d-flex justify-content-between mb-3">
                            <label className='mt-2'>Edad</label>
                            <input defaultValue={perfil.edad} type="number"  onChange={(e)=>{setPerfil({...perfil, edad: e.target.value})}}  className="form-control alimento-input-name" placeholder='' required />
                            </div>
                            <div className="col-12 d-flex justify-content-between mb-3">
                            <label className='mt-2'>Estatura</label>
                            <input defaultValue={perfil.estatura} data-tip data-for='estatura' type="number" onChange={(e)=>{setPerfil({...perfil, estatura: e.target.value})}} className="form-control alimento-input-name" placeholder='Centimetros' required />
                           
                            <ReactTooltip 
                        id='estatura'
                        place="bottom"
                        effect="solid">
                            Estatura en centimetros ejemplo: 170
                    </ReactTooltip>
                            </div>
                            
                            <div className="col-12 d-flex justify-content-between mb-3">
                            <label className='mt-2'>Peso</label>
                            <input defaultValue={perfil.peso} type="number" data-tip data-for='peso' onChange={(e)=>{setPerfil({...perfil, peso: e.target.value})}} className="form-control alimento-input-name " placeholder='Kilogramos' required />
                         
                            <ReactTooltip 
                                id='peso'
                                place="bottom"
                                effect="solid">
                                   Peso en kilogramos
                            </ReactTooltip>
                            </div>
                          
                            <div className="input-group mb-3">
                           <select  className='form-control alimento-input' id="inputGroupSelect01" defaultValue={null} onChange={(e)=>{setPerfil({...perfil, sexo: e.target.value})}} required >
                              <option value={null} selected disabled>Selecciona tu sexo biologico</option>
                              <option value='Hombre'>Hombre</option>
                              <option value='Mujer'>Mujer</option>
                          </select>
                            </div>
    
                            <div className="input-group mb-3">
    
                            <select className='form-control alimento-input'  defaultValue={null}  name='meta'  onChange={(e)=>{setPerfil({...perfil, meta: e.target.value})}} required >
                              <option value={null} selected disabled>Selecciona un objetivo</option>
                              <option value='1'>Subir de peso</option>
                              <option value='2'>Mantenimiento</option>
                              <option value='3'>Bajar de peso </option>
                          </select>
                            </div>
    
    
                            <div className="input-group mb-3">
                           
                            <select   className='form-control alimento-input' defaultValue={null}  name='actividad' onChange={(e)=>{setActvidad( e.target.value)}} required >
                              <option value={null} selected disabled>¿Que tan seguido haces ejercicio?</option>
                              <option value='1.2'>Nunca</option>
                              <option value='1.375'>De 1 a 3 días por semana</option>
                              <option value='1.55'>De 3 a 5 días por semana</option>
                              <option value='1.725'>Todos los dias de la semana</option>
                              <option value='1.9'>2 veces al día</option>
    
                          </select>

                          <div className="col-12 d-flex justify-content-center mt-3">
                            <p className='text-center'>Calorías que debes consumir</p>
                                </div>
                                <div className="col-12 d-flex justify-content-center mt-3">
                            <p className='text-center'>{perfil.kcalMeta !== ''  ? ( perfil.kcalMeta ) : (0)}</p>
                                </div>
                            </div>
                            
                                                
                            { !perfilUser ? (
                                <button type='submit' className='btn btn-dark btn-block'>Crear Perfil</button>
                            ): (
                                <button onClick={updatePerfil} className='btn btn-dark btn-block'>Editar Perfil</button>
                            )

                            }
                      
                            </div>
                        </form>
                    </div>
                </div>
    
            </div>
        )
   
    
}