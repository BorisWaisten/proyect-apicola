import { certificates } from "@/data/section/certificates"
export default function Certifications() {
    return (
        <section className="min-h-screen">
            <div className="text-center font-title text-cuarteto mt-8">
            <h2 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl text-title font-bold mb-6 z-10 font-title">Certificaciones</h2>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-11 md:gap-8 lg:gap-8">
                {
                    certificates.map((certificate) => (
                        <div key={certificate.id} className="mx-auto w-[12vh] h-[12vh] md:w-[20vh] md:h-[20vh] lg:w-[22vh] lg:h-[22vh] mb-8">
                            <div className="mx-auto w-[6vh] h-[8vh] md:w-[18vh] md:h-[20vh] lg:w-[20vh] lg:h-[22vh]">
                                <img src={certificate.src} alt={certificate.name} className="w-full h-full" />
                            </div>
                            <p className="text-center  text-[0.7rem] md:lg:text-base lg:text-base mt-1">{certificate.name}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}                