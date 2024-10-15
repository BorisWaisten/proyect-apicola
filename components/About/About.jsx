export default function About() {
  return (
    <div id="about" className="relative flex flex-col items-center justify-center min-h-screen p-8">
      {/* Imagen de fondo con el degradado */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img 
          src="/fondoAbout.png" 
          alt="fondoAbout" 
          className="w-full h-full object-cover opacity-50" 
        />
        {/* Gradiente superpuesto */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-100"></div>
      </div>
      <h2 className="relative text-3xl text-title font-bold mb-6 z-10 font-title">Sobre Nosotros</h2>
      <p className="relative text-lg text-center  max-w-2xl z-10">
        Somos el resultado de una sólida unión de 8 empresas provenientes de tres provincias diferentes. 
        Esta colaboración estratégica nos permite combinar nuestras fortalezas y experiencia para ofrecer productos y servicios de calidad.
      </p>
    </div>
  );
}
