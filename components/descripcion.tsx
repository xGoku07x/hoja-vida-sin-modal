interface datos{
    subtitulo: string;
    titulo: string;
 }

const Datos = ({ subtitulo,titulo}:datos) => { 
    return(
        <section className="flex flex-col justify-center text-center mb-10">
           
                <h2 className="text-3xl font-bold">{titulo}</h2>
                <h2>{subtitulo}</h2>
        </section>

    )
       
    }

export {Datos};