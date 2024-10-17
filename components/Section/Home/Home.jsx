export default function Home() {
  return (
    <div id="home" className="relative w-full h-screen overflow-hidden ">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover "
        src="/fondoHome3.mp4"
        autoPlay
        loop
        muted
        playsInline // Agrega playsInline para mejor comportamiento en móviles
      />

      {/* Contenido sobre el video */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-base sm:text-lg md:text-3xl lg:text-4xl font-bold text-center">
          Grupo Apícola de la Región Centro Argentina
        </h1>
      </div>

      {/* Filtro oscuro (opcional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </div>
  );
}
