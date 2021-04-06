import { useEffect, useState } from "react"
import {store} from '../firebaseStore';

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

    const [activdad, setActvidad] = useState(null);

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
            // const data = await store.collection('perfil').add(perfil);
            console.log(perfil)

        } catch(err){
            console.log(err)
        }
    }
    return (
        <div className='container'>

            <div className="row d-flex justify-content-center mt-5">
                <div className="col-8">
                    <form onSubmit={savePerfil}>
                        <div className='row'>
                        <label>Nombre</label>
                        <input type="text" onChange={(e)=>{setPerfil({...perfil, nombre: e.target.value})}} className="form-control" placeholder="Ingresa Nombre"/>
                        <label>Edad</label>
                        <input type="number" onChange={(e)=>{setPerfil({...perfil, edad: e.target.value})}} className="form-control" placeholder="Ingresa Edad"/>
                        <label>Estatura</label>
                        <input type="number" onChange={(e)=>{setPerfil({...perfil, estatura: e.target.value})}} className="form-control" placeholder="Ingresa Estatura"/>
                        <label>Peso</label>
                        <input type="number" onChange={(e)=>{setPerfil({...perfil, peso: e.target.value})}} className="form-control" placeholder="Ingresa Peso"/>
                        <label>Sexo</label>
                        
                        <select name='meta' defaultValue={null} onChange={(e)=>{setPerfil({...perfil, sexo: e.target.value})}} >
                          <option value={null} selected disabled>Seelecciona un sexo</option>
                          <option value='Hombre'>Hombre</option>
                          <option value='Mujer'>Mujer</option>
                      </select>
                       
                        <select  defaultValue={null}  name='meta'  onChange={(e)=>{setPerfil({...perfil, meta: e.target.value})}} >
                          <option value={null} selected disabled>¿Cúal es tu objetivo?</option>
                          <option value='1'>Subir de peso</option>
                          <option value='2'>Mantenimiento</option>
                          <option value='3'>Bajar de peso </option>
                      </select>
                     <select  defaultValue={null}  name='actividad' onChange={(e)=>{setActvidad( e.target.value)}} >
                          <option value={null} selected disabled>¿Que tan seguido haces ejercicio?</option>
                          <option value='1.2'>Nunca</option>
                          <option value='1.375'>De 1 a 3 días por semana</option>
                          <option value='1.55'>De 3 a 5 días por semana</option>
                          <option value='1.725'>Todos los dias de la semana</option>
                          <option value='1.9'>2 veces al día</option>

                      </select>
                      <button type='submit' className='btn btn-danger btn-block'>Crear Usuario</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}