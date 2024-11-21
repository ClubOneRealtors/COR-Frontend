import React from "react";
import { Apartment, Commercial, Landing_Hero, Villa } from "../../assets/Images/images";


const Services = () => {
    return (
        <div className="px-10 md:px-16 lg:px-24 py-10 flex flex-col  text-txtclr dark:text-white dark:bg-Bluecor">
            <h2 className="text-5xl text-center font-semibold my-5 md:my-10">Our Services</h2>

            <div className=" flex flex-col md:flex-row justify-between">
                <div className="flex flex-col md:w-[30%] h-[550px]  ">
                    <div className="flex h-[90%]">
                        <img src={Villa} className="object-cover rounded-2xl shadow-xl border dark:border-transparent " alt="" />
                    </div>
                    <p className="my-5 text-2xl font-semibold text-center">Villa</p>
                </div>

                <div className="flex flex-col md:w-[30%] h-[550px]  ">
                    <div className="flex h-[90%] ">
                        <img src={Apartment} className="object-cover rounded-2xl shadow-xl border dark:border-transparent" alt="" />
                    </div>
                    <p className="my-5 text-2xl font-semibold text-center">Apartment</p>
                </div>

                <div className="flex flex-col md:w-[30%] h-[550px]  ">
                    <div className="flex h-[90%] ">
                        <img src={Commercial} className="object-cover rounded-2xl shadow-xl border dark:border-transparent" alt="" />
                    </div>
                    <p className="my-5 text-2xl font-semibold text-center">Commercial</p>
                </div>
            </div>


        </div>
    );
};

export default Services;