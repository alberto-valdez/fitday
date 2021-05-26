import { useContext, useState } from "react";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { DataContext } from "../context/dataContext";
import {auth} from '../firebaseconfig';

export default function SignUp(){
    const historial = useHistory();
    const [user, setUser] = useState({
        email:'',
        pass:''
    });
    const [validation, setValidation] = useState(false);
    const [checkPass, setCheckPass] = useState('');
    const [msgError, setMsgError] = useState(null)
    const {usuario} = useContext(DataContext);
    if(usuario){
           return (
               <Redirect to='/index'/>
           )
       }

    const registrar = (e)=>{
        e.preventDefault();

        if(checkPass === user.pass){
          
            auth.createUserWithEmailAndPassword(user.email, user.pass).then(r=> {historial.push('/bienvenido')}).catch(e =>{

                if(e.code == 'auth/email-already-in-use'){
                    setMsgError('El email ya esta en uso')
                   }  else if(e.code = 'auth/weak-password'){
                    setMsgError('El password debe ser mayor a 6 caracteres')
                   } 
        
                   
            })
        }
         else {
            // auth/email-already-in-use --- auth/weak-password
            setValidation(true)
        }
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
        <div className='row d-flex justify-content-center pt-5 mt-5 '>
            <div className='col-lg-6 col-12 card'>
            <div className='buscador login-arreglos'>
                <h2 className='text-center'>Registro</h2>
                <form onSubmit={registrar}>
                <div className='input-group mb-3 '>
                    <input type='email' className='form-control  alimento-input' onChange={(e)=>{setUser({ ...user, email : e.target.value})}} placeholder='Email' required/>
                </div>

                <div className='input-group mb-3'>
                <input type='password'  className='form-control  alimento-input' onChange={(e)=>{setUser({ ...user, pass : e.target.value})}} placeholder='Password' required/>   
                </div>
                {validation ? (
                    <div><p className='alert-pass'>¡Contraseña no coinciden!</p></div>
                ):(
                    <span></span>
                )}
                <div className='input-group mb-3'>
                <input type='password'  className='form-control  alimento-input' onChange={(e)=>{setCheckPass(e.target.value)}} placeholder='Confirm Password' required/>   
                </div>

                <div className='input-group mb-3 d-flex justify-content-center '>
                   <button type='submit' className='btn btn-dark btn-block'>Empezar</button>
                   <p>¿Ya tienes una cuenta? Inicia sesión <NavLink to='/login'>aqui.</NavLink></p>
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