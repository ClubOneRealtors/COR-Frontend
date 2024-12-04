import { Apartment, Commercial, Villa } from "../assets/Images/images";
import Footer from "../Component/Common/Footer";
import Header from "../Component/Common/Header";

const Project = () => {
    return (
        <>

            <Header />
            <div className="px-10 md:px-16 lg:px-24  py-10 lg:py-20 h-auto text-txtclr dark:text-white dark:bg-Bluecor">

                <h1 className="text-6xl font-semibold text-center">Projects we are dealing with</h1>

{/* M3M */}
                <p className="text-3xl font-semibold mt-10"> M3M</p>
                <div className=" flex flex-col md:flex-row justify-between mt-5">
                    <div className="flex flex-col md:w-[32%] h-[300px]  ">
                        <div className="flex h-[90%]">
                            <img src={Villa} className="object-cover rounded-2xl shadow-xl border dark:border-transparent " alt="" />
                        </div>
                        <p className="mt-3 text-2xl font-semibold text-center">Cullinan</p>
                    </div>

                    <div className="flex flex-col md:w-[32%] h-[300px]  ">
                        <div className="flex h-[90%] ">
                            <img src={Apartment} className="object-cover rounded-2xl shadow-xl border dark:border-transparent" alt="" />
                        </div>
                        <p className="mt-3 text-2xl font-semibold text-center">CRC - Flagship</p>
                    </div>

                    <div className="flex flex-col md:w-[32%] h-[300px]  ">
                        <div className="flex h-[90%] ">
                            <img src={Commercial} className="object-cover rounded-2xl shadow-xl border dark:border-transparent" alt="" />
                        </div>
                        <p className="mt-3 text-2xl font-semibold text-center">Measta</p>
                    </div>
                </div>

 {/* Godrej */}
                <p className="text-3xl font-semibold mt-10"> Godrej</p>
                <div className=" flex flex-col md:flex-row justify-between mt-5">
                    <div className="flex flex-col md:w-[32%] h-[300px]  ">
                        <div className="flex h-[90%]">
                            <img src={Villa} className="object-cover rounded-2xl shadow-xl border dark:border-transparent " alt="" />
                        </div>
                        <p className="mt-3 text-2xl font-semibold text-center">Nest-Nurture</p>
                    </div>

                    <div className="flex flex-col md:w-[32%] h-[300px]  ">
                        <div className="flex h-[90%] ">
                            <img src={Apartment} className="object-cover rounded-2xl shadow-xl border dark:border-transparent" alt="" />
                        </div>
                        <p className="mt-3 text-2xl font-semibold text-center">Palm Retreat</p>
                    </div>

                    <div className="flex flex-col md:w-[32%] h-[300px]  ">
                        <div className="flex h-[90%] ">
                            <img src={Commercial} className="object-cover rounded-2xl shadow-xl border dark:border-transparent" alt="" />
                        </div>
                        <p className="mt-3 text-2xl font-semibold text-center">Jardinia</p>
                    </div>
                </div>


            </div>


            <Footer />
        </>
    );
};

export default Project;
