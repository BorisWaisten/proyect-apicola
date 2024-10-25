import { certificates } from "@/data/section/certificates";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Certifications() {
    const {language} = useLanguage();
    return (
        <section className="relative overflow-hidden">
            <div className="relative z-10 text-center font-title text-cuarteto md:mt-8 lg:mt-8">
                <h2 className="relative text-xl py-8 sm:text-2xl md:text-3xl lg:text-4xl text-title font-bold mb-6 font-title">
                {language === 'es' ? 'Certificaciones' : 'Certifications'}    
                </h2>
            </div>
            <div className="relative z-10 w-[40vh] sm:w-[90vh] md:w-[140vh] lg:w-[180vh] mx-auto grid grid-cols-3 md:grid-cols-8 lg:grid-cols-8">
                {
                    certificates.map((certificate) => (
                        <div key={certificate.id} className="px-2 mb-5">
                            <div className="mx-auto w-[5vh] h-[8vh] sm:w-[8vh] sm:h-[8vh] md:w-[8vh] md:h-[8vh] lg:w-[8vh] lg:h-[8vh]">  
                                <Image 
                                    src={certificate.src} 
                                    alt={certificate.name} 
                                    width={80} // Ajusta el ancho según tus necesidades
                                    height={80} // Ajusta la altura según tus necesidades
                                    className="w-full h-auto mx-auto"
                                    quality={80} // Ajusta la calidad de la imagen
                                />
                            </div>
                            <p className="text-center mt-2 sm:mt-4 text-[0.7rem] sm:text-xs md:text-sm lg:text-sm">{certificate.name}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
