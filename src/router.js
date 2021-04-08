import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./components";
import CreatePerfil from "./components/createPerfil";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Perfil from "./components/perfil";
import SignUp from "./components/signup";
import DataProvider, { DataContext } from "./context/dataContext";

import { auth } from "./firebaseconfig";


export default function Router(){
   const {usuario, setUsuario} = useContext(DataContext)
   
  
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
            <Route exact path='/crear' component={CreatePerfil}/>
            <Route exact path='/perfil' component={Perfil}/>

        </Switch>
        </BrowserRouter>
     
    )
}