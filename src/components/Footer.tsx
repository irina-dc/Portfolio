const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-4">
      <section id="contacto" className="text-center my-16">
        <h2 className="text-2xl font-bold">Contacto</h2>
        <p className="text-gray-600 mt-2">Puedes escribirme a <a href="irina-emdck08@hotmail.com" className="text-purple-600">irina-emdck08@hotmail.com</a></p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://linkedin.com" className="text-purple-600">LinkedIn</a>
          <a href="https://github.com/irina-dc" className="text-purple-600">GitHub</a>
        </div>
        <p>&copy; {new Date().getFullYear()} - Mi Portafolio</p>
      </section>
      
    </footer>
  );
};

export default Footer;  