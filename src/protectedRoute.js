import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { DataContext } from './context/dataContext';


export const ProtectedRoute = ({component: Component, ...rest}) =>{
    const {perfilUser} = useContext(DataContext);
    
    return (
        <Route {...rest} render={
            (props) => {
                if(perfilUser){
                    return <Component {...props}/>
                } else {
                    return <Redirect to='/login'/>
                }
                
            }
        }/>
    )
}