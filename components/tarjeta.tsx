import { IconType } from "react-icons";
import { DiJsBadge } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";


interface tarjeta{
    titulo: string;
    subtitulo: string;
    ImagenTarjeta: IconType;
    
 }
const Tarjeta = ({titulo, subtitulo, ImagenTarjeta}: tarjeta) => { 
    return(
        <div className="bg-white justify-center text-center items-center flex flex-col h-[150px] w-[300px] px-5 " >
            <ImagenTarjeta size={60}/>
            <h2 className="text-lg ">{titulo}</h2>
            <h2 className="text-[#767676] text-sm">{subtitulo}</h2>
        </div>
    )}

export {Tarjeta};