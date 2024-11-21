import React from "react";
import { High_End_Ap } from "../../assets/Images/images";


const Featured = () => {
    return (
        <div className="relative px-10 md:px-16 lg:px-24 py-5 flex flex-col  text-txtclr dark:text-white dark:bg-Bluecor">
            <h2 className="text-5xl text-center pb-10 ">Featured Properties</h2>

{/* detals 1 */}
            <div className="flex lg:flex-row flex-col lg:sticky top-0 z-0">
                <div class="lg:w-1/2 lg:h-[650px] pr-10 lg:py-20 bg-white dark:bg-Bluecor flex flex-col items-center lg:justify-between">
                    <p class="text-center text-3xl md:text-4xl mb-6">
                        High-End Apartments </p>
                    <div class="space-y-10">
                        <div>
                            <p class="text-lg uppercase font-semibold tracking-wide mb-1">Type</p>
                            <p class="text-xl dark:text-gray-300  border-b border-gray-500 pb-2">Single-Family Home</p>
                        </div>
                        <div>
                            <p class="text-lg uppercase font-semibold tracking-wide mb-1">Location</p>
                            <p class="text-xl dark:text-gray-300  border-b border-gray-500 pb-2">Coastal Town</p>
                        </div>
                        <div>
                            <p class="text-lg uppercase font-semibold tracking-wide mb-1">Description</p>
                            <p class="text-xl dark:text-gray-300  border-b border-gray-500 pb-2 mb-10 lg:mb-0">
                                A sleek, two-bedroom pavilion house featuring contemporary design and stunning open spaces, ideal for sophisticated city escapes or luxurious everyday living.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 h-auto">
                <img src={High_End_Ap} className=" w-full h-full rounded-2xl" alt="" />
                </div>
            </div>
{/* Details 2 */}
            <div className="flex lg:flex-row-reverse flex-col lg:sticky top-0 z-10">
                <div class="lg:w-1/2 lg:h-[650px] lg:pl-10 pr-10 lg:py-20 bg-white dark:bg-Bluecor flex flex-col items-center lg:justify-between">
                    <p class="text-center text-3xl md:text-4xl mb-6">
                        High-End Apartments </p>
                    <div class="space-y-10">
                        <div>
                            <p class="text-lg uppercase font-semibold tracking-wide mb-1">Type</p>
                            <p class="text-xl dark:text-gray-300  border-b border-gray-500 pb-2">Single-Family Home</p>
                        </div>
                        <div>
                            <p class="text-lg uppercase font-semibold tracking-wide mb-1">Location</p>
                            <p class="text-xl dark:text-gray-300  border-b border-gray-500 pb-2">Coastal Town</p>
                        </div>
                        <div>
                            <p class="text-lg uppercase font-semibold tracking-wide mb-1">Description</p>
                            <p class="text-xl dark:text-gray-300  border-b border-gray-500 pb-2 mb-10 lg:mb-0">
                                A sleek, two-bedroom pavilion house featuring contemporary design and stunning open spaces, ideal for sophisticated city escapes or luxurious everyday living.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 h-auto">
                <img src={High_End_Ap} className=" w-full h-full rounded-2xl" alt="" />
                </div>
            </div>
{/* Details 3 */}
            <div className="flex lg:flex-row flex-col lg:sticky top-0 z-20">
                <div class="lg:w-1/2 lg:h-[650px] pr-10 lg:py-20 bg-white dark:bg-Bluecor flex flex-col items-center lg:justify-between">
                    <p class="text-center text-3xl md:text-4xl mb-6">
                        High-End Apartments </p>
                    <div class="space-y-10">
                        <div>
                            <p class="text-lg uppercase font-semibold tracking-wide mb-1">Type</p>
                            <p class="text-xl dark:text-gray-300  border-b border-gray-500 pb-2">Single-Family Home</p>
                        </div>
                        <div>
                            <p class="text-lg uppercase font-semibold tracking-wide mb-1">Location</p>
                            <p class="text-xl dark:text-gray-300  border-b border-gray-500 pb-2">Coastal Town</p>
                        </div>
                        <div>
                            <p class="text-lg uppercase font-semibold tracking-wide mb-1">Description</p>
                            <p class="text-xl dark:text-gray-300  border-b border-gray-500 pb-2 mb-10 lg:mb-0">
                                A sleek, two-bedroom pavilion house featuring contemporary design and stunning open spaces, ideal for sophisticated city escapes or luxurious everyday living.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 h-auto">
                <img src={High_End_Ap} className=" w-full h-full rounded-2xl" alt="" />
                </div>
            </div>




        </div>
    );
};

export default Featured;