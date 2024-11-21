import React from 'react';
import { Link } from "react-router-dom"
import {  COR_Logo_D_PNG } from '../../assets/Images/images';

const Footer = () => {

    return (
        <footer>
            <div className="flex flex-col border-t-[3px] text-txtclr dark:text-white dark:border-t-gray-700 w-full h-auto px-8 md:px-[100px] py-8 dark:bg-Bluecor">
                <div className="flex flex-col md:flex-row justify-between text-sm lg:text-base">

                    <Link className="flex flex-col items-center w-full md:w-[30%] lg:w-[30%] mb-[30px] md:mb-0 lg:mr-[100px] lg:mt-5  "
                        to="/">
                        <img className=" w-full dark:invert" src={COR_Logo_D_PNG} alt="Logo" />
                    </Link>

                    <div className="flex flex-col md:flex-row md:w-[68%] lg:w-[55%] justify-between ">
                        <div className="flex md:w-2/3 justify-between mb-[30px] md:mb-0 ">
                            <div className="flex flex-col w-[50%] md:pl-[20px]">
                                <p className="flex font-bold dark:text-[#3671d7] mb-1">NAVIGATE</p>
                                <div className="border-b-[3px] border-b-txtclr w-[80px] md:w-[70px] lg:w-[80px] mb-7"></div>
                                <Link className="mb-2 hover:text-[#3671d7]" to="/about">About Us</Link>
                                <Link className="mb-2 hover:text-[#3671d7]" to="/contact">Contact Us</Link>
                                <Link className="mb-2 hover:text-[#3671d7]" to="/pricing">Pricing</Link>
                                <Link className="mb-2 hover:text-[#3671d7]" to="/mentors">Explore Mentors</Link>
                            </div>

                            <div className="flex flex-col w-[50%]">
                                <p className="flex font-bold dark:text-[#3671d7] mb-1">INFORMATION</p>
                                <div className="border-b-[3px] border-b-txtclr w-[115px] md:w-[95px] lg:w-[115px] mb-7"></div>
                                <Link className="mb-2 hover:text-[#3671d7]" to="/terms">Terms & Conditions</Link>
                                <Link className="mb-2 hover:text-[#3671d7]" to="/privacy">Privacy Policy</Link>
                            </div>
                        </div>

                        <div className="flex w-1/2 flex-col ">
                            <p className="flex font-bold dark:text-[#3671d7] mb-1">CONTACT</p>
                            <div className="border-b-[3px] border-b-txtclr w-[78px] mb-7"></div>

                            <a href="mailto:support@peerbuddy.co" className='hover:text-[#3671d7]'>support@clubonerealtors.in</a>

                            <div className="flex">
                                <a href="https://www.youtube.com/@PeerBuddy12" target="_blank"
                                    className="flex justify-center items-center h-[80px] w-[40px] text-[40px] rounded-[20px] cursor-pointer">
                                    <i className="fa-brands fa-youtube hover:text-[#FF0000] dark:text-[#FF0000]"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/peerbuddy-co/posts/?feedView=all" target="_blank"
                                    className="flex justify-center items-center h-[80px] w-[80px] text-[40px] rounded-[20px] cursor-pointer">
                                    <i className="fa-brands fa-linkedin hover:text-[#007BB5] dark:text-[#007BB5]"></i>
                                </a>
                                <a href="https://www.instagram.com/peerbuddy.co/" target="_blank"
                                    className="flex justify-center items-center h-[80px] w-[40px] text-[40px]  rounded-[20px] cursor-pointer">
                                    <i className="fa-brands fa-instagram hover:text-[#E84469] dark:text-[#E84469]"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;