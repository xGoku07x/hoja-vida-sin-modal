interface aboutItems{
    titulo: string;
    resultado: string;
 }

const AItem = ({titulo, resultado}: aboutItems) => { 
    return(
        <div className="flex justify-between px-10 ">
            <h2>{titulo}</h2>
            <h2>{resultado}</h2>
        </div>    
    )}

export {AItem};