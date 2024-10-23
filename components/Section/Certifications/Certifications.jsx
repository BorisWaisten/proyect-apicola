import { certificates } from "@/data/section/certificates"
export default function Certifications() {
    return (
        <section className="">
            <div className="text-center font-title text-cuarteto mt-8">
            <h2 className="relative text-xl py-8 sm:text-2xl md:text-3xl lg:text-4xl text-title font-bold mb-6 z-10 font-title">Certificaciones</h2>
            </div>
            <div className="w-[80vh] md:w-[130vh] lg:w-[185vh] mx-auto grid grid-cols-3 md:grid-cols-8 lg:grid-cols-8 ">
                {
                    certificates.map((certificate) => (
                        <div key={certificate.id} className="mb-8">
                            <div className="mx-auto w-[10vh] h-[13vh]">  
                                <img src={certificate.src} alt={certificate.name} className="w-full h-auto mx-auto " />
                            </div>
                            <p className="text-center pt-2 text-[0.7rem] md:text-sm lg:text-sm ">{certificate.name}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}                