import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Home from "@/components/Home/Home";
import Production from "@/components/Production/Production";
import Varieties from "@/components/Varieties/Varieties";

export default function HomePage() {

  return (
   <div>
    <main className="min-h-screen overflow-x-hidden bg-secondary font-body text-terciary">
     <div id="home">
        <Home/>
     </div>
     <div id="about">
      <About/>
      </div>
      <div id="varieties">
        <Varieties/>
      </div>
      <div id="production">
      <Production />
      </div>
      <div id="contact">
       <Contact/>
      </div>
    </main>
    </div>
  );
}
