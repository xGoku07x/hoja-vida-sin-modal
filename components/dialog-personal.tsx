import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Dispatch, SetStateAction } from "react";


interface DialogProps {
    open: boolean;
    setDialogoPersonal: Dispatch<SetStateAction<boolean>>
}

const DialogoPersonal = ({open, setDialogoPersonal }:DialogProps) => { 
    return(
        
        <Dialog open={open}>
            <DialogTitle >
            <h1 className="text-2xl">Yendri Ferreira Ramirez</h1>
            <h2>Programador Técnico</h2>
            </DialogTitle>
            <DialogContent>
                <div className="px-10 py-10">

                <span className="text-2xl font-semibold">Desarrollador Shopify</span>
                <h3>Soy responsable de diseñar, desarrollar y mantener tiendas en línea utilizando la plataforma Shopify. 
                    Trabajo en colaboración con un equipo multidisciplinario, siguiendo metodologías ágiles para asegurar la entrega eficiente de proyectos.
                </h3>
                <br />
                <h3 className="text-2xl font-semibold"> Principales tareas: </h3>
                <ul className='list-disc'>
                    <li> Implemento desarrollos a medida utilizando Liquid para optimizar la funcionalidad de las tiendas y brindar experiencias de compra personalizadas.</li>
                    <li>Desarrollo de temas personalizados en Shopify</li>
                    <li>Colaboro estrechamente con el equipo de diseño y los clientes para comprender y traducir sus requisitos en soluciones técnicas efectivas.</li>
                    <li>Desarrollo de aplicaciones privadas y públicas en Shopify</li>
                    <li>Utilizo HTML, CSS, JavaScript y liquid para crear y personalizar temas de Shopify, adaptando el diseño y la funcionalidad según las necesidades de los clientes.</li>
                    
                </ul>
                <br />
                <h2 className="text-2xl font-semibold">Aptitudes</h2>
                <ul className='list-disc'>
                    <li> JavaScript </li>
                    <li>HTML</li>
                    <li>Liquid</li>
                    <li>Contacto con clientes</li>
                    <li>Metodologías ágiles</li>
                    
                </ul>
                

                <div className='flex justify-center mt-10'>
                    
                    <a href="#" className='pointer border bg-teal-700 px-5 py-3 text-white font-semibold' onClick={()=>{ setDialogoPersonal(false)}}>Cerrar Modal</a>
                  </div>

                </div>
                
            </DialogContent>
        </Dialog>
        
    )}

export {DialogoPersonal};