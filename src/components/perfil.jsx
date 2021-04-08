import { useContext, useEffect, useState } from "react"
import { DataContext } from "../context/dataContext"
import { store } from "../firebaseStore";

export default function Perfil (){

    const {id} = useContext(DataContext);
    const [perfilUser, setPerfilUser]  = useState(null);
    console.log(id)
    useEffect(()=>{
        
        store.collection('perfil').where('__name__', '==' ,`${id}`).get().then(snapshot=>{
           console.log(snapshot.docs[0].data())
            setPerfilUser(snapshot.docs[0].data())
           
        }).catch(err=>{
            console.log(err)
        })
     },[id])

     

    return (
    <div>
        {!perfilUser ? (
            <div>Cargando</div>
        ):(
            <div className='container-fluid'>
              
            <div className='row'>

                <div className="col-10  d-flex justify-content-center">
                    <div className="card mt-5">
            <div className="col d-flex justify-content-center mt-5">
            <img className='  d-flex justify-content-center' src="https://www.hotfootdesign.co.uk/wp-content/uploads/2016/05/d5jA8OZv.jpg" alt=""/>
            </div>
                       
                        <div className="card-body text-center">
                            <h3 className='card-title text-uppercase'>{perfilUser.nombre}</h3>
                            <p>{perfilUser.edad} años {perfilUser.estatura} Cm. {perfilUser.peso} Kg.</p>
                            <hr/>
                        </div>
                        <div className="card-body">
                         
                           <div className="col-12  text-center" ><p className='datos-perfil'>Objetivo</p><p>{perfilUser.meta}</p></div>
                           <div className="col-12 text-center" ><p className='datos-perfil'>Gasto calorico basal</p><p>{perfilUser.basal} Kcal</p></div>
                           <div className="col-12 text-center" ><p className='datos-perfil'>Gasto calorico meta</p><p>{perfilUser.kcalMeta} Kcal</p></div>
                        </div>
                    </div>
                </div>

                <div className="col-2">
                    <h1>Banner</h1>
                </div>










            </div>

            </div>
        )
        }
    </div>
    )
}