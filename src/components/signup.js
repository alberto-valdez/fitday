import { NavLink } from "react-router-dom";

export default function SignUp(){
    return(
        <div className='container'>
        <div className='row d-flex justify-content-center pt-5 mt-5 mr-1'>
            <div className='col-lg-6 col-8 form-signin'>
                <h2 className='text-center'>¡Comencemos!</h2>
                <form>
                <div className='input-group mb-3 '>
                    <input type='email' className='form-control' placeholder='Email' required/>
                </div>

                <div className='input-group mb-3'>
                <input type='password'  className='form-control' placeholder='Password' required/>   
                </div>
                <div className='input-group mb-3'>
                <input type='password'  className='form-control' placeholder='Confirm Password' required/>   
                </div>

                <div className='input-group mb-3 d-flex justify-content-center '>
                   <button type='submit' className='btn btn-danger btn-block'>Empezar</button>
                   <NavLink to='/login'>Ya tengo una cuenta</NavLink>
                </div>
                </form>
            </div>

        </div>
    </div>
    )
}