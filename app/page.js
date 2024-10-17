'use client';
import { useEffect, useState } from "react";
import About from "@/components/Section/About/About";
import Contact from "@/components/Section/Contact/Contact";
import Home from "@/components/Section/Home/Home";
import Varieties from "@/components/Section/Varieties/Varieties";
import Loading from "@/components/Loading/Loading"; // Importar el componente de loading
import ServicesProvided from "@/components/Section/ServicesProvided/ServicesProvided";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  // Usamos useEffect para controlar el tiempo de carga
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Después de 2 segundos, quitamos la pantalla de carga
    }, 2000); // 2 segundos de tiempo de carga

    return () => clearTimeout(timer); // Limpiamos el temporizador cuando el componente se desmonte
  }, []);

  if (isLoading) {
    return <Loading />; // Mostrar la pantalla de carga
  }

  return (
    <div>
      <main className="min-h-screen overflow-x-hidden bg-secondary font-body text-terciary">
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services-provided">
          <ServicesProvided />
        </div>
        <div id="varieties">
          <Varieties />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}
