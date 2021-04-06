import { useContext } from "react"
import { DataContext } from "../context/dataContext"

export default function Index(){

    const {usuario} = useContext(DataContext);

    return(
        <div>Index {usuario}</div>
    )
}