import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseconfig";
import { store } from "../firebaseStore";


export const DataContext = createContext();

export default function DataProvider({children}){

    const [usuario, setUsuario] = useState(null);
    const [id, setId] = useState(null)
    const [perfilUser, setPerfilUser]  = useState(JSON.parse(window.localStorage.getItem('perfilUser')));
    const [fechaMenu, setFechaMenu] = useState('');
    const [foodData, setFoodData] = useState(null);
    const [foodDataList, setfoodDataList] = useState([]);
    const [fechaToGet, setFechaToGet] = useState('');
  
    let alimentosCollection = window.localStorage.getItem('alimentosColletion') || false;
    let menuCollection = window.localStorage.getItem('menuCollection') || false;
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
            window.localStorage.setItem('perfilUser', JSON.stringify(snapshot.docs[0].data()));
            setPerfilUser(JSON.parse(window.localStorage.getItem('perfilUser')))
        }).catch(err=>{
            console.log(err)
        })
    }

    const getMenuCollection = () =>{
         window.localStorage.setItem('fecha', fechaMenu);
        store.collection('menu').doc(`${id}`).collection(`${fechaToGet}`).get().then(snapshot=>{
            const getData = [];
            snapshot.forEach((doc)=>getData.push({...doc.data(), id: doc.id}));
           if(getData.length <= 0){
             setFoodData(null)
             window.localStorage.removeItem('menuCollection');
             window.localStorage.removeItem('menu');
           } else {
            window.localStorage.setItem('menu', JSON.stringify(getData));
            window.localStorage.setItem('menuCollection', true);
            setFoodData(JSON.parse(window.localStorage.getItem('menu') || '[]'))
           }
         })
    }

    const getAlimentosCollection = () => {
        store.collection('alimentos').get().then(snapshot=>{
            const postData = [];
            snapshot.forEach((doc)=> postData.push({...doc.data(), id: doc.id}));
            setfoodDataList(postData);
            window.localStorage.setItem('alimentos', JSON.stringify(postData));
            window.localStorage.setItem('alimentosColletion', true);
            setfoodDataList(JSON.parse(window.localStorage.getItem('alimentos')|| '[]'));
        })
    }

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
            setfoodDataList(JSON.parse(window.localStorage.getItem('alimentos')|| '[]'));
            setUsuario(user);
            } else {
                setUsuario(null)
                setPerfilUser(null)
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
       
        if(!alimentosCollection){
            getAlimentosCollection();
        }
      
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
        if(fechaToGet !== '' && id !== null){
            if(!menuCollection || fechaMenu !== window.localStorage.getItem('fecha')){
                getMenuCollection()   
            } else {
                setFoodData(JSON.parse(window.localStorage.getItem('menu') || '[]'))
            }
        }
    },[id])
   
    


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