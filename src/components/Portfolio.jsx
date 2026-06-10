import React from 'react';
import { Github, Linkedin, Mail, User, Code, Briefcase, Terminal } from 'lucide-react';
import Header from './Header';
import { animate } from 'animejs';
import Habilidades from '../components/Habilidades';
import Footer from '../components/Footer';

export default function Portfolio() {
  return (
    <>
    <Header/>
    
      <main>
        {/* <div> */}
      {/* ================= SECCIÓN: SOBRE MÍ ================= */}
<section id="sobre-mi" className="w-full pt-40 pb-20 bg-gray-50 dark:bg-gray-800/50 scroll-mt-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
      {/* Columna Izquierda: Tu Foto o un Diseño */}
      <div className="relative aspect-square max-w-sm mx-auto bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-2xl shadow-xl overflow-hidden flex items-center justify-center text-white font-bold text-xl">
        {/* Aquí puedes reemplazar este div por una etiqueta <img src="..." alt="Tu foto" /> */}
        <img src="vik.png" alt=""/>
      </div>

      {/* Columna Derecha: Texto */}
      <div className="space-y-6 text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">

          Soy Victoria Schneider
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Traduzco ideas en interfaces web intuitivas, rápidas y con pixel-perfect. Como desarrolladora frontend no solo escribo código limpio, creo experiencias interactivas que se sientas fluidas y aporten valor real al usuario.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        Mi stack se mueve con tecnologias modernas del ecosistema, manteniendo siempre la optimización, la accesibilidad y el rendimiento en cada proyecto.
        </p>
        {/* 📄 BOTÓN PARA DESCARGAR EL CV */}
      <div className="mt-8 flex justify-start">
        <a
          href="../../CV_Maria_Victoria_Schneider.pdf" /* Ruta directa a la carpeta public */
          download="../../CV_Maria_Victoria_Schneider.pdf" /* Atributo que fuerza la descarga automática */
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5 transition-all duration-200"
        >
          {/* Icono de descarga minimalista hecho con SVG */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          Descargar CV
        </a>
      </div>
      </div>
    </div>

  </div>
</section>
{/* </div> */}
      </main>
      {/* ================= SECCIÓN: PROYECTOS ================= */}
<section id="proyectos" className="py-20 bg-white dark:bg-gray-900">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
    
    {/* Título de la sección */}
    <div className="text-center md:text-left mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        Mis Proyectos
      </h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
        Una selección de los trabajos más recientes en los que he estado trabajando.
      </p>
    </div>

    {/* Grid de Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* CARD 1 (Repite este bloque por cada proyecto o hazle un .map) */}
      <div className="flex flex-col  overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-950 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        {/* Imagen del proyecto */}
        <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400">
          <img alt="Miniatura del proyecto" src="ecommerce.png" className="w-full h-70 object-cover"/>
        </div>
        {/* Contenido de la Card */}
        <div className="flex flex-1 flex-col justify-between p-6">
          <div className="flex-1">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">React · Tailwind</span>
            <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">E-Commerce App</h3>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
              Plataforma de comercio electrónico con carrito de compras en tiempo real, pasarela de pagos integrada y panel de administración para productos.
            </p>
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <a  className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:hover:text-blue-400">Ver Proyecto&rarr;</a>
            <a href="https://victoria10-bs.github.io/E-commerce/"target="_blank" className="text-sm font-medium text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">Aqui</a>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="flex flex-col overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-950 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400">
          <img alt="Miniatura del proyecto" src="clima.png" className="w-full h-70 object-cover"/>
        </div>
        <div className="flex flex-1 flex-col justify-between p-6">
          <div className="flex-1">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">JavaScript · React</span>
            <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">Clima App</h3>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
              Aplicación del clima que consume una API externa para mostrar el pronóstico en tiempo real basado en la ubicación geográfica del usuario.
            </p>
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <a className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:hover:text-blue-400">Ver Proyecto &rarr;</a>
            <a href="https://victoria10-bs.github.io/Clima-app/" target="_blank" className="text-sm font-medium text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">Aqui</a>
          </div>
        </div>
      </div>
    
    {/* CARD 3 */}
      <div className="flex flex-col overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-950 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400">
          <img alt="Miniatura del proyecto" src="landing-pages2.png" className="w-full h-70 object-cover"/>
        </div>
        <div className="flex flex-1 flex-col justify-between p-6">
          <div className="flex-1">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">JavaScript · React</span>
            <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">Landing Pages</h3>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                Landing page moderna y minimalista orientada a servicios digitales. Desarrollada con react, una interfaz limpia, responsive y una navegación fluida.
            </p>
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <a className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:hover:text-blue-400">Ver Proyecto &rarr;</a>
            <a href="https://victoria10-bs.github.io/Landing-Pages/" target="_blank" className="text-sm font-medium text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">Aqui</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<Habilidades />

<Footer />


        </>

)
};