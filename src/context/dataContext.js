import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseconfig";
import { store } from "../firebaseStore";


export const DataContext = createContext();

export default function DataProvider({children}){

    const [usuario, setUsuario] = useState(null);
    const [id, setId] = useState(null)
    const [perfilUser, setPerfilUser]  = useState(null);
    const [fechaMenu, setFechaMenu] = useState('');
    const [foodData, setFoodData] = useState(null);
    const [foodDataList, setfoodDataList] = useState([]);
    const [fechaToGet, setFechaToGet] = useState('');
    const [estadoUsuario, setEstadoUsuario] = useState(false);
    const fechaSinFormato = new Date();
    let months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ]

  

    const getPerfilUser = () =>{
  
        store.collection('perfil').where('__name__', '==' ,`${id}`).get().then(snapshot=>{
    
            setPerfilUser(snapshot.docs[0].data())
           
        }).catch(err=>{
            console.log(err)
        })
    }

    const getMenuCollection = () =>{
        store.collection('menu').doc(`${id}`).collection(`${fechaToGet}`).get().then(snapshot=>{
            const getData = [];
            snapshot.forEach((doc)=>getData.push({...doc.data(), id: doc.id}));
           if(getData.length <= 0){
             setFoodData(null)
           } else {
            setFoodData(getData)

           }
         })
    }

    const getAlimentosCollection = () => {
        store.collection('alimentos').get().then(snapshot=>{
            const postData = [];
            snapshot.forEach((doc)=> postData.push({...doc.data(), id: doc.id}));
            
            setfoodDataList(postData);
        })
    }

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
        getPerfilUser();
        getAlimentosCollection();
     },[id])



    useEffect(()=>{
        function makeDate(){
            let dia = fechaSinFormato.getDate();
            let mesIndex = fechaSinFormato.getMonth()
            let mes = months[mesIndex];
            let anio = fechaSinFormato.getFullYear()
            var formato = dia.toString()+ ' ' +  mes + ' ' + anio.toString() 
           setFechaToGet(formato.replace(/ /g, ""))
           setFechaMenu(formato)
           
        }
        makeDate()

    },[usuario])

    useEffect(()=>{
        if(fechaToGet != '' && id != null){
            getMenuCollection()
        }

    },[id ])
   
    


    return(
        <DataContext.Provider value={
            {usuario,
            setUsuario,
            id, 
            perfilUser,
            setId,
            fechaMenu,
            fechaToGet,
            foodData,
            foodDataList,
            getPerfilUser,
            getAlimentosCollection,
            getMenuCollection
            }
            }>
            { children }
        </DataContext.Provider>
    )
}