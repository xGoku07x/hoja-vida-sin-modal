interface tituloAside{
    titulo: string;
    
 }

const TituloAside=({titulo}:tituloAside)=>{
    
    return(
        <h2 className="text-xl text-black font-medium mb-7">{titulo}</h2> 
    )
    }
  
  export {TituloAside} ;