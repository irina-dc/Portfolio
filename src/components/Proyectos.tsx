'use client';
import React, { useState, useEffect } from 'react';

const Proyectos = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Usamos useEffect para leer el tema almacenado en localStorage cuando el componente se monta
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevState => !prevState);

    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light-mode');
    }
  };

  const proyectos = [
    {
      titulo: "Tienda Online",
      descripcion: "E-commerce con carrito, pasarela de pago y panel de admin.",
      imagen: "/tfg.jpg",
      link: "https://mitienda.com",
    },
  ];

  return (
    <section id="proyectos" className={`max-w-6xl mx-auto py-10 px-6 ${isDarkMode ? '' : ''}`}>
      <h2 className={`text-3xl font-bold text-center ${isDarkMode ? 'text-purple-950/90' : 'text-purple-800'} mb-10`}>
        Proyectos
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Proyecto 1 */}
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{proyecto.titulo}</h3>
              <p className={`text-gray-600 mt-2 ${isDarkMode ? 'text-white' : 'text-white'}`}>
                {proyecto.descripcion}
              </p>
              <a
                href={proyecto.link}
                className={`inline-block mt-4 px-4 py-2 ${isDarkMode ? 'bg-purple-700' : 'bg-purple-950/90'} text-white rounded-lg shadow-md hover:bg-violet-700 transition`}
              >
                Ver en GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
