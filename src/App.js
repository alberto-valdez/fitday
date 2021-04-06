

import DataProvider from "./context/dataContext";
import Router from "./router";

import './styles.css'


export default function App() { 

  return (
    <DataProvider>
 <Router/>
</DataProvider>
 
 
    
 
  );
}

