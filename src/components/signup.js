import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {auth} from '../firebaseconfig';

export default function SignUp(){

    const [user, setUser] = useState({
        email:'',
        pass:''
    });
    const [validation, setValidation] = useState(false);
    const [checkPass, setCheckPass] = useState('');
    const [msgError, setMsgError] = useState(null)


    const registrar = (e)=>{
        e.preventDefault();

        if(checkPass == user.pass){
          
            auth.createUserWithEmailAndPassword(user.email, user.pass).then(r=>    alert('Usuario registrado')).catch(e =>{

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
            console.log('no coinciden')
        }
    }
    return( 
        <div className='container'>
        <div className='row d-flex justify-content-center pt-5 mt-5 mr-1'>
            <div className='col-lg-6 col-8 form-signin'>
                <h2 className='text-center'>¡Comencemos!</h2>
                <form onSubmit={registrar}>
                <div className='input-group mb-3 '>
                    <input type='email' className='form-control' onChange={(e)=>{setUser({ ...user, email : e.target.value})}} placeholder='Email' required/>
                </div>

                <div className='input-group mb-3'>
                <input type='password'  className='form-control' onChange={(e)=>{setUser({ ...user, pass : e.target.value})}} placeholder='Password' required/>   
                </div>
                {validation ? (
                    <div><p className='alert-pass'>¡Contraseña no coinciden!</p></div>
                ):(
                    <span></span>
                )}
                <div className='input-group mb-3'>
                <input type='password'  className='form-control' onChange={(e)=>{setCheckPass(e.target.value)}} placeholder='Confirm Password' required/>   
                </div>

                <div className='input-group mb-3 d-flex justify-content-center '>
                   <button type='submit' className='btn btn-danger btn-block'>Empezar</button>
                   <NavLink to='/login'>Ya tengo una cuenta</NavLink>
                </div>
                </form>
                {msgError ? 
                (<div className='d-flex justify-content-center'>{msgError}</div>)
                :
                (<span></span>)}
            </div>

        </div>
    </div>
    )
}