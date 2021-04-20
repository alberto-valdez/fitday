import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./components";
import AddAlimento from "./components/addAlimentos";
import Alimentos from "./components/alimentos";
import CreatePerfil from "./components/createPerfil";
import EditAlimentos from "./components/editAlimentos";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Perfil from "./components/perfil";
import SignUp from "./components/signup";
import Lista from "./components/list";
import DataProvider, { DataContext } from "./context/dataContext";

import { auth } from "./firebaseconfig";
import Add from "./components/add";
import Footer from "./components/footer";
import DoppioInfo from "./components/info/doppio";


export default function Router(){
   const {usuario, setUsuario} = useContext(DataContext)
   
  
    return(
<div className='wrap-content'>
       
        <BrowserRouter>
        {usuario ? (
            <Navbar></Navbar>
        ) :(
            <span></span>
        )

        }
            
       
        
        <Switch>
            <Route  exact path='/login' component={Login}/>
            <Route  exact path='/infodoppio' component={DoppioInfo}/>
            <Route  exact path='/signup' component={SignUp}/>
            <Route exact path='/index' component={Index}/>
            <Route exact path='/crear' component={CreatePerfil}/>
            <Route exact path='/perfil' component={Perfil}/>
            <Route exact path='/alimentos' component={Alimentos}/>
            <Route exact path='/addAlimento' component={AddAlimento}/>
            <Route exact path='/editarAlimento/:id' component={EditAlimentos}/>
            <Route exact path='/lista' component={Lista}/>
            <Route exact path='/lista/add/:id' component={Add}/>
        </Switch>
        {usuario ? (
           
        <Footer></Footer>
        ) :(
            <span></span>
        )

        }
        </BrowserRouter>
     
        </div>
    )
}