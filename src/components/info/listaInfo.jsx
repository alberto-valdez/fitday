import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { IconContext } from "react-icons";
import { FaCookieBite } from "react-icons/fa";

export default function ListaInfo() {
    return (
        <div className="row">
            <div className="col-6">
                <div className="col-12 d-flex justify-content-center">
                    <div className='card mt-5'>
                        <div className="input-group mb-3 buscador">
                            <input type="text" className='form-control' data-tip data-for='buscar' placeholder='Buscar alimento' />
                            <ReactTooltip
                                id='buscar'
                                place="bottom"
                                effect="solid">
                                Escribe el nombre de un alimeto para econtrarlo
                            </ReactTooltip>
                            <button className='btn btn-outline-secondary' type='submit' >Buscar</button>

                            <button className='btn btn-outline-secondary' data-tip data-for='addFood' type='button'  >+</button>
                            <ReactTooltip
                                id='addFood'
                                place="bottom"
                                effect="solid">
                                Click para agregar un nuevo alimento a la base de datos
                            </ReactTooltip>
                        </div>

                        <div className='buscador'>
                            <div className="box-food overflow-auto">
                                <div className="food-list">
                                    <div className='d-flex justify-content-around'>
                                        <p className='text-uppercase foodName' data-tip data-for='nombre'>Alimento </p>
                                        <ReactTooltip
                                            id='nombre'
                                            place="bottom"
                                            effect="solid">
                                            Nombre del alimento
                                        </ReactTooltip>
                                        <p data-tip data-for='kcal' >Kcal: 300</p>
                                        <ReactTooltip
                                            id='kcal'
                                            place="bottom"
                                            effect="solid">
                                            Contenido calorico
                                        </ReactTooltip>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <p data-tip data-for='marca' className='text-uppercase foodMerch'>Marca </p>
                                        <ReactTooltip
                                            id='marca'
                                            place="bottom"
                                            effect="solid">
                                            Marca comercial del alimento
                                        </ReactTooltip>
                                    </div>
                                    <div className='d-flex justify-content-around'>
                                        <p data-tip data-for='pro'> P: 13</p>
                                        <p data-tip data-for='gra'>G: 6</p>
                                        <p data-tip data-for='car'>C: 9</p>
                                        <ReactTooltip
                                            id='pro'
                                            place="bottom"
                                            effect="solid">
                                            Contenido proteico del alimento
                                        </ReactTooltip>

                                        <ReactTooltip
                                            id='gra'
                                            place="bottom"
                                            effect="solid">
                                            Contenido graso del alimento
                                        </ReactTooltip>
                                        <ReactTooltip
                                            id='car'
                                            place="bottom"
                                            effect="solid">
                                            Contenido de carbohidratos del alimento
                                        </ReactTooltip>
                                    </div>
                                    <hr />
                                    <div data-tip data-for='btn' className="d-flex justify-content-center">
                                        <button className='btn '>Editar</button>
                                    </div>
                                    <ReactTooltip
                                        id='btn'
                                        place="bottom"
                                        effect="solid">
                                        Click para editar un alimento
                                    </ReactTooltip>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="col-6">
                <h1 className='mt-5'>Lista de alimentos </h1>
                <h3>Puedes ubicarlo por el icono  <IconContext.Provider value={{ size: 20 }}>
                                <FaCookieBite />
                            </IconContext.Provider> ubicado en la barra superior.  En nuestra lista de alimentos podrás editar y agregar nuevos alimentos</h3>
                <h5 className='mt-3'>los alimentos que agregues o edites podrá ser usado por otros usuarios. </h5>
                <NavLink to='/index' className='btn btn-dark  mt-5'>Empezar</NavLink>
            </div>

        </div>
    )
}