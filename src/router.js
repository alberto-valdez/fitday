import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./components";
import Login from "./components/login";
import SignUp from "./components/signup";

export default function Router(){
    return(
        <BrowserRouter>
        <Switch>
            <Route  exact path='/login' component={Login}/>
            <Route  exact path='/signup' component={SignUp}/>
            <Route exact path='/index' component={Index}/>

        </Switch>
        </BrowserRouter>
    )
}