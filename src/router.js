import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./components";
import Login from "./components/login";
import Navbar from "./components/navbar";
import SignUp from "./components/signup";
import { auth } from "./firebaseconfig";


export default function Router(){
  
    const [usuario, setUsuario] = useState(null);

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
             setUsuario(user.email);
             console.log(user)
            } else {
                setUsuario(null)
            }
        })

    },[])

    return(
        <BrowserRouter>
        {usuario ? (
            <Navbar></Navbar>
        ) :(
<span></span>
        )

        }
            
       
        
        <Switch>
            <Route  exact path='/login' component={Login}/>
            <Route  exact path='/signup' component={SignUp}/>
            <Route exact path='/index' component={Index}/>

        </Switch>
        </BrowserRouter>
    )
}