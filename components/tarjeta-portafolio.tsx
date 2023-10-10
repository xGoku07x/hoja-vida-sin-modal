import Image from 'next/image'

interface tarjeta{
    titulo: string;
    subtitulo: string;
    ImagenTarjeta: string;
    linkTienda: string;
    
 }
const TarjetaPortafolio = ({titulo, subtitulo, ImagenTarjeta, linkTienda}: tarjeta) => { 
    return(
        <div className="bg-white justify-center  flex flex-col  px-5 py-5   " >
            <picture className='flex justify-center'>
                <Image width={300} height={300} src={ImagenTarjeta} alt={titulo}/>
            </picture>
            <div className='pl-2 pr-10'>
                <h2 className="text-lg ">{titulo}</h2>
                <h2 className="text-[#767676] text-sm">{subtitulo}</h2>
                <div className='mt-3'>
                    <a href={ linkTienda} className='pointer border bg-teal-700 px-3 py-1  text-white font-semibold '> Leer más</a>
                </div>
                
        
            </div>
            
        </div>
    )}

export {TarjetaPortafolio};