import { Helmet } from "react-helmet";

import Footer from "../Component/Common/Footer";
import Header from "../Component/Common/Header";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>
                    Contact Us
                </title>
                <meta property="og:title" content="Contact Us" />
                <meta property="og:description" content="Need help or have questions about our mentorship and counseling services? Contact PeerBuddy today to connect with our team." />
                <meta name="keywords" content="contact us, PeerBuddy contact, mentorship support, counseling services, career advice" />
            </Helmet>
            <Header />

            <div className="px-10 md:px-16 lg:px-24  py-10 lg:py-20 h-auto text-txtclr dark:text-white dark:bg-Bluecor">
                <h1 className=" dark:text-white font-bold text-2xl md:text-4xl lg:text-6xl">
                    Contact Us</h1>
                <div className=" mt-5 mb-12 lg:mb-20 text-xl font-semibold">
                    Let's work together here
                </div>

                <div className="flex flex-col-reverse lg:flex-row ">
                    <div className="lg:w-[50%] py-16 rounded-3xl">
                        <div className="mb-10">
                            <h2 className="text-left text-2xl md:text-4xl font-bold relative font-rubik w-full">
                                <span className="">
                                    Feel free to get in touch
                                    with us.
                                </span>
                            </h2>
                        </div>
                        <form class="mt-8 space-y-6 w-full">
                            <div>
                                <input type="text" id="name" placeholder="Full Name" class="w-[100%] px-3 py-2 mt-1 border-b border-b-gray-300 shadow-md outline-none dark:bg-Bluecor dark:text-white rounded-md" />
                            </div>
                            <div>
                                <input type="text" id="Property" placeholder="Property Type" class="w-[100%] px-3 py-2 mt-1 border-b border-b-gray-300 shadow-md outline-none dark:bg-Bluecor dark:text-white rounded-md" />
                            </div>
                            <div className="w-full">
                                <input type="tel" id="Mobile" placeholder="Mobile Number" class="w-[100%] px-3 py-2 mt-1 border-b border-b-gray-300 shadow-md outline-none dark:bg-Bluecor dark:text-white rounded-md " />
                            </div>
                            <div className="w-full">
                                <input type="email" id="email" placeholder="Your Email Address" class="w-[100%] px-3 py-2 mt-1 border-b border-b-gray-300 shadow-md outline-none dark:bg-Bluecor dark:text-white rounded-md " />
                            </div>
                            <textarea id="message" placeholder="Your Message" rows="3" class="w-[100%] px-3 py-2 mt-1 mb-5 border-b border-b-gray-300 shadow-md outline-none dark:bg-Bluecor dark:text-white rounded-md">
                            </textarea>
                            <button type="submit" class="w-full px-4 py-2 text-white font-semibold bg-blue-500 dark:bg-white dark:text-txtclr rounded-full">
                                Send message
                            </button>
                        </form>
                    </div>


                    {/* <div className="lg:w-[50%] p-10 px-16 text-lg text-txtclr dark:text-[#cbd5e1]">
            <h1 className="text-Bluecolor dark:text-white font-semibold text-3xl mb-5">Info</h1>
            <p className=" text-brandGray">Have questions or need assistance? We're here to help! Reach out to us via email or visit our address below. Our team will get back to you as soon as possible to make sure all your queries are resolved.</p>
            <div className="flex mt-5">
              <p className="dark:text-white font-semibold "> <i class="fa-solid fa-envelope text-brandYellow"></i> </p>
              <p className="ml-3 text-brandGray">support@peerbuddy.co</p>
            </div>
            <div className="flex mt-3 text-brandGreen">
              <p className="dark:text-white font-semibold "> <i class="fa-solid fa-location-dot"></i></p>
              <p className=" ml-3 text-brandGray"> 656/4, Shiv shakti nagar 
                Near meerut city public school Meerut, <br /> UP - (250002)</p>
            </div>

            <p className="text-brandSecondary dark:text-white font-semibold text-3xl mt-10">Follow Us</p>
            <div className="flex">
              <a href="https://www.youtube.com/@PeerBuddy12" target="_blank"
                className="flex justify-center items-center h-[80px] w-[40px] text-[40px] rounded-[20px] cursor-pointer">
                <i className="fa-brands fa-youtube text-[#FF0000] dark:text-[#FF0000]"></i>
              </a>
              <a href="https://www.linkedin.com/company/peerbuddy-co/posts/?feedView=all" target="_blank"
                className="flex justify-center items-center h-[80px] w-[80px] text-[40px] rounded-[20px] cursor-pointer">
                <i className="fa-brands fa-linkedin text-[#007BB5] dark:text-[#007BB5]"></i>
              </a>
              <a href="https://www.instagram.com/peerbuddy.co/" target="_blank"
                className="flex justify-center items-center h-[80px] w-[40px] text-[40px]  rounded-[20px] cursor-pointer">
                <i className="fa-brands fa-instagram text-[#E84469] dark:text-[#E84469]"></i>
              </a>
            </div>
          </div> */}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Contact;
