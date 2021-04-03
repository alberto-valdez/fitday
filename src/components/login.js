import { NavLink } from "react-router-dom";

export default function Login(){
    return(
        <div className='container'>
            <div className='row d-flex justify-content-center pt-5 mt-5 mr-1'>
                <div className='col-lg-6 col-8 form-signin'>
                    <h2 className='text-center'>Bienvenido</h2>
                    <form>
                    <div className='input-group mb-3 '>
                        <input type='email' className='form-control' placeholder='Email' required/>
                         </div>

                    <div className='input-group mb-3'>
                    <input type='password'  className='form-control' placeholder='Password' required/>   
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