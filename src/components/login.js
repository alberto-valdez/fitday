import { useState } from "react";
import { NavLink } from "react-router-dom";
import {auth} from '../firebaseconfig';

export default function Login(){

    const [user, setUser] = useState({
        email:'',
        pass:''
    })

    const loginUser = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(user.email, user.pass).then(res=>{

        }).catch(err=>{

        })

    }
    return(
        <div className='container'>
            <div className='row d-flex justify-content-center pt-5 mt-5 mr-1'>
                <div className='col-lg-6 col-8 form-signin'>
                    <h2 className='text-center'>Bienvenido</h2>
                    <form onSubmit={loginUser}>
                    <div className='input-group mb-3 '>
                        <input type='email' className='form-control' onChange={(e)=>{setUser({ ...user, email : e.target.value})}} placeholder='Email' required/>
                         </div>

                    <div className='input-group mb-3'>
                    <input type='password'  className='form-control' onChange={(e)=>{setUser({ ...user, pass : e.target.value})}}  placeholder='Password' required/>   
                     </div>

                    <div className='input-group mb-3 d-flex justify-content-center '>
                       <button type='submit' className='btn btn-danger btn-block'>Sign In</button>
                        <p>¿no tienes cuenta? <NavLink to='/signup'>Registrame</NavLink></p>
                    </div>
                    </form>
                </div>

            </div>
        </div>
    )
}