import { useContext, useEffect, useState } from "react";
import { FaUserAlt, FaCalculator, FaCookieBite } from "react-icons/fa";
import { NavLink, useHistory } from "react-router-dom";
import { DataContext } from "../context/dataContext";
import { auth } from "../firebaseconfig";
import { IconContext } from "react-icons";
import swal from 'sweetalert';
export default function Navbar() {
    const history = useHistory();
    const [dropView, setDropView] = useState(false);
    const { setId } = useContext(DataContext)
    const logOut = (e) => {


       swal({
        title: "¿Quieres cerrar sesión?",
        icon:'warning',
        buttons: true,
        dangerMode: true,
    }).then((willDelete)=>{
        if(willDelete){
            setId(null)
            auth.signOut();
    
            history.push('/login')
         
        } else {
            swal('Se canceló la acción')
        }
    })
    }

    const dropActive = () =>{
       setDropView(!dropView)
    }

    return (
        <div className='col-12'>
            <nav className='navbar-custom row'>
                <a className='navbar-brand-custom'>Doppio</a>
                <ul>
                    <li>
                        <NavLink activeClassName='main-nav-active' className='navLink' to='/index'>
                            <IconContext.Provider value={{ size: 20 }}>
                                <FaCalculator />
                            </IconContext.Provider>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='main-nav-active' className='navLink' to='/alimentos'>
                            <IconContext.Provider value={{ size: 20 }}>
                                <FaCookieBite />
                            </IconContext.Provider>

                        </NavLink>
                    </li>
                    <li className='dropdown'>
                        <a activeClassName='main-nav-active' onClick={dropActive} className='navLink dropdown-toggle' >

                            <IconContext.Provider value={{ size: 20 }}>
                                <FaUserAlt />
                            </IconContext.Provider>
                        </a>
                        { !dropView ? (
                            <span></span>
                        ) : (
                            <div className='dropitems' >
                            <NavLink className='drop-url' to={'/perfil'}  href="#">Perfil</NavLink>
                            <a className='drop-url' onClick={logOut}>LogOut</a>

                            </div>
                        )
                        }
                        
                    </li>



                </ul>
            </nav>
        </div>
    )
}