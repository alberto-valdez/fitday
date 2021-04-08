import { useContext, useEffect, useState } from "react";
import { FaUserAlt, FaBook, FaCookieBite } from "react-icons/fa";
import { NavLink, useHistory } from "react-router-dom";
import { DataContext } from "../context/dataContext";
import { auth } from "../firebaseconfig";

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
            <a className='navbar-brand-custom'>Fitday</a>
            <ul>
                <li>
                    <NavLink className='navLink'  to='/peril'><FaBook/></NavLink>
                </li>
                <li>
                    <NavLink className='navLink' to='/peril'><FaCookieBite/></NavLink>
                </li>
                <li>
                    <NavLink className='navLink' to='/perfil'><FaUserAlt/></NavLink>
                </li>
                <li>
                    <a onClick={logOut}>LogOut</a>
                </li>
            
                
            </ul>
        </nav>
        </div>
    )
}