export default function Navbar({ isMobile }) {
  // Lista de enlaces para no repetir código HTML
    const links = [
    
    { name: 'Sobre mi', href: '#Sobre mi' },
    { name: 'CV', href: '#' },
    { name: 'Proyectos', href: '#Proyectos' },
    { name: 'Habilidades', href: '#Habilidades' },
    { name: 'Contacto', href: '#contacto' },
    ];

    const baseStyles = "text-sm font-medium transition-colors duration-200";
    const desktopStyles = "text-gray-600 hover:text-blue-600";
    const mobileStyles = "block rounded-md px-3 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600";

    return (
    <>
        {links.map((link) => (
        <a
            key={link.name}
            href={link.href}
            className={isMobile ? mobileStyles : `${baseStyles} ${desktopStyles}`}
        >
            {link.name}
        </a>
        ))}
    </>
    );
}