import { useEffect, useState } from "react"



export default function AddAlimento() {
    const [alimento, setAlimento] = useState({
        azucar: '0',
        calorias: '0',
        cantidad: '',
        carbohidratos: '0',
        fibra: '0',
        grasas: '0',
        monoinsaturadas: '0',
        nombre: '',
        poliinsaturadas: '0',
        proteinas: '0',
        saturadas: '0',
        transgenicas: '0',
        sodio: '0',
        unidad: ''

    })


    useEffect(()=>{
        let kcal = ( parseFloat(alimento.proteinas) * 4 ) +  ( parseFloat(alimento.carbohidratos) * 4 ) + ( parseFloat(alimento.grasas) * 9 )
        setAlimento({...alimento, calorias: kcal})
    },[alimento.grasas,alimento.proteinas, alimento.carbohidratos])


    const Agregar = (e)=>{
        e.preventDefault();
        console.log(alimento)
    }
    return (
        <div>

            <div className="row">
                <div className="col-10 d-flex justify-content-center">
                    <div className="card mt-5 ">
                    
                        <form className='buscador' onSubmit={Agregar}>
                            <div className="col-12 d-flex justify-content-between">
                            <label className='mt-2'>Nombre</label>
                            <input type="text" onChange={(e) => { setAlimento({ ...alimento, nombre: e.target.value }) }} className="form-control alimento-input-name" placeholder='Nombre' required />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Cantidad</label>
                            <input type="number" onChange={(e) => { setAlimento({ ...alimento, cantidad: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' required />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Unidad</label>
                            <input type="text" onChange={(e) => { setAlimento({ ...alimento, unidad: e.target.value }) }} className="form-control alimento-input text-center" placeholder='unidad' required />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Proteinas</label>
                            <input type="number"  defaultValue='0'  onChange={(e) => { setAlimento({ ...alimento, proteinas: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' required />
                            </div>

                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Carbohidratos</label>
                            <input type="number" defaultValue='0'  onChange={(e) => { setAlimento({ ...alimento, carbohidratos: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' required />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Fibra</label>
                            <input type="number" onChange={(e) => { setAlimento({ ...alimento, fibra: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' required />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Azucar</label>
                            <input type="number" onChange={(e) => { setAlimento({ ...alimento, azucar: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' required />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Grasas</label>
                            <input type="number" defaultValue='0'  onChange={(e) => { setAlimento({ ...alimento, grasas: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' required />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Saturadas</label>
                            <input type="number" onChange={(e) => { setAlimento({ ...alimento, saturadas: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' required />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Monoinsaturadas</label>
                            <input type="number" onChange={(e) => { setAlimento({ ...alimento, monoinsaturadas: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' required />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Poliinsaturadas</label>
                            <input type="number" onChange={(e) => { setAlimento({ ...alimento, poliinsaturadas: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' required />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Transgenicas</label>
                            <input type="number" onChange={(e) => { setAlimento({ ...alimento, transgenicas: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' required />
                            </div>

                            <div className="col-12 mt-3 d-flex justify-content-between">
                            <label className='mt-1'>Sodio</label>
                            <input type="number" onChange={(e) => { setAlimento({ ...alimento, sodio: e.target.value }) }} className="form-control alimento-input text-center" placeholder='0' required />
                            </div>

                            <div className="col-12 mt-3 d-flex justify-content-around">
                            <label className=''>Kcal: </label>
                            <label className='text-center'>{alimento.calorias}</label>
                            </div>

                            <div className="col-12 mt-3 d-flex justify-content-center">
                            <button type='submit' className='btn btn-primary btn-block'>Agregar</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
                <div className="col-2">banner</div>
            </div>

        </div>
    )
}