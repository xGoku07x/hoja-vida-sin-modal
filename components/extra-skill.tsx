import  Image from 'next/image';

interface skillItems{
    titulo: string;
    
 }
const Eskill = ({titulo}: skillItems) => { 
    return(
        
        <div className='flex mb-3'> 
    
        <Image src="/Icons.png" alt="icono" width={20} height={20} /> 
        <span className='ml-5'>{titulo}</span>
       
        
            
        

        </div> 
    )}

export {Eskill};