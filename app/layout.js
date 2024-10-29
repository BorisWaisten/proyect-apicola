import "./globals.css";
import Footer from "../components/Footer/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/NavBar/NavBar";
import { sectionsNav } from "@/data/sectionsNav";
import { footer } from "@/data/footer";

export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body>
        <LanguageProvider> {/* Asegúrate de que LanguageProvider envuelva toda la app */}
          <Navbar sections={sectionsNav} />
          {/* <LeftNav sections={sectionsNav}/> */}
          {children}
          <Footer footer={footer} />
        </LanguageProvider>
      </body>
    </html>
  );
}
