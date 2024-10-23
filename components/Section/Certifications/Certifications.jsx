import { certificates } from "@/data/section/certificates"
export default function Certifications() {
    return (
        <section className="">
            <div className="text-center font-title text-cuarteto mt-8">
            <h2 className="relative text-xl py-8 sm:text-2xl md:text-3xl lg:text-4xl text-title font-bold mb-6 z-10 font-title">Certificaciones</h2>
            </div>
            <div className="w-[40vh] sm:w-[120vh] md:w-[140vh] lg:w-[185vh] mx-auto grid grid-cols-3 md:grid-cols-8 lg:grid-cols-8 ">
                {
                    certificates.map((certificate) => (
                        <div key={certificate.id} className="mb-8">
                            <div className="mx-auto w-[5vh] h-[8vh] sm:w-[8vh] sm:h-[8vh] md:w-[8vh] md:h-[8vh] lg:w-[8vh] lg:h-[8vh]">  
                                <img src={certificate.src} alt={certificate.name} className="w-full h-auto mx-auto "/>
                            </div>
                            <p className="text-center mt-2 sm:mt-4 text-[0.7rem] sm:text-xs md:text-sm lg:text-sm ">{certificate.name}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}                