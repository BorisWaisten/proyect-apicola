import { companySupport } from "@/data/section/compaySupport";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function CompanySupport() {
    const { language } = useLanguage();

    return (
        <section className="sm:min-h-screen md:min-h-screen lg:h-[80vh] mb-7">
            <div className="text-center font-title text-cuarteto md:mt-8 lg:mt-8">
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-[3rem] text-title font-bold my-5 italic">
                    {language === 'es' ? 'Instituciones Que Nos Apoyan' : 'Institutions That Support Us'}
                </h2>
            </div>
            <div className="max-w-[90vw] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
    {companySupport.map((company) => {
        const isSvg = company.src.endsWith(".svg");

        // Clases específicas basadas en el ID
        let customClasses = "flex justify-center items-center  w-[10vh] h-[10vh] sm:w-[12vh] sm:h-[12vh] md:w-[15vh] md:h-[15vh] lg:w-[30vh] lg:h-[18vh]";
        
        // Ajusta las clases según el ID
        if (company.id === 1) {
            customClasses = "w-[20vh] h-[10vh] sm:w-[12vh] sm:h-[12vh] md:w-[35vh] md:h-[15vh] lg:w-[40vh] lg:h-[18vh]";
        } else if (company.id === 4) {
            customClasses = "pt-2 scale-150 w-[20vh] h-[10vh] sm:w-[12vh] sm:h-[12vh]  md:w-[35vh] md:h-[15vh]  lg:scale-200 lg:w-[20vh] lg:h-[18vh]";
        }

        return (
            <div key={company.id} className="mx-auto flex flex-col items-center">
                <div className={customClasses}>
                    {isSvg ? (
                        <img
                            src={company.src}
                            alt={company.name}
                            className="w-full h-full object-contain"
                        />
                    ) : (
                        <Image
                            src={company.src}
                            alt={company.name}
                            width={100}
                            height={100}
                            objectFit="contain"
                            quality={100}
                            className= {`${company.id === 3 || company.id === 5 ? " w-[7vh] md:w-[12vh] lg:w-[15vh] h-auto" : "h-auto w-full"}`}
                        />
                    )}
                </div>
                <p className="text-center font-bold text-xs sm:text-sm md:text-base lg:text-base pt-2">
                    {company.name}
                </p>
            </div>
        );
    })}
</div>

        </section>
    );
}
