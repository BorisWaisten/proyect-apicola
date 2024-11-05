import "./globals.css";
import Footer from "../components/Footer/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/NavBar/NavBar";
import { sectionsNav } from "@/data/sectionsNav";
import { footer } from "@/data/footer";
import Head from "next/head";

export const metadata = {
  title: "Argentine Honey",
  icons: {
    icon: "/logoNavBar.jpg",
  }
};

export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/logoNavBar.jpg" />
      </Head>
      <body>
        <LanguageProvider> 
          <Navbar sections={sectionsNav} />
           {children}
          <Footer footer={footer} />
        </LanguageProvider>
      </body>
    </html>
  );
}
