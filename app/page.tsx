export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 scroll-smooth">
      {/* Sección Hero */}
      {/*   max-w-4xl w-full text-center p-10*/}
      <section id="inicio" className="bg-purple-400/30 text-white text-center py-20">

        {/* Imagen de Perfil (Temporal) */}
        <div className="flex justify-center  mt-25">
          <img
            src="/IMG_20200222_204404.jpg"
            alt="Foto de perfil"
            className="w-40 h-40 rounded-full border-4 border-purple-950/90"
          />
        </div>

        {/* Texto de Presentación */}
        <h1 className="text-4xl font-bold text-purple-950/90 mt-6">¡Hola, soy Irina!</h1>
        <p className="text-lg text-gray-700 mt-2">
          Desarrolladora Full Stack con experiencia en tecnologías web modernas.
        </p>

        {/* Botón para Descargar CV */}
        <a
          href="/cv.pdf"
          download
          className="mt-4 inline-block px-6 py-2 bg-white text-purple-700 font-semibold rounded-lg"
        >
          Descargar CV
        </a>
      </section>

      {/* Sección de Habilidades */}
      <section id="habilidades" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-purple-950/90 mb-8">Habilidades</h2>

        {/* Contenedor de Habilidades */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">

          {/* Ejemplo de habilidad */}
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" className="w-12 h-12" />
            <p className="mt-2 font-medium text-purple-950/90">HTML</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" className="w-12 h-12" />
            <p className="mt-2 font-medium text-purple-950/90">CSS</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" alt="JavaScript" className="w-12 h-12" />
            <p className="mt-2 font-medium text-purple-950/90">JavaScript</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-12 h-12" />
            <p className="mt-2 font-medium text-purple-950/90">React</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-12 h-12" />
            <p className="mt-2 font-medium text-purple-950/90">Next.js</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-12 h-12" />
            <p className="mt-2 font-medium text-purple-950/90">Tailwind CSS</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12" />
            <p className="mt-2 font-medium text-purple-950/90">Node.js</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="MongoDB" className="w-12 h-12" />
            <p className="mt-2 font-medium text-purple-950/90">MongoDB</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" alt="MongoDB" className="w-12 h-12" />
            <p className="mt-2 font-medium text-purple-950/90">Angular</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="MongoDB" className="w-12 h-12" />
            <p className="mt-2 font-medium text-purple-950/90">Laravel</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="MongoDB" className="w-12 h-12" />
            <p className="mt-2 font-medium text-purple-950/90">PHP</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="MongoDB" className="w-12 h-12" />
            <p className="mt-2 font-medium text-purple-950/90">Docker</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="MongoDB" className="w-12 h-12" />
            <p className="mt-2 font-medium text-purple-950/90">Java</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="MongoDB" className="w-12 h-12" />
            <p className="mt-2 font-medium text-purple-950/90">Bootstrap</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg" alt="MongoDB" className="w-12 h-12" />
            <p className="mt-2 font-medium text-purple-950/90">VisualBasic</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MongoDB" className="w-12 h-12" />
            <p className="mt-2 font-medium text-purple-950/90">MySQL</p>
          </div>

        </div>
      </section>

      {/* Sección de Proyectos */}
      <section id="proyectos" className="max-w-6xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold text-center text-violet-700 mb-10">
          Proyectos Destacados
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Proyecto 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img
              src="/proyecto1.jpg"
              alt="Proyecto 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Proyecto 1</h3>
              <p className="text-gray-600 mt-2">
                Descripción breve del proyecto con sus principales características.
              </p>
              <a
                href="https://github.com/"
                className="inline-block mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg shadow-md hover:bg-violet-700 transition"
              >
                Ver en GitHub
              </a>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img
              src="/proyecto2.jpg"
              alt="Proyecto 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Proyecto 2</h3>
              <p className="text-gray-600 mt-2">
                Breve descripción destacando la funcionalidad clave.
              </p>
              <a
                href="https://github.com/"
                className="inline-block mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg shadow-md hover:bg-violet-700 transition"
              >
                Ver en GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

     
    </main >
  );
}
