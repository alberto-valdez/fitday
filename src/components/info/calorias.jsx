import { FaHotjar } from "react-icons/fa";
import { IconContext } from "react-icons";
export default function InfoKcal() {
    return (
        <div className="container">


            <div className="col-12 d-flex justify-content-center mt-5">
                <h1 className='mt-5'>
                    <IconContext.Provider value={{ size: 40 }}>
                        <FaHotjar />
                    </IconContext.Provider>¿Que son las calorías?

                <IconContext.Provider value={{ size: 40 }}>
                        <FaHotjar />
                    </IconContext.Provider>
                </h1>
            </div>

            <div className="col-12 d-flex justify-content-center mt-5">
                <p className='text-justify'>
                    Bien, el cuerpo necesita energía para vivir, sin energía, nuestro cuerpo dejaría de funcionar ya que no podría realizar procesos básicos necesarios como respirar o hacer latir nuestro corazón. Esta energía proviene de un solo lugar, los alimentos.
                    Los alimentos contienen esta energía llamada calorías. Nosotros los humanos nos alimentamos para sobrevivir y mantener un metabolismo basal (Energía que el cuerpo gasta en sus funciones vitales) para mantener un peso corporal estable.
                </p >
            </div>

            <div className="col-12 d-flex justify-content-center mt-1">
                <p className='text-justify mt-3'>
                    Nosotros podemos saber cuál es nuestro metabolismo basal y así modificar nuestro consumo calórico para subir o bajar de peso gracias a algunas sencillas fórmulas que toman en cuenta nuestra actividad fisica, sexo, altura, peso y  edad para obtener el resultado más preciso.
                </p>
            </div>

            <div className="col-12 d-flex justify-content-center mt-1">
                <p className='text-justify mt-3'>
                    Es importante entender que el metabolismo basal es diferente para cada persona. Sí "X" persona consume 2000 calorías, no significa que este sea el consumo que tu debes tener, este consumo se determinará por los parámetros explicados con anterioridad.
                </p>
            </div>

        </div>
    )
}