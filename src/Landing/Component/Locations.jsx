import React from "react";
import { Apartment, Commercial, Landing_Hero, Villa } from "../../assets/Images/images";


const Locations = () => {
    return (
        <div className="px-10 md:px-16 lg:px-24 py-10 flex flex-col  text-txtclr dark:text-white dark:bg-Bluecor">
            <h2 className="text-5xl text-center font-semibold my-5 md:my-10">Locations</h2>

            <div className="flex flex-wrap  ">
                <div className="w-full flex justify-between">
                <button className="w-[24%] mb-5 py-4 text-xl rounded-2xl bg-gray-200">Noida</button>
                <button className="w-[24%] mb-5 py-4 text-xl rounded-2xl bg-gray-200">Greater Noida</button>
                <button className="w-[24%] mb-5 py-4 text-xl rounded-2xl bg-gray-200">Delhi</button>
                <button className="w-[24%] mb-5 py-4 text-xl rounded-2xl bg-gray-200">Gurugram</button>
                </div>
                <div className="w-full flex justify-between">
                <button className="w-[24%] mb-5 py-4 text-xl rounded-2xl bg-gray-200">Dehradoon</button>
                <button className="w-[24%] mb-5 py-4 text-xl rounded-2xl bg-gray-200">Muradabad</button>
                <p className="w-[24%] mb-5 py-4 text-xl rounded-2xl "></p>
                <p className="w-[24%] mb-5 py-4 text-xl rounded-2xl "></p>
                </div>
            </div>


        </div>
    );
};

export default Locations;