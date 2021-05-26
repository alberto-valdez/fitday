import { useContext, useState } from "react";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import {auth} from '../firebaseconfig';
import ReactTooltip from 'react-tooltip';
import { DataContext } from "../context/dataContext";

export default function Login(){
    const {usuario,perfilUser} = useContext(DataContext);
    const [user, setUser] = useState({
        email:'',
        pass:''
    })
    const [dropView, setDropView] = useState(false);

    const [msgError, setMsgError] = useState(null)
    const historial = useHistory();
    const loginUser = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(user.email, user.pass).then(res=>{
           historial.push('/index'); 
        }).catch(err=>{
         
            if(err.code == 'auth/wrong-password' || err.code == 'user-not-found' ){
                setMsgError('Usuario o contraseña incorrecto')
            }
        })

    }

    const dropActive = () =>{
        setDropView(!dropView)
     }



    
     
     
    return(

        <div>
         <div className='col-12'>
            <nav className='navbar-custom'>
                        <NavLink to='/infodoppio' data-tip data-for='tooltip' className=' shakeLogo navbar-brand-custom' >
                        Doppio
                        </NavLink>
                        <ReactTooltip id='tooltip'
                        place="bottom"
                        effect="solid"
                        >
                                ¿Qué es Doppio?
                        </ReactTooltip>
            </nav>
        </div>
       
        <div className='container h-full'>
            
            <div className='row d-flex justify-content-center pt-5 mt-5 mr-1 '>
                <div className='col-lg-6 col-8 card'>
                    <div className='buscador login-arreglos'>

            
                    <h2 className='text-center'>Bienvenido</h2>
                    <form onSubmit={loginUser}>
                    <div className='input-group mb-3 '>
                        <input type='email' className='form-control alimento-input' onChange={(e)=>{setUser({ ...user, email : e.target.value})}} placeholder='Email' required/>
                         </div>

                    <div className='input-group mb-3'>
                    <input type='password'  className='form-control alimento-input' onChange={(e)=>{setUser({ ...user, pass : e.target.value})}}  placeholder='Password' required/>   
                     </div>

                    <div className='input-group  d-flex justify-content-center '>
                       <button type='submit' className='btn btn-dark btn-block '>Sign In</button>
                      
                        <p>¿no tienes cuenta? <NavLink to='/signup'>Registrate</NavLink></p> 
                        
                        
                    </div>
                   
                    </form>
                    {msgError ? 
                (<div className='d-flex justify-content-center'>{msgError}</div>)
                :
                (<span></span>)}
                </div>

                
                </div>

            </div>

            
        </div>

    
        </div>
    )
}