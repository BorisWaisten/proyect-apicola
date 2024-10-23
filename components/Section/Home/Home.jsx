export default function Home() {
  return (
    <div id="home" className="relative w-full h-[70vh] ">
      {/* Video de fondo */}
      <video
        className="absolute h-[70vh] w-full object-cover"
        src="/fondoHome3.mp4"
        autoPlay
        loop
        muted
        playsInline // Agrega playsInline para mejor comportamiento en móviles
      />

      {/* Contenido sobre el video */}
      <div className="absolute top-0 left-0 w-full z-10 flex items-center justify-center h-full">
        <h1 className="relative text-xl sm:text-2xl md:text-4xl lg:text-[3rem] text-secondary font-bold my-5 z-10 font-title ">
          Grupo Apícola de la Región Centro Argentina
        </h1>
      </div>

      {/* Filtro oscuro (opcional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </div>
  );
}
