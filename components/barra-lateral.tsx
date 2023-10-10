
interface datosBarra{
    porcentaje: number;
    titulo: string;
 }

const BarraCarga = ({ porcentaje,titulo}:datosBarra) => { 
    return(
        <section className="mb-2">
        <div className="flex justify-between">
            <h2>{titulo}</h2>
            <h2>{porcentaje+"%"}</h2>
        </div>
        <div className="flex">
         <span style={{ width: `${porcentaje}%` }} className={`bg-green-200 h-1`}></span>
        </div>
        </section>
       
          
    )
       
    }



export {BarraCarga};

