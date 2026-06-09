import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="w-full bg-gray-950/80 backdrop-blur-md border-t border-gray-800/50 py-12 mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Izquierda: Texto de Copyright o Nombre */}
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-400 font-medium">
            &copy; {currentYear} | Casi todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Diseñado y desarrollado con dedicación.
          </p>
        </div>

        {/* Derecha: Iconos de Redes Sociales */}
        <div className="flex items-center space-x-6">

          {/* WhatsApp */}
          
          <a
  href="https://wa.me/5493454485919?text=Hola%20Victoria,%20vi%20tu%20portfolio%20y%20me%20gustaría%20contactarte"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-green-500 transition-colors duration-200"
  title="Enviar WhatsApp"
>
  {/* Icono minimalista de WhatsApp en SVG */}
  <svg 
    className="w-6 h-6" 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.42 1.451 5.398 0 9.794-4.393 9.797-9.793a9.715 9.715 0 0 0-2.87-6.934 9.713 9.713 0 0 0-6.923-2.867C6.621 2.021 2.226 6.415 2.223 11.815c0 1.954.51 3.86 1.476 5.474l-.98 3.58 3.688-.967zM17.15 14.39c-.3-.15-1.774-.875-2.046-.974-.272-.1-.47-.15-.668.15-.197.3-.763.974-.934 1.172-.17.197-.341.223-.642.073-1.923-.96-3.158-1.742-4.14-3.425-.3-.514.3-.477.857-1.59.09-.18.044-.337-.023-.47-.066-.132-.668-1.61-.915-2.203-.243-.585-.49-.505-.668-.514l-.57-.01c-.197 0-.518.073-.79.366-.272.293-1.037 1.012-1.037 2.47 0 1.456 1.06 2.865 1.209 3.064.148.197 2.085 3.184 5.052 4.466.705.305 1.256.487 1.685.623.71.226 1.356.194 1.867.118.571-.085 1.774-.726 2.022-1.43.247-.704.247-1.306.173-1.43-.073-.124-.272-.198-.57-.347z"/>
  </svg>
</a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/victoriaschneider10/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 hover:bg-gray-900 rounded-full"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/victoria-schneider-62ba64319/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 hover:bg-gray-900 rounded-full"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>

          {/* Correo Electrónico */}
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=victoriaschneider050@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2"
  aria-label="Correo Electrónico"
>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>

        </div>

      </div>
    </footer>
  );
}