import { useContext } from "react"
import { DataContext } from "../context/dataContext"

export default function Index(){

    const {usuario} = useContext(DataContext);
console.log(usuario)


if(!usuario){
    return <div>Cargando</div>
} else {
    return(
        <div>Index </div>
    )
}
    
}