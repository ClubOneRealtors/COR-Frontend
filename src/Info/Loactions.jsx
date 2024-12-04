import { Apartment, Commercial, Villa } from "../assets/Images/images";
import Footer from "../Component/Common/Footer";
import Header from "../Component/Common/Header";

const Locations_H = () => {
    return (
        <>

            <Header />
            <div className="px-10 md:px-16 lg:px-24  py-10 lg:py-20 h-auto text-txtclr dark:text-white dark:bg-Bluecor">


                <h1 className=" text-center dark:text-white font-bold text-2xl md:text-4xl lg:text-6xl">
                    Locations</h1>
                <div className=" mt-5 mb-12 lg:mb-20 text-center text-xl text-blue-500 font-semibold">
                    We are working on
                </div>

                <div className=" flex flex-col md:flex-row flex-wrap justify-between">
                    <div className="flex flex-col md:w-[30%] h-[550px]  ">
                        <div className="flex h-[90%]">
                            <img src={Villa} className="object-cover rounded-2xl shadow-xl border dark:border-transparent " alt="" />
                        </div>
                        <p className="my-5 text-2xl font-semibold text-center">Noida</p>
                    </div>

                    <div className="flex flex-col md:w-[30%] h-[550px]  ">
                        <div className="flex h-[90%] ">
                            <img src={Apartment} className="object-cover rounded-2xl shadow-xl border dark:border-transparent" alt="" />
                        </div>
                        <p className="my-5 text-2xl font-semibold text-center">Greater Noida</p>
                    </div>

                    <div className="flex flex-col md:w-[30%] h-[550px]  ">
                        <div className="flex h-[90%] ">
                            <img src={Commercial} className="object-cover rounded-2xl shadow-xl border dark:border-transparent" alt="" />
                        </div>
                        <p className="my-5 text-2xl font-semibold text-center">Delhi</p>
                    </div>

                    <div className="flex flex-col md:w-[30%] h-[550px]  ">
                        <div className="flex h-[90%] ">
                            <img src={Commercial} className="object-cover rounded-2xl shadow-xl border dark:border-transparent" alt="" />
                        </div>
                        <p className="my-5 text-2xl font-semibold text-center">Gurugram</p>
                    </div>

                    <div className="flex flex-col md:w-[30%] h-[550px]  ">
                        <div className="flex h-[90%] ">
                            <img src={Commercial} className="object-cover rounded-2xl shadow-xl border dark:border-transparent" alt="" />
                        </div>
                        <p className="my-5 text-2xl font-semibold text-center">Dehradoon</p>
                    </div>

                    <div className="flex flex-col md:w-[30%] h-[550px]  ">
                        <div className="flex h-[90%] ">
                            <img src={Commercial} className="object-cover rounded-2xl shadow-xl border dark:border-transparent" alt="" />
                        </div>
                        <p className="my-5 text-2xl font-semibold text-center">Muradabaad</p>
                    </div>

                    
                </div>
            </div>


            <Footer />
        </>
    );
};

export default Locations_H;
