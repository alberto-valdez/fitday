import { useContext, useEffect, useState } from "react";
import { FaUserAlt, FaCalculator, FaCookieBite } from "react-icons/fa";
import { NavLink, useHistory } from "react-router-dom";
import { DataContext } from "../context/dataContext";
import { auth } from "../firebaseconfig";
import { IconContext } from "react-icons";
export default function Navbar(){
    const history = useHistory();
    const {setId} = useContext(DataContext)
    const logOut = (e) =>{
        e.preventDefault();
        setId(null)
        auth.signOut();

        history.push('/login')
    }
   
        return(
        <div className='col-12'>
        <nav className='navbar-custom'>
            <a className='navbar-brand-custom'>Lateapp</a>
            <ul>
                <li>
                    <NavLink activeClassName='main-nav-active' className='navLink'  to='/index'>
                        <IconContext.Provider value={{ size:20 }}>
                        <FaCalculator/>
                        </IconContext.Provider>    
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='main-nav-active' className='navLink' to='/alimentos'>
                    <IconContext.Provider value={{ size:20 }}>
                    <FaCookieBite/>
                        </IconContext.Provider>    
                        
                        </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='main-nav-active' className='navLink' to='/perfil'>
                        
                    <IconContext.Provider value={{ size:20 }}>
                        <FaUserAlt/>
                        </IconContext.Provider>    
                    </NavLink>
                </li>
               
            
                
            </ul>
        </nav>
        </div>
    )
}