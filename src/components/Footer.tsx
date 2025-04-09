const Footer = () => {
  return (
    <footer className="relative bg-purple-950 text-white text-center p-10 overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 z-0 animate-clouds bg-repeat-x opacity-80" style={{ backgroundImage: "url('/nubes.png')" }}></div>

      {/* Contenido del Footer */}
      <section id="contacto" className="relative z-10">
        <h2 className="text-2xl font-bold">Contacto</h2>
        <p className="text-gray-300 mt-2">
          Puedes escribirme a{" "}
          <a href="mailto:irina-emdck08@hotmail.com" className="text-purple-400 underline">
            irina-emdck08@hotmail.com
          </a>
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="https://linkedin.com" className="text-purple-400 hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/irina-dc" className="text-purple-400 hover:underline">
            GitHub
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-400">&copy; {new Date().getFullYear()} - Mi Portafolio</p>
      </section>
    </footer>
  );
};

export default Footer;
