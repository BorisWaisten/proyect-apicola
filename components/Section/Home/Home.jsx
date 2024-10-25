import { useLanguage } from "@/context/LanguageContext";
import { home } from "@/data/section/home";
export default function Home() {
  const { language} = useLanguage();
  return (
    <div id="home" className="relative w-full min-h-screen ">
      {/* Video de fondo */}
      <video
        className="absolute  w-full h-full object-cover"
        src="/fondoHome3.mp4"
        autoPlay
        loop
        muted
        playsInline // Agrega playsInline para mejor comportamiento en móviles
      />

      {/* Contenido sobre el video */}
      <div className="absolute top-0 left-0 w-full z-10 flex items-center justify-center h-full">
        <h1 className="relative text-[0.9rem] sm:text-2xl md:text-4xl lg:text-[3rem] text-secondary font-bold my-5 z-10 font-title ">
          {home[language].title}
        </h1>
      </div>

      {/* Filtro oscuro (opcional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </div>
  );
}
