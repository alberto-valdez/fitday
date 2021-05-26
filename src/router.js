import { useContext } from "react";
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
import { DataContext } from "./context/dataContext";

import Add from "./components/add";
import Footer from "./components/footer";
import DoppioInfo from "./components/info/doppio";
import { ProtectedRoute } from "./protectedRoute";
import CalInfo from "./components/info/calculadoraInfo";
import ListaInfo from "./components/info/listaInfo";
import InfoKcal from "./components/info/calorias";
import InfoMacros from "./components/info/macros";
import Welcome from "./components/info/welcome";
import { RedirectionRoute } from "./redirectionRoute";


export default function Router(){
   const {usuario} = useContext(DataContext)
   
  
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
            <RedirectionRoute  exact path='/login' component={Login}/>
            <Route  exact path='/infodoppio' component={DoppioInfo}/>
            <Route  exact path='/signup' component={SignUp}/>
            <Route  exact path='/bienvenido' component={Welcome}/>


            <ProtectedRoute exact path='/' component={Index}/>
            <ProtectedRoute exact path='/index' component={Index}/>
            <Route exact path='/crear' component={CreatePerfil}/>
            <ProtectedRoute exact path='/perfil' component={Perfil}/>
            <ProtectedRoute exact path='/alimentos' component={Alimentos}/>
            <ProtectedRoute exact path='/addAlimento' component={AddAlimento}/>
            <ProtectedRoute exact path='/editarAlimento/:id' component={EditAlimentos}/>
            <ProtectedRoute exact path='/lista' component={Lista}/>
            <ProtectedRoute exact path='/lista/add/:id' component={Add}/>
            <ProtectedRoute exact path='/info/1' component={CalInfo}/>
            <ProtectedRoute exact path='/info/2' component={ListaInfo}/>
            <ProtectedRoute  exact path='/info/kcal' component={InfoKcal}/>
            <ProtectedRoute  exact path='/info/macros' component={InfoMacros}/>
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