import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import swal from "sweetalert";
import { DataContext } from "../context/dataContext";
import { store } from "../firebaseStore";
import Cargando from "./cargando";

export default function Add({match}){
    var idFood = match.params.id;
    const {id, fechaMenu, estadoPage, setEstadoPage} = useContext(DataContext);
    const [redirectState, setRedirectState] = useState(false);
 
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
    

    const[valoresEstaticos, setValoresEstaticos] = useState({
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
 
    const [alimentoToSave, setAlimentoToSave] = useState({
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


    // useEffect(()=>{
    //     let kcal = ( parseFloat(alimento.proteinas) * 4 ) +  ( parseFloat(alimento.carbohidratos) * 4 ) + ( parseFloat(alimento.grasas) * 9 )
    //     setAlimento({...alimento, calorias: kcal.toString()})
    // },[alimento.grasas,alimento.proteinas, alimento.carbohidratos])

    useEffect(()=>{
        store.collection('alimentos').where('__name__', '==', `${idFood}`).get().then(snapshot=>{
            setAlimento(snapshot.docs[0].data())     
            setValoresEstaticos(snapshot.docs[0].data())
            setAlimentoToSave(snapshot.docs[0].data())    
            //importante no mover por el useffect que se actualiza cada vez que se modifica alimentoToSave, eso hace que el porcentaje sea NaN   
        }).catch(err=>{
            console.log(err)
        })
      
    },[id])


    

    useEffect(()=>{
   
    let porciento = alimentoToSave.cantidad / valoresEstaticos.cantidad;
    setAlimento({
        azucar: parseFloat(alimentoToSave.azucar * porciento).toFixed(2),
        calorias:  parseFloat(alimentoToSave.calorias * porciento).toFixed(2),
        cantidad:  parseFloat(alimentoToSave.cantidad * porciento).toFixed(2),
        carbohidratos:  parseFloat(alimentoToSave.carbohidratos * porciento).toFixed(2),
        fibra:  parseFloat(alimentoToSave.fibra * porciento).toFixed(2),
        grasas:  parseFloat(alimentoToSave.grasas * porciento).toFixed(2),
        monoinsaturadas:  parseFloat(alimentoToSave.monoinsaturadas * porciento).toFixed(2),
        nombre:  alimentoToSave.nombre,
        poliinsaturadas:  parseFloat(alimentoToSave.poliinsaturadas * porciento).toFixed(2),
        proteinas:  parseFloat(alimentoToSave.proteinas * porciento).toFixed(2),
        saturadas:  parseFloat(alimentoToSave.saturadas * porciento).toFixed(2),
        transgenicas:  parseFloat(alimentoToSave.transgenicas * porciento).toFixed(2),
        sodio:  parseFloat(alimentoToSave.sodio * porciento).toFixed(2),
        unidad:  alimentoToSave.unidad,
        marca:  alimentoToSave.marca
    })

    },[alimentoToSave])

    const Agregar = async (e)=>{
        e.preventDefault();
        try{
            const menu = await store.collection(`/menu/${id}/${fechaMenu.replace(/ /g, "")}`).add(alimento);
            swal('Agregado', 'El alimento se agrego al menú', 'success')
            setEstadoPage(!estadoPage)
            setRedirectState(true)
         } catch(err) {  
            swal('Error', 'Hubo un error al agregar alimento', 'warning')
 
         }
    }

    if(redirectState){
        return(
            <Redirect to='/lista'/>
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
                            <input defaultValue={alimento.nombre} type="text" onChange={(e) => { setAlimento({ ...alimento, nombre: e.target.value }) }} className="form-control alimento-input-name" placeholder='Nombre' disabled />
                            </div>
                            <div className="col-12 d-flex justify-content-between">
                            <label className='mt-2'>Marca</label>
                            <input defaultValue={alimento.marca} type="text" onChange={(e) => { setAlimento({ ...alimento, marca: e.target.value }) }} className="form-control alimento-input-name" placeholder='Marca' disabled />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Cantidad</label>
                            <input defaultValue={alimentoToSave.cantidad} type="number" onChange={(e) => { setAlimentoToSave({ ...alimentoToSave, cantidad: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0'  />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Unidad</label>
                            <input defaultValue={alimento.unidad} type="text" onChange={(e) => { setAlimento({ ...alimento, unidad: e.target.value }) }} className="form-control alimento-input text-center" placeholder='unidad' disabled />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Proteinas</label>
                            <input defaultValue={alimento.proteinas} type="number" step='any'    onChange={(e) => { setAlimento({ ...alimento, proteinas: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' disabled />
                            </div>

                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Carbohidratos</label>
                            <input defaultValue={alimento.carbohidratos} type="number" step='any'   onChange={(e) => { setAlimento({ ...alimento, carbohidratos: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' disabled />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Fibra</label>
                            <input defaultValue={alimento.fibra} type="number" step='any' onChange={(e) => { setAlimento({ ...alimento, fibra: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' disabled />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Azucar</label>
                            <input defaultValue={alimento.azucar} type="number" step='any' onChange={(e) => { setAlimento({ ...alimento, azucar: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0'  disabled/>
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Grasas</label>
                            <input defaultValue={alimento.grasas} type="number" step='any'   onChange={(e) => { setAlimento({ ...alimento, grasas: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' disabled />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Saturadas</label>
                            <input defaultValue={alimento.saturadas} type="number" step='any' onChange={(e) => { setAlimento({ ...alimento, saturadas: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0'  disabled/>
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Monoinsaturadas</label>
                            <input defaultValue={alimento.monoinsaturadas} type="number" step='any' onChange={(e) => { setAlimento({ ...alimento, monoinsaturadas: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' disabled  />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Poliinsaturadas</label>
                            <input defaultValue={alimento.poliinsaturadas} type="number" step='any' onChange={(e) => { setAlimento({ ...alimento, poliinsaturadas: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' disabled />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Transgenicas</label>
                            <input defaultValue={alimento.transgenicas} type="number" step='any' onChange={(e) => { setAlimento({ ...alimento, transgenicas: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' disabled />
                            </div>

                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Sodio</label>
                            <input defaultValue={alimento.sodio} type="number" step='any' onChange={(e) => { setAlimento({ ...alimento, sodio: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0'disabled  />
                            </div>

                            <div className="col-12 mt-3 d-flex justify-content-around">
                            <label className=''>Kcal: </label>
                            <label className='text-center'>{alimento.calorias}</label>
                            </div>

                            <div className="col-12 mt-3 d-flex justify-content-center">
                            <button  type='submit' className='btn btn-primary btn-block'>Agregar alimento</button>
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