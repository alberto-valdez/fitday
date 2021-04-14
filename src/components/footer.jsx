import { NavLink } from "react-router-dom";

export default function Footer(){
    return(
        <div className='col-12'>

            <footer className='row footerinfo '>
                <div className="col-6 info">
                    <div className="info-desc">
                        <h3>Ayuda</h3>
                        <NavLink to='/'>¿Que son las calorias?</NavLink> <br/>
                        <NavLink to='/'>¿Como agrego un alimento?</NavLink> <br/>
                        <NavLink to='/'>¿Como uso la calculadora?</NavLink>    <br/>                  
                    </div>
                </div>
                <div className="col-6 info">
                    <div className="info-desc">
                        <h3>Información del desarrollador</h3>
                        <p>albertovaldez.dev@gmail.com</p>
                        <p>https://github.com/alberto-valdez</p>
                    </div>
                    
                </div>
            </footer>

        </div>
    )
}