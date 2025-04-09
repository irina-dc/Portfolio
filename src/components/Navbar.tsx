"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para manejar la apertura del menú

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-10 p-4 transition-all duration-300 ${scrolling ? "bg-purple-950 shadow-lg" : "bg-purple-800"
          }`}
      >
        {/* Contenedor del navbar */}
        <div className="w-full mx-auto flex justify-end items-center">
          {/* Botón hamburguesa (visible solo en pantallas pequeñas) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Menú de navegación (visible en pantallas grandes) */}
          <div className="hidden md:flex md:space-x-8 md:items-center justify-center w-full">
            <Link href="#inicio" className="hover:text-gray-300 py-2">Inicio</Link>
            <Link href="#habilidades" className="hover:text-gray-300 py-2">Habilidades</Link>
            <Link href="#proyectos" className="hover:text-gray-300 py-2">Proyectos</Link>
            <Link href="#contacto" className="hover:text-gray-300 py-2">Contacto</Link>
          </div>
        </div>

        {/* Menú de navegación (visible en pantallas pequeñas y cuando está abierto) */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center mt-4">
            <Link href="#inicio" className="hover:text-gray-300 py-2" onClick={() => setMenuOpen(!menuOpen)}>Inicio</Link>
            <Link href="#habilidades" className="hover:text-gray-300 py-2" onClick={() => setMenuOpen(!menuOpen)}>Habilidades</Link>
            <Link href="#proyectos" className="hover:text-gray-300 py-2" onClick={() => setMenuOpen(!menuOpen)}>Proyectos</Link>
            <Link href="#contacto" className="hover:text-gray-300 py-2" onClick={() => setMenuOpen(!menuOpen)}>Contacto</Link>
          </div>
        )}
      </nav>

      {/* SVG de nubes justo debajo del navbar con animación */}
      <div className="absolute top-[56px] left-0 w-full">
        <svg preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 91.5">
          <path className="wave wave1" fill="#6e11b0" d="M2000 0v26c-14-1-29 4-42 11-21 12-40 30-63 34-24 5-48-6-71-16-21-8-42-16-64-18-47-5-94 17-140 33s-98 25-139-4c-13-8-25-20-39-19-10 1-18 7-26 12-34 22-75 28-112 15-12-4-25-11-31-24-8-18-28-26-45-23s-30 15-46 24c-51 28-111 23-167 18l-15-2-15 2c-56 5-116 10-168-18-15-9-29-20-45-24s-37 5-45 23c-6 13-19 20-31 24-37 13-78 7-112-15-8-5-16-11-26-12-14-1-26 11-39 19-41 29-93 20-139 4s-92-38-140-33c-22 2-43 10-64 18-23 10-47 21-71 16-23-4-42-22-63-34-13-7-28-12-42-11V0z" opacity=".75" />
          <path className="wave wave2" fill="#6e11b0" d="M542 0c-21 9-48 18-80 29a127 127 0 01-65 5l-1-1-32-7-19-4a78 78 0 00-19-1 87 87 0 00-24 4 180 180 0 00-25 11l-6 3-2 1-7 4-2 1-21 9c-16 7-31 7-46 4-15-2-31-8-46-15l-19-8c-19-7-38-13-58-12h-3a71 71 0 00-32 10 97 97 0 00-19 16A283 283 0 000 67V32c18-11 38-19 57-22 31-4 69 5 99 14l10 3a70 70 0 0110 5c17 8 36 15 54 6l1-1a199 199 0 0018-11l11-7a76 76 0 0111-5 87 87 0 0118-5 124 124 0 0119-1 265 265 0 0132 2c21 2 43 7 62 5 17-2 32-8 47-15zM1185 0l-2 1-15 11-24 18a424 424 0 01-65 35 331 331 0 01-31 12q-10 4-21 6a132 132 0 01-27 4 132 132 0 01-27-4q-11-2-21-6a331 331 0 01-31-12 424 424 0 01-65-35l-24-18-15-11-2-1h8l9 6c41 30 116 29 168 3 52 26 127 27 168-3l9-6z" opacity=".51" />
          <path className="wave wave3" fill="#6e11b0" d="M696 0c-17 13-33 28-50 39a78 78 0 01-54 13 251 251 0 01-28-6c-29-8-56-17-83 0l-11 5c-45 21-111 28-178-2q-11-4-21-10l-22-13a307 307 0 01-33-26h82a403 403 0 0028 21 238 238 0 0035 19 138 138 0 0014 6 140 140 0 0017 4 91 91 0 0032 1 103 103 0 0024-7c31-14 56-36 115-21 11 2 19 8 30 12l4 1c10 2 19 0 27-5 12-6 23-17 32-23l15-8z" opacity=".51" />
          <path fill="#6e11b0" d="M580 0a19 19 0 01-6 9 19 19 0 01-26-5 18 18 0 01-2-4z" />
          <path fill="#6e11b0" d="M834 0v1a80 80 0 01-27 42 80 80 0 01-41 18 80 80 0 01-29-2 80 80 0 01-58-59h-1z" opacity=".51" />
          <path fill="#6e11b0" d="M2000 0v44a63 63 0 01-15 4l-1 1c-16 2-33 0-50-3l-62-11a363 363 0 00-48-3h-20a323 323 0 00-35 5l-31 7-30 5a195 195 0 01-83-3l-22-5a96 96 0 00-51 3l-22 7c-14 5-29 10-44 9-17 0-34-7-50-14-9-4-19-9-29-11a72 72 0 00-34-3 84 84 0 00-19 7l-18 8a128 128 0 01-96 2l-4-2c-11-4-21-10-32-13l-4-2c-18-5-37-4-56-2h-1l-77 5a121 121 0 01-66-9l-4 2c-19 9-41 8-62 7l-77-5h-1a166 166 0 00-60 4c-11 3-21 9-32 13l-4 2a128 128 0 01-96-2l-18-8a84 84 0 00-19-7l-3-1c-10-1-21 0-31 4-10 2-19 7-29 11-16 7-33 14-50 14-15 1-30-4-44-9l-22-7a96 96 0 00-51-3l-22 5a443 443 0 01-24 5c-20 3-40 1-59-2l-30-5-31-7a323 323 0 00-35-5h-20a363 363 0 00-48 3L66 46c-17 3-34 6-50 3h-1a63 63 0 01-15-5V0z" />
          <path fill="#6e11b0" d="M1458 0c21 9 48 18 80 29a127 127 0 0065 5l1-1 32-7 19-4a78 78 0 0119-1 87 87 0 0124 4 180 180 0 0125 11l6 3 2 1 7 4 2 1 21 9c16 7 31 7 46 4 15-2 31-8 46-15l19-8c19-7 38-13 58-12h3a71 71 0 0132 10 97 97 0 0119 16 283 283 0 0116 18V32c-18-11-38-19-57-22-31-4-69 5-99 14l-10 3a70 70 0 00-10 5c-17 8-36 15-54 6l-1-1a199 199 0 01-18-11l-11-7a76 76 0 00-11-5 87 87 0 00-18-5 124 124 0 00-19-1 265 265 0 00-32 2c-21 2-43 7-62 5-17-2-32-8-47-15z" opacity=".51" />
          <path fill="#6e11b0" d="M1304 0c17 13 33 28 50 39 16 10 33 16 54 13a251 251 0 0028-6c29-8 56-17 83 0l11 5c45 21 111 28 178-2q11-4 21-10l22-13a307 307 0 0033-26h-82a403 403 0 01-28 21 238 238 0 01-35 19 138 138 0 01-14 6 140 140 0 01-17 4 91 91 0 01-32 1 103 103 0 01-24-7c-31-14-56-36-115-21-11 2-19 8-30 12l-4 1c-10 2-19 0-27-5-12-6-23-17-32-23l-15-8z" opacity=".51" />
          <path fill="#6e11b0" d="M1420 0a19 19 0 006 9 19 19 0 0026-5 18 18 0 002-4z" />
          <path fill="#6e11b0" d="M1166 0v1a80 80 0 0027 42 80 80 0 0041 18 80 80 0 0029-2 80 80 0 0058-59h1z" opacity=".51" />
        </svg>

      </div>
    </>
  );
};

export default Navbar;
