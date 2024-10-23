import { companySupport } from "@/data/section/compaySupport"
export default function CompanySupport({language}) {
    return (
        <section className="h-[80vh] md:h-[70vh] lg:h-[80vh]">
        <div className="text-center font-title text-cuarteto mt-8">
        <h2 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl text-title font-bold mb-6 z-10 py-8 font-title">Instituciones que nos apoyan</h2>
        </div>
        <div className="w-[60vh] md:w-[130vh] lg:w-[150vh] mx-auto grid grid-cols-2  md:grid-cols-4 lg:grid-cols-4 gap-11 md:gap-8 lg:gap-8">
            {
                companySupport.map((company) => (
                    <div key={company.id} className="mx-auto  w-[20vh] h-[20vh] md:w-[20vh] md:h-[20vh] lg:w-[35vh] lg:h-[22vh] ">
                        { company.id === 4 &&
                            <div className="mx-auto w-[15vh] h-[10vh] md:w-[25vh] md:h-[15vh] lg:w-[25vh] lg:h-[15vh] scale-200 ">
                            <   img src={company.src} alt={company.name} className="w-full h-full object-fill" />
                            </div>
                        }
                        { company.id === 1 &&
                            <div className="mx-auto w-[15vh] h-[10vh] md:w-[25vh] md:h-[15vh] lg:w-[25vh] lg:h-[15vh] scale-200">
                            <   img src={company.src} alt={company.name} className="w-full h-full " />
                            </div>
                        }
                        {
                            company.id !== 4 && company.id !== 1 &&
                            <div className="mx-auto w-[10vh] h-[10vh] md:w-[15vh] md:h-[15vh] lg:w-[15vh] lg:h-[15vh]">
                                <img src={company.src} alt={company.name} className=" h-auto " />
                            </div>
                        }
                        <p className="text-center lg:text-balance lg:w-[35vh] text-[0.7rem] md:lg:text-base lg:text-base pt-1 ">{company.name}</p>
                    </div>
                ))
            }
        </div>
    </section>
    )
}