'use client';
import "./globals.css";
import Footer from "../components/Footer/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/NavBar/NavBar";
import LeftNav from "@/components/LeftNav/LeftNav";
import { sectionsNav } from "@/data/sectionsNav";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  return (
    <html lang="es">
      <body>
        <LanguageProvider> {/* Asegúrate de que LanguageProvider envuelva toda la app */}
          <Navbar sections={sectionsNav} />
          {/* <LeftNav sections={sectionsNav}/> */}
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
