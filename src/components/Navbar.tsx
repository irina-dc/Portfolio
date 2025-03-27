"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

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
        className={`fixed w-full z-10 p-4 transition-all duration-300 ${
          scrolling ? "bg-purple-950 shadow-lg" : "bg-purple-800"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-center space-x-8 text-lg font-semibold text-white">
          <Link href="#inicio" className="hover:text-gray-300">Inicio</Link>
          <Link href="#habilidades" className="hover:text-gray-300">Habilidades</Link>
          <Link href="#proyectos" className="hover:text-gray-300">Proyectos</Link>
          <Link href="#contacto" className="hover:text-gray-300">Contacto</Link>
        </div>
      </nav>

      {/* Decoración de nubes justo debajo del navbar */}
      <div className="absolute top-[56px] left-0 w-full">
        <img src="/cloud-border.svg" alt="Nube decorativa" className="w-full h-auto" />
      </div>
    </>
  );
};

export default Navbar;
