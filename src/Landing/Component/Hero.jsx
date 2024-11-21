import React from "react";
import { COR_Logo_L_PNG, Landing_Hero } from "../../assets/Images/images";

const Hero = () => {
  return (
    <div className=" px-10 md:px-16 lg:px-24 Flex justify-center items-center text-txtclr dark:text-white dark:bg-Bluecor">
      <div className="pt-10 relative flex flex-col items-center justify-center">
        
        <img src={Landing_Hero} className=" h-[350px] md:h-[600px] w-full rounded-3xl brightness-75 dark:brightness-90  " alt="Hero Image" />

        {/* Hero Content */}
        <div className="absolute flex flex-col justify-center items-center ">
          <img src={COR_Logo_L_PNG} className="h-10 md:h-20 " alt="Logo" />
          <div className="lg:w-[60%] w-[80%] md:h-[70px] mt-5 md:mt-10 p-2 flex justify-between items-center rounded-full bg-gray-100">
            <input className=" pl-5 md:text-xl w-full bg-transparent outline-none" type="text" placeholder="Search Properties" />
            <button className=" h-full py-2 px-3 md:px-6 text-white font-semibold text-lg bg-blue-500 dark:bg-blue-700 rounded-full ">
              Search </button>
          </div>
          <p className="mt-5 md:mt-10 text-xl md:text-3xl font-semibold text-center text-white shadow-2xl dark:text-white">What stop you to buy your own home? <span className="text-Orangecor">Come on let's find together</span></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;