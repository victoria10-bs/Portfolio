import { HandHeart } from 'lucide-react';
import React from 'react';

function Habilidades() {
  const skills = [
    { 
      name: 'HTML5', 
      icon: 'https://cdn.simpleicons.org/html5/E34F26', 
      color: 'hover:border-orange-500/50 hover:shadow-orange-500/10' 
    },
    { 
      name: 'CSS3', 
      icon: 'https://cdn.simpleicons.org/css/1572b6',
      color: 'hover:border-blue-500/50 hover:shadow-blue-500/10' 
    },
    { 
      name: 'JavaScript', 
      icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', 
      color: 'hover:border-yellow-500/50 hover:shadow-yellow-500/10' 
    },
    { 
      name: 'React.js', 
      icon: 'https://cdn.simpleicons.org/react/61DAFB', 
      color: 'hover:border-cyan-400/50 hover:shadow-cyan-400/10' 
    },
    { 
      name: 'Tailwind CSS', 
      icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', 
      color: 'hover:border-sky-400/50 hover:shadow-sky-400/10' 
    },
    { 
      name: 'Git', 
      icon: 'https://cdn.simpleicons.org/git/F05032', 
      color: 'hover:border-orange-600/50 hover:shadow-orange-600/10' 
    },
    { 
      name: 'GitHub', 
      icon: 'https://cdn.simpleicons.org/github/EEEEEE', 
      color: 'hover:border-gray-400/50 hover:shadow-gray-400/10' 
    },
    {
    name: 'TypeScript',
    icon: 'https://cdn.simpleicons.org/typescript/3178C6',
    color: 'hover:border-blue-600/50 hover:shadow-blue-600/10'
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.simpleicons.org/nextdotjs/white',
    color: 'hover:border-gray-400/50 hover:shadow-gray-400/10'
  },
  {
    name: 'Vite',
    icon: 'https://api.iconify.design/logos:vitejs.svg',
    color: 'hover:border-purple-500/50 hover:shadow-purple-500/10'
  },
  ];
  return (
    <section id="habilidades" className="w-full dark:bg-gray-800/50 py-20 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Cabecera */}
        <div className="text-center md:text-left mb-12 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Habilidades
          </h2>
          <p className="text-base text-gray-400 max-w-xl">
            Las tecnologías y herramientas que utilizo en el día a día para construir proyectos robustos, optimizados y escalables.
          </p>
        </div>

        {/* Grid de Cajas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-5 rounded-2xl 
              bg-gray-900/40 border border-gray-800/80 backdrop-blur-sm
              transition-all duration-300 ease-in-out transform hover:-translate-y-1
              cursor-default group ${skill.color} hover:shadow-lg`}
            >
              {/* Contenedor del Icono Oficial */}
              <div className="w-10 h-10 mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img 
                  src={skill.icon} 
                  alt={`Logo de ${skill.name}`} 
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              
              {/* Nombre */}
              <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Habilidades;