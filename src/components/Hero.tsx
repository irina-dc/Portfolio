'use client';  // Add this at the very top
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
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

    return (
        <section id="inicio" className={`py-20 text-center transition-all ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-purple-400/30 text-gray-900'}`}>

            {/* Botón para cambiar de tema */}
            <div id="theme-toggle" className="theme-toggle cursor-pointer" onClick={toggleTheme}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="4.22" x2="16.95" y2="5.64"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="19.78" x2="16.95" y2="18.36"></line>
                </svg>
            </div>

            {/* Imagen de Perfil (Temporal) */}
            <div className="flex justify-center mt-25">
                <img
                    src="/perfil2.jpeg"
                    alt="Foto de perfil"
                    className="w-40 h-40 rounded-full border-4 border-purple-950/90 imagen-foto"
                />
            </div>

            {/* Texto de Presentación */}
            <h1 className={`text-4xl font-bold mt-6 ${isDarkMode ? 'text-purple-800' : 'text-purple-950/90'}`}>
                ¡Hola, soy Irina!
            </h1>

            <p className="text-lg mt-2 max-w-screen-sm sm:max-w-screen-md md:max-w-4xl mx-auto px-4">
                Soy una desarrolladora Full Stack apasionada por la creación de soluciones web escalables
                y centradas en el usuario. Con experiencia en tecnologías como React, Node.js, y MongoDB,
                me enfoco en construir aplicaciones de alto rendimiento, colaborando estrechamente con equipos multidisciplinarios.
                Siempre en busca de aprender nuevas tecnologías, me esfuerzo por entregar soluciones innovadoras
                y optimizadas para cada proyecto.
            </p>

            {/* Botón para Descargar CV */}
            <a
                href="/cv.pdf"
                download
                className={`mt-4 inline-block px-6 py-2 bg-purple-950/90 text-white font-semibold rounded-lg transform transition-all hover:bg-purple-700 hover:scale-105 shadow-lg ${isDarkMode ? 'bg-purple-800' : ''}`}

            >
                Descargar CV
            </a>

        </section>
    );
};

export default Hero;
