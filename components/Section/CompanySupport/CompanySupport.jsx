import { companySupport } from "@/data/section/compaySupport"
export default function CompanySupport({language}) {
    return (
        <section className="h-[80vh] md:h-[70vh] lg:h-[80vh]">
        <div className="text-center font-title text-cuarteto mt-8">
        <h2 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl text-title font-bold mb-6 z-10 font-title">Instituciones que nos apoyan</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-11 md:gap-8 lg:gap-8">
            {
                companySupport.map((company) => (
                    <div key={company.id} className="mx-auto w-[12vh] h-[20vh] md:w-[20vh] md:h-[20vh] lg:w-[22vh] lg:h-[22vh] mb-8">
                        <div className="mx-auto w-[8vh] h-[8vh] md:w-[20vh] md:h-[20vh] lg:w-[22vh] lg:h-[22vh]">
                            <img src={company.src} alt={company.name} className="w-full h-full" />
                        </div>
                        <p className="text-center  text-[0.7rem] md:lg:text-base lg:text-base mt-1">{company.name}</p>
                    </div>
                ))
            }
        </div>
    </section>
    )
}