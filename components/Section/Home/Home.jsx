export default function Home() {
    return (
      <div id="home" className="relative w-full h-screen ">
        {/* Video de fondo */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/fondoHome.mp4"
          autoPlay
          loop
          muted
        />
  
        {/* Contenido sobre el video */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl md:text-6xl font-bold">GAdelCA</h1>
        </div>
  
        {/* Filtro oscuro (opcional) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
      </div>
    );
  }
  