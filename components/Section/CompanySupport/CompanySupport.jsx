import { companySupport } from "@/data/section/compaySupport";
import Image from "next/image";

export default function CompanySupport({ language }) {
    return (
        <section className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] mb-7 sm:mb-0 md:mb-0 lg:mb-0">
            <div className="text-center font-title text-cuarteto md:mt-8 lg:mt-8">
                <h2 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl text-title font-bold sm:mb-4 md:mb-6 lg:mb-6 z-10 py-8 font-title">
                    Instituciones que nos apoyan
                </h2>
            </div>
            <div className="w-[40vh] sm:w-[90vh] md:w-[150vh] lg:w-[175vh] mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-11 md:gap-0 lg:gap-8">
                {
                    companySupport.map((company) => {
                        // Estilos especiales para SVG con id 1 y 4
                        const isSpecialSvg = company.id === 1 || company.id === 4;

                        // Estilos específicos para el id 2
                        const isId2 = company.id === 2;

                        // Clases generales para el contenedor
                        const baseClasses = isSpecialSvg
                            ? "mx-auto w-[15vh] h-[12vh] sm:w-[10vh] sm:h-[8vh] md:w-[18vh] md:h-[12vh] md:mb-[16px] lg:w-[18vh] lg:h-[12vh] lg:mb-[17px] sm:scale-200"
                            : "mx-auto w-[8vh] h-[8vh] sm:w-[8vh]  sm:h-[8vh] md:w-[15vh] md:h-[15vh] lg:w-[15vh] lg:h-[15vh]";

                        // Si es id 2, aplica estilos adicionales
                        const containerClasses = isId2
                            ? `${baseClasses} mx-auto w-[13vh] pt-[15px] h-[8vh] sm:pt-[15px] sm:h-[8vh] md:w-[15vh] md:h-[15vh] md:pt-[25px] lg:w-[15vh] lg:h-[15vh] lg:pt-[27px] sm:scale-150 md:scale-150 lg:scale-200` // Añade clases personalizadas para id 2 aquí
                            : baseClasses;

                        
                        return (
                            <div key={company.id} className="mx-auto w-[15vh] h-[20vh] sm:w-[20vh] sm:h-[20vh] md:w-[20vh] md:h-[20vh] lg:w-[35vh] lg:h-[25vh]">
                                <div className={containerClasses }>
                                {
                                    isSpecialSvg ? (
                                        // Para SVGs, usamos <img /> ya que <Image /> de Next.js no soporta SVGs bien.
                                        <img
                                        src={company.src}
                                        alt={company.name}
                                        className="h-full"
                                        />
                                    ) : (
                                        <Image
                                            src={company.src}
                                            alt={company.name}
                                            layout="responsive"
                                            width={80} // Ajusta según necesidad
                                            height={80} // Ajusta según necesidad
                                            quality={100}
                                            className="h-auto"
                                            />
                                    )
                                    }

                                </div>
                                <p className="text-center lg:text-balance lg:w-[35vh] text-[0.7rem] sm:text-xs md:text-base lg:text-base pt-1">
                                    {company.name}
                                </p>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}
