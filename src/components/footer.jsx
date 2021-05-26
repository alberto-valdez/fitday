import { NavLink } from "react-router-dom";

export default function Footer(){
    return(
        <div className='col-12'>

            <footer className='row footerinfo d-flex justify-content-center'>
                <div className="col-lg-6 col-xs-12 info ">
                    <div className="info-desc text-center">
                        <h3>Ayuda</h3>
                        <NavLink to='/info/kcal'>¿Que son las calorias?</NavLink> <br/>
                        <NavLink to='/info/macros'>¿Que son los macronutrientes?</NavLink> <br/>
                        <NavLink to='/info/1'>¿Como uso la calculadora?</NavLink>    <br/>                  
                    </div>
                </div>
            </footer>

        </div>
    )
}