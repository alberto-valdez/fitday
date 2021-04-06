import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseconfig";


export const DataContext = createContext();

export default function DataProvider({children}){

    const [usuario, setUsuario] = useState(null);

    

    return(
        <DataContext.Provider value={
            {usuario,
            setUsuario}
            }>
            { children }
        </DataContext.Provider>
    )
}