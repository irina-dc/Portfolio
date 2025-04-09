const Habilidades = () => {
    return (

        < section id="habilidades" className="px-4 py-16 text-center" >
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
        </section >

    );
};

export default Habilidades;