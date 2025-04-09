'use client'; // Asegúrate de tener esta directiva

import React from 'react';

const habilidades = [
  { nombre: "HTML", imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { nombre: "CSS", imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { nombre: "JavaScript", imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" },
  { nombre: "React", imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { nombre: "Next.js", imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { nombre: "Tailwind CSS", imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { nombre: "Node.js", imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { nombre: "MongoDB", imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
  { nombre: "Angular", imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" },
  { nombre: "Laravel", imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { nombre: "PHP", imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { nombre: "Docker", imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { nombre: "Java", imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { nombre: "Bootstrap", imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
  { nombre: "VisualBasic", imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg" },
  { nombre: "MySQL", imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
];

interface HabilidadesProps {
  isDarkMode: boolean;
}

const Habilidades: React.FC<HabilidadesProps> = ({ isDarkMode }) => {
  return (
    <section id="habilidades" className={`px-4 py-16 text-center ${isDarkMode ? 'text-white' : 'text-purple-950/90'}`}>
      <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-purple-800'}`}>
        Habilidades
      </h2>

      {/* Contenedor de Habilidades */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {habilidades.map((habilidad, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition ${isDarkMode ? 'border-gray-700' : 'border-purple-800'}`}
          >
            <img
              src={habilidad.imagen}
              alt={habilidad.nombre}
              className="w-12 h-12"
            />
            <p className={`mt-2 font-medium ${isDarkMode ? 'text-white' : 'text-purple-800'}`}>{habilidad.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
