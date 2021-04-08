import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseconfig";


export const DataContext = createContext();

export default function DataProvider({children}){

    const [usuario, setUsuario] = useState(null);
    const [id, setId] = useState(null)
    
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
             setUsuario(user);
             
          
            } else {
                console.log('estoy entrando a null')
                setUsuario(null)
            }
        })
    
    },[])

    useEffect(()=>{
        if(usuario){
            setId(usuario.uid);
        }
    },[usuario])
    
    return(
        <DataContext.Provider value={
            {usuario,
            setUsuario,
            id, 
            setId
            }
            }>
            { children }
        </DataContext.Provider>
    )
}