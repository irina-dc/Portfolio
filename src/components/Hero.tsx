const Hero = () => {
    return (
        <section id="inicio" className="bg-purple-400/30 text-white text-center py-20">

            {/* Imagen de Perfil (Temporal) */}
            <div className="flex justify-center  mt-25">
                <img
                    src="/perfil2.jpeg"
                    alt="Foto de perfil"
                    className="w-40 h-40 rounded-full border-4 border-purple-950/90 imagen-foto"
                />
            </div>

            {/* Texto de Presentación */}
            <h1 className="text-4xl font-bold text-purple-950/90 mt-6">¡Hola, soy Irina!</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-screen-sm sm:max-w-screen-md md:max-w-4xl mx-auto px-4">
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
                className="mt-4 inline-block px-6 py-2 bg-white text-purple-700 font-semibold rounded-lg"
            >
                Descargar CV
            </a>
        </section>
    );
};

export default Hero;
