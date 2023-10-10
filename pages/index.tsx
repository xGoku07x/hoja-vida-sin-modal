import { IconType } from "react-icons";
import { DiHtml5 } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { BiLogoFacebook} from "react-icons/bi";
import { BiLogoLinkedin} from "react-icons/bi";
import { BiLogoTwitter} from "react-icons/bi";
import { TbBrandNextjs} from "react-icons/tb";
import { DiJava } from "react-icons/di";
import { PiFileSqlBold } from "react-icons/pi";

import  Image from 'next/image';
import {Hr} from '@/components/hr';
import {AItem } from '@/components/about-items';
import {TituloAside} from '@/components/titulo-aside';
import {BarraCarga} from '@/components/barra-lateral';
import {Eskill} from '@/components/extra-skill';
import {Tarjeta} from '@/components/tarjeta';
import {Datos} from '@/components/descripcion';
import {TarjetaPortafolio} from '@/components/tarjeta-portafolio';
import {RedSocial} from '@/components/imagen-red-social';
import { DialogoPersonal } from "@/components/dialog-personal";




const index= ()=>{
 
  return (
    
    
       <main className="flex  ">
        <aside className="w-3/12 bg-white  sticky top-0 h-screen ">

          <section className='grid justify-center  py-6 '>

            <picture className='mb-5'>
              <Image src="/foto-perfil.jpg" alt="foto de perfil" width={120} height={120} className='rounded-full overflow-hidden'/>
            </picture>
            <h3 className='text-black font-medium'>Yendri Ferreira</h3>
            <h4 className='text-gray-400 font-medium'> Front-end</h4>
          </section>

          <Hr/>

          <section>
          <AItem titulo="Edad" resultado="22"/>
          <AItem titulo="Correo" resultado="yendri950@hotmail.com"/>
          <AItem titulo="Residencia" resultado="Bello, Antioquia"/>
          </section>
          <Hr/>
          <section className='ml-[10%] mr-[10%]'>
            <TituloAside titulo="Lenguajes"/>
            <BarraCarga porcentaje={97} titulo='Español' />
            <BarraCarga porcentaje={60} titulo='Inglés' />
            <BarraCarga porcentaje={30} titulo='Portugues' />
            
          </section>
          <Hr/>
          <section className='ml-[10%] mr-[10%]' >
            <TituloAside titulo="Lenguajes de programación"/>
            
            <BarraCarga porcentaje={87} titulo='Liquid' />
            <BarraCarga porcentaje={79} titulo='Java' />
            <BarraCarga porcentaje={86} titulo='C#' />
          </section>
          <Hr/>
          <section className='ml-[10%] mr-[10%]' >
            <TituloAside titulo="Extra Skills"/>
            <Eskill titulo="Boostrap"/>
            <Eskill titulo="Shopify"/>
            <Eskill titulo="WordPress"/>
           
          </section>
          <Hr/>
          
  
        </aside>


        <div className="w-8/12 bg-[#f0f0f6] px-10">
          <section className='bg-white flex'>
            <div className='w-3/5 '>
              <div className='px-[10%] pt-[10%] pb-[5%]'>
                <h1 className='text-3xl'>Soy Yendri Ferreira</h1>
                <h1 className='text-teal-700 text-3xl mb-5'>Shopify Developer</h1>
                <p>Soy responsable de diseñar, desarrollar y mantener tiendas en línea utilizando la plataforma Shopify. 
                  Trabajo en colaboración con un equipo multidisciplinario, siguiendo metodologías ágiles para asegurar la entrega eficiente de proyectos</p>
                  <br/>
                  <div className='flex justify-start'>
                    
                    <a href="#" className='pointer border bg-teal-700 px-5 py-3 text-white font-semibold'  >Contratame</a>
                  </div>
              </div>
            </div>
            <div className='w-2/5'>
              <div className='pt-[5%] '>
                <Image src="/fotoPng.png" alt="foto de perfil" width={300} height={300} className=' overflow-hidden'/>
              </div>
            </div>
          </section>

          <section className='mt-10'>
            <div >
              <Datos titulo="Mi conocimiento" subtitulo="Esto es una breve inducción sobre  mis conocimientos"/>
            </div>
            
            <section className="flex  justify-center  ">
              <div className="flex   gap-10 justify-center ">
                <div className="w-1/3"  >
                  <Tarjeta titulo='Javascript' ImagenTarjeta={DiJavascript} subtitulo="Llevo programando en javascript los ultimos 13 meses de mi vida" />
                </div>
                <div className="w-1/3">
                <Tarjeta titulo='Html5' ImagenTarjeta={DiHtml5} subtitulo="Llevo trabajando con html los ultimos 13 meses de mi vida" />
                </div>
                <div className="w-1/3">
                  <Tarjeta titulo='Css' ImagenTarjeta={DiCss3} subtitulo="Llevo trabajando con CSS los ultimos 13 meses de mi vida" />
                </div>
              </div>
            </section>
            <section className="flex  justify-center mt-10 ">
              <div className="flex   gap-10 justify-center ">
                <div className="w-1/3"  >
                  <Tarjeta titulo='Next' ImagenTarjeta={TbBrandNextjs} subtitulo="Tenía conocimientos de React y últimamente he adquerido conocimiento en Next" />
                </div>
                <div className="w-1/3">
                <Tarjeta titulo='Java' ImagenTarjeta={DiJava} subtitulo="El primer lenguaje de programación que aprendí fue Java, tengo conocimientos en su franework Spring boot" />
                </div>
                <div className="w-1/3">
                  <Tarjeta titulo='SQL' ImagenTarjeta={PiFileSqlBold} subtitulo="Tengo un conocimiento avanzado en MySQL, Sql Server y Oracle SQL" />
                </div>
              </div>
            </section>


            <div className="mt-10">
              <Datos titulo="Educación" subtitulo="Aquí un pequeño resumen sobre mis estudios a lo largo de mi vida"/>
            </div>

            <section className="">
              <div className="flex ">
                <div className="w-2/5 px-5 py-5  flex  bg-white  justify-center text-center items-center" >
                <TituloAside titulo="Institución universitaria Marco Fidel Suarez"/>
                </div>
                <div className="w-3/5 px-5 py-5 bg-white ml-5 flex justify-center text-center items-center">
                <Datos titulo="Técnico" subtitulo="Técnico en reparación y mantenimiento de computadores, 2018"/>
                </div>
              </div>
              <div className="flex mt-5">
                <div className="w-2/5 px-5 py-5  flex  bg-white  justify-center text-center items-center" >
                <TituloAside titulo="SENA"/>
                </div>
                <div className="w-3/5 px-5 py-5 bg-white ml-5 flex justify-center text-center items-center">
                <Datos titulo="Técnico" subtitulo="Técnico en desarrollo de software, 2019"/>
                </div>
              </div>
            </section>

            <div className="mt-10">
              <Datos titulo="Portafolio" subtitulo="Daré un pequeño vistazo al portafolio que he construido en base a mis años de vida"/>
            </div>
            <section className="flex mb-20 justify-center gap-10">
              <div className="w-1/3 " >
              <TarjetaPortafolio titulo="Casio Titec" subtitulo="Fui participe del desarrollo de la tienda actual de Casio en Colombia" ImagenTarjeta="/casio.png" linkTienda="https://tiendascasio.titec.co/?gclid=CjwKCAjwyY6pBhA9EiwAMzmfwSnfMzTQu0xRyMdDVnHTH9TCY-_oGvZgrHirNGCVNBBgM3C4zRnfSRoCzFoQAvD_BwE"/>

              </div>
              <div className="w-1/3">
                <TarjetaPortafolio titulo="L'occitane" subtitulo="Fui participe del desarrollo de la tienda actual de L'Occitane en Colombia" ImagenTarjeta="/loccitane.png" linkTienda="https://co.loccitane.com/"/>
              </div>
              <div className="w-1/3">
                <TarjetaPortafolio titulo="Chamela" subtitulo="Fui participe del desarrollo de la tienda actual de Chamela en Colombia" ImagenTarjeta="/chamela.jpg" linkTienda="https://www.chamela.co/"/>
              </div>

            </section>

          </section>

          <section>
          <footer className="bg-white w-full text-center py-3 font-semibold">  Derechos reservados - Yendri Ferreira - 2023</footer>
          </section>
        </div>

        <aside className="w-1/12 bg-white fixed h-screen right-0">
          <div className="grid justify-center mt-20 font-semibold">
            <h2 className="text-xl " >Links</h2>
            <RedSocial ImageIcon={BiLogoFacebook} linkRedSocial="https://www.facebook.com/yendri950"/>
            <RedSocial ImageIcon={BiLogoLinkedin} linkRedSocial="https://www.linkedin.com/in/yendri-f-41aa98119/"/>
            <RedSocial ImageIcon={BiLogoTwitter} linkRedSocial="https://twitter.com/home"/>
          </div>
        </aside>
          
    </main>

    
      

  )
}


export default index;