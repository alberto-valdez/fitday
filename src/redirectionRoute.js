import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { DataContext } from './context/dataContext';


export const RedirectionRoute = ({component: Component, ...rest}) =>{
    const {usuario, perfilUser} = useContext(DataContext);
    
    return (
        <Route {...rest} render={
            (props) => {
                if(usuario && perfilUser){
                    return <Redirect to='/index'/>
                }else if(usuario && !perfilUser){
                    return <Redirect to='/bienvenido'/>
                } else {
                    return <Component {...props}/>
                }
            }
        }/>
    )
}