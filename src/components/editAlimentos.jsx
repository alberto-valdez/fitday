import { useEffect, useState } from "react";
import { store } from "../firebaseStore";
import Cargando from "./cargando";
import { Redirect } from "react-router";
import swal from "sweetalert";
export default function EditAlimentos({match}){
    var id = match.params.id;

    
    const [alimento, setAlimento] = useState({
        azucar: '',
        calorias: '',
        cantidad: '',
        carbohidratos: '',
        fibra: '',
        grasas: '',
        monoinsaturadas: '',
        nombre: '',
        poliinsaturadas: '',
        proteinas: '',
        saturadas: '',
        transgenicas: '',
        sodio: '',
        unidad: '',
        marca:''

    })
    const [redirectState, setRedirectState] = useState(false);
    useEffect(()=>{
        let kcal = ( parseFloat(alimento.proteinas) * 4 ) +  ( parseFloat(alimento.carbohidratos) * 4 ) + ( parseFloat(alimento.grasas) * 9 )
        setAlimento({...alimento, calorias: kcal.toString()})
    },[alimento.grasas,alimento.proteinas, alimento.carbohidratos])

    useEffect(()=>{
        store.collection('alimentos').where('__name__', '==', `${id}`).get().then(snapshot=>{
            setAlimento(snapshot.docs[0].data())
        }).catch(err=>{
            console.log(err)
        })
      
    },[id])

    const Agregar = async (e)=>{
        e.preventDefault();
        store.collection('alimentos').doc(`${id}`).update(alimento).then(res=>{
            swal('Se ha editado alimento',{
                icon:'success',
            })
            setRedirectState(true)    
        }).catch(err=>{
            swal('Hubo un error al editar alimento',{
                icon:'warning',
            })
        })
    }
    if(redirectState){
        return (
            <Redirect to='/alimentos'/>
        )
    }
   if(alimento){
    return (
        <div>

            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="card mt-5 ">
                    
                        <form className='buscador' onSubmit={Agregar}>
                        <div className="box-addfood overflow-auto">
                            <div className="col-12 d-flex justify-content-between">
                            <label className='mt-2'>Nombre</label>
                            <input defaultValue={alimento.nombre} type="text" onChange={(e) => { setAlimento({ ...alimento, nombre: e.target.value }) }} className="form-control alimento-input-name" placeholder='Nombre' required />
                            </div>
                            <div className="col-12 d-flex justify-content-between">
                            <label className='mt-2'>Marca</label>
                            <input defaultValue={alimento.marca} type="text" onChange={(e) => { setAlimento({ ...alimento, marca: e.target.value }) }} className="form-control alimento-input-name" placeholder='Marca'  />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Cantidad</label>
                            <input defaultValue={alimento.cantidad} type="number" onChange={(e) => { setAlimento({ ...alimento, cantidad: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' required />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Unidad</label>
                            <input defaultValue={alimento.unidad} type="text" onChange={(e) => { setAlimento({ ...alimento, unidad: e.target.value }) }} className="form-control alimento-input text-center" placeholder='unidad' required />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Proteinas</label>
                            <input defaultValue={alimento.proteinas} type="number" step='any'    onChange={(e) => { setAlimento({ ...alimento, proteinas: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' required />
                            </div>

                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Carbohidratos</label>
                            <input defaultValue={alimento.carbohidratos} type="number" step='any'   onChange={(e) => { setAlimento({ ...alimento, carbohidratos: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' required />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Fibra</label>
                            <input defaultValue={alimento.fibra} type="number" step='any' onChange={(e) => { setAlimento({ ...alimento, fibra: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0'  />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Azucar</label>
                            <input defaultValue={alimento.azucar} type="number" step='any' onChange={(e) => { setAlimento({ ...alimento, azucar: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0'  />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Grasas</label>
                            <input defaultValue={alimento.grasas} type="number" step='any'   onChange={(e) => { setAlimento({ ...alimento, grasas: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' required />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Saturadas</label>
                            <input defaultValue={alimento.saturadas} type="number" step='any' onChange={(e) => { setAlimento({ ...alimento, saturadas: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0'  />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Monoinsaturadas</label>
                            <input defaultValue={alimento.monoinsaturadas} type="number" step='any' onChange={(e) => { setAlimento({ ...alimento, monoinsaturadas: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0'  />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Poliinsaturadas</label>
                            <input defaultValue={alimento.poliinsaturadas} type="number" step='any' onChange={(e) => { setAlimento({ ...alimento, poliinsaturadas: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0'  />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Transgenicas</label>
                            <input defaultValue={alimento.transgenicas} type="number" step='any' onChange={(e) => { setAlimento({ ...alimento, transgenicas: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0'  />
                            </div>

                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Sodio</label>
                            <input defaultValue={alimento.sodio} type="number" step='any' onChange={(e) => { setAlimento({ ...alimento, sodio: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0'  />
                            </div>

                            <div className="col-12 mt-3 d-flex justify-content-around">
                            <label className=''>Kcal: </label>
                            <label className='text-center'>{alimento.calorias}</label>
                            </div>

                            <div className="col-12 mt-3 d-flex justify-content-center">
                            <button  type='submit' className='btn btn-primary btn-block'>Editar</button>
                            </div>
                            </div>  
                        </form>
                    </div>
                </div>
              
            </div>

        </div>
    )
   }else{
       return(
           <div>
               <Cargando/>
           </div>
       )
   }
}