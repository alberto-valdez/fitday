import { FaHamburger,FaCheese, FaCarrot, FaFish } from "react-icons/fa";
import { IconContext } from "react-icons";
export default function InfoMacros() {
    return (
        <div className="container">


            <div className="col-12 d-flex justify-content-center mt-5">
                <h1 className='mt-5'>
                    <IconContext.Provider value={{ size: 40 }}>
                        <FaHamburger />
                    </IconContext.Provider> ¿Que son los macronutrientes? <IconContext.Provider value={{ size: 40 }}>
                        <FaHamburger />
                    </IconContext.Provider>
                </h1>
            </div>

            <div className="col-12 d-flex justify-content-center mt-5">
                <p className='text-justify'>
                Los alimentos se componen de macronutrientes, estos son responsables de aportar la energía para nuestro organismo. Hay 3 tipos de macronutrientes: grasas, proteínas y carbohidratos.      
                </p >
            </div>

            <div className="col-12 d-flex justify-content-center mt-1">
                <p className='text-justify mt-3'>
                <IconContext.Provider value={{ size: 20 }}>
                        <FaCheese />
                    </IconContext.Provider> Grasas:
Las grasas o lípidos se dividen en 4 tipos: saturadas, monoinsaturadas, poliinsaturadas y transgenicas. Se encuentran tanto en forma sólida como líquida  en alimentos como la mantequilla, nueces, aceites y quesos. Las grasas aportan 9 calorías por gramo y ofrecen a nuestro cuerpo diferentes vitaminas.

                </p>
            </div>

            <div className="col-12 d-flex justify-content-center mt-1">
                <p className='text-justify mt-3'>
                <IconContext.Provider value={{ size: 20 }}>
                        <FaFish />
                    </IconContext.Provider> Proteínas: 
La proteína se compone de diferentes cadenas de aminoácidos, y es importante para funciones hormonales y  el sistema inmune de nuestro cuerpo. Son una parte importante en la fibra muscular y en la creación de ella, la proteína se encuentra en diferentes alimentos tanto de origen animal, como de legumbres y frutos secos. Por cada gramo de proteínas  obtenemos 4 calorías. 


                </p>
            </div>

            <div className="col-12 d-flex justify-content-center mt-1">
                <p className='text-justify mt-3'>
                <IconContext.Provider value={{ size: 20 }}>
                        <FaCarrot />
                    </IconContext.Provider> Carbohidratos: 
Es nuestro proveedor número uno de energía, nuestro cuerpo prioriza los carbohidratos para usarlos durante la actividad física o mental, es un macronutriente muy complejo y lo encuentras en diferentes alimentos como verduras, legumbres, cereales y dulces. Por cada gramo de carbohidratos obtenemos 4 calorías. 

                </p>
            </div>
        </div>
    )
}