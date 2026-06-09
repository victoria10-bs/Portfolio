// import { useState, useEffect } from "react";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Efecto para cambiar el fondo del header cuando el usuario hace scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Inicio", href: "#inicio" },
//     { name: "CV", href: "#" },
//     { name: "Sobre Mí", href: "#sobre-mi" },
//     { name: "Proyectos", href: "#proyectos" },
//     { name: "Contacto", href: "#contacto" },
//   ];

//     return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-gray-950 border-b border-gray-800 shadow-md h-24 flex items-center">
//       <div className="w-full max-w-5xl mx-auto px-12 flex items-center justify-end">

//           {/* DESKTOP NAVIGATION */}
//           <nav className="hidden md:flex space-x-8 items-center">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-lg font-medium text-gray-600 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
//               >
//                 {link.name}
//               </a>
//             ))}
            
//           </nav>
//           </div>
//           {/* BOTÓN MENÚ MÓVIL (Hamburguesa) */}
//           <div className="flex md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Abrir menú</span>
//               {/* Icono dinámico según el estado abierto/cerrado */}
//               {!isOpen ? (
//                 <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               ) : (
//                 <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               )}
//             </button>
//           </div>
    
//       {/* MENÚ MÓVIL DESPLEGABLE */}
//       <div id="mobile-menu" className={`md:hidden ${isOpen ? "block" : "hidden"}  absolute top-24 left-84 right-0 max-w-sm mx-auto z-50 bg-gray-950/95 backdrop-blur-md border border-gray-800 rounded-2xl py-5 flex flex-col items-center justify-center space-y-4 shadow-2xl`}>
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={() => setIsOpen(false)} // Cierra el menú al hacer click
//               className="block w-full text-center px-7 py-7 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>
//     </header>
//   );
// }

import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Arreglo de navegación optimizado (¡Añadí habilidades!)
  const navLinks = [
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Contacto", href: "#contacto" },
  ];

  // Efecto corregido para controlar el fondo del header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Escuchamos el evento de scroll cuando el componente se monta
    window.addEventListener("scroll", handleScroll);

    // 🔥 LA CORRECCIÓN: Función de limpieza esencial en React
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // El arreglo vacío asegura que esto solo se ejecute una vez al iniciar

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
        isScrolled 
          ? "bg-gray-950/80 backdrop-blur-md border-gray-800/50 py-3 shadow-lg" 
          : "bg-black border-transparent py-6"
      }`}
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        
        {/* Tu Logo o Nombre (Izquierda) */}
        
        {/* DESKTOP NAVIGATION (Derecha) */}
        <nav className="hidden md:flex  space-x-8 ml-auto">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botón Hamburguesa para móviles (Opcional, si usas el estado isOpen) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="flex md:hidden text-gray-400 ml-auto hover:text-white p-2"
          aria-label="Abrir menú"
        >
          {/* Aquí va tu icono de menú */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

      </div>

      {/* MENÚ MÓVIL DESPLEGABLE (Opcional, responde a isOpen) */}
      {isOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-lg border-b border-gray-800 px-4 py-4 space-y-3 absolute w-full left-0 top-full">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
              className="block text-base font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}