import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseconfig";
import { store } from "../firebaseStore";


export const DataContext = createContext();

export default function DataProvider({children}){

    const [usuario, setUsuario] = useState(null);
    const [id, setId] = useState(null)
    const [perfilUser, setPerfilUser]  = useState(null);
    
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

    useEffect(()=>{
        
        store.collection('perfil').where('__name__', '==' ,`${id}`).get().then(snapshot=>{
    
            setPerfilUser(snapshot.docs[0].data())
           
        }).catch(err=>{
            console.log(err)
        })
     },[id])

    
    return(
        <DataContext.Provider value={
            {usuario,
            setUsuario,
            id, 
            perfilUser,
            setId
            }
            }>
            { children }
        </DataContext.Provider>
    )
}