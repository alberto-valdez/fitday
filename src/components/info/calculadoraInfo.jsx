import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { IconContext } from "react-icons";
import { FaCalculator } from "react-icons/fa";
export default function CalInfo(){
    return(
        <div className='row'>
            <div className="col-lg-6 col-12">
            <div className="row  h-full">
        <div className="col-lg-12  h-full  d-flex justify-content-center">
            <div className="card mt-5 ">
            <div className='col  d-flex  mt-5 justify-content-around'>
                <p className='fecha-index' data-tip data-for='fcha'>13 Diciembre 2016</p>
                <ReactTooltip 
                        id='fcha'
                        place="bottom"
                        effect="solid">
                            Fecha en la que el menú es usado
                    </ReactTooltip>
            </div>
            <hr/>
            <div className='col  d-flex  mt-1 mb-5 justify-content-center'>

                
                    <h6  data-tip data-for='calorias'>2000 Kcal</h6>
                 
                    <ReactTooltip 
                        id='calorias'
                        place="bottom"
                        effect="solid">
                            Calorias que debes consumir
                    </ReactTooltip>
            </div>
            <div className='col  d-flex  mt-2 justify-content-around'>
            <div className='col'>
                <p  data-tip data-for='info1' className='text-center'>0</p>
                <hr/>
                <p className='text-center'>Carbohidratos</p>

                <ReactTooltip 
                        id='info1'
                        place="bottom"
                        effect="solid">
                            Carbohidratos consumidos
                    </ReactTooltip>
            </div>
            <div className='col'>
                <p data-tip data-for='info2'  className='text-center'>0</p>
                 <hr/>
                <p className='text-center'>Proteinas</p>
                <ReactTooltip 
                        id='info2'
                        place="bottom"
                        effect="solid">
                            Proteinas consumidos
                    </ReactTooltip>
            </div>
            <div className='col'>
                <p data-tip data-for='info3' className='text-center'>0</p>
                 <hr/>
                <p className='text-center'>Grasas</p>
                <ReactTooltip 
                        id='info3'
                        place="bottom"
                        effect="solid">
                            Grasas consumidas
                    </ReactTooltip>
            </div>

            <div className='col'>
                <p data-tip data-for='info4' className='text-center'>0</p>
                 <hr/>
                <p className='text-center'>Kcal</p>
                <ReactTooltip 
                        id='info4'
                        place="bottom"
                        effect="solid">
                            Calorías consumidas
                    </ReactTooltip>
            </div>
            </div>
            <div className='buscador  mt-3'>
            <div className="food-list">
                <div data-tip data-for='info5'  className='d-flex justify-content-center'>
                <p className='text-uppercase mt-3 foodName'>No hay alimentos en este menu</p>
            
                </div>
                <ReactTooltip 
                        id='info5'
                        place="bottom"
                        effect="solid">
                            Aqui econtrarás los alimentos que agregues
                    </ReactTooltip>
            
          </div>
          
            </div>
            <div data-tip data-for='info6'  className='col mt-3  d-flex justify-content-center btn-alimentos'>
            
            <button className='btn btn-dark btn-block '>Agregar</button>
                   
            </div>
            <ReactTooltip 
                        id='info6'
                        place="bottom"
                        effect="solid">
                            Click para agregar un alimento que consumiste al menú
                    </ReactTooltip>
            </div>

        
            </div>
        </div>
            </div>

            <div className="col-lg-6 col-12">
            <h1 className='mt-5'>Menú</h1>    
                     
            <h3>Puedes ubirarlo por el icono <IconContext.Provider value={{ size: 20 }}>
                                <FaCalculator />
                            </IconContext.Provider> en la barra superior. El menú contiene los alimentos consumidos, este te dirá cuantos macronutrientes y calorías has consumido durante el día.</h3>   
            <h5 className='mt-3'>Por defecto el menú viene vacío, para empezar a llenar este menú debes pulsar en el botón agregar, este te llevará a una lista de alimentos de nuestra base de datos.</h5>

            <NavLink to='/info/2' className='btn btn-dark  mt-5'>Siguiente</NavLink>
            </div>
        </div>
    )
}