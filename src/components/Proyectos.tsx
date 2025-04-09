const Proyectos = () => {
  const proyectos = [
    {
      titulo: "Tienda Online",
      descripcion: "E-commerce con carrito, pasarela de pago y panel de admin.",
      imagen: "/tfg.jpg",
      link: "https://mitienda.com",
    },
    {
      titulo: "Blog Técnico",
      descripcion: "Blog hecho con Markdown, React y comentarios con Disqus.",
      imagen: "/images/blog.png",
      link: "https://miblog.com",
    },
  ];

  return (

    <section id="proyectos" className="max-w-6xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-violet-700 mb-10">
        Proyectos Destacados
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Proyecto 1 */}
        {proyectos.map((proyecto,index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{proyecto.titulo}</h3>
              <p className="text-gray-600 mt-2">
                {proyecto.descripcion}
              </p>
              <a
                href={proyecto.link}
                className="inline-block mt-4 px-4 py-2 bg-violet-600 text-white rounded-lg shadow-md hover:bg-violet-700 transition"
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