import { Helmet } from "react-helmet";

import { Abhishek, Certificate_1, Certificate_2, Certificate_3, Certificate_4, COR_Logo_D_PNG, COR_Logo_L_PNG, Landing_Hero } from "../assets/Images/images";
import Footer from "../Component/Common/Footer";
import Header from "../Component/Common/Header";



const About = () => {
    return (
        <>
            <Helmet>
        <title>
          Contact PeerBuddy: Get in Touch for Mentorship and Counseling
        </title>
        <meta property="og:title" content="Contact Us" />
        <meta property="og:description" content="Need help or have questions about our mentorship and counseling services? Contact PeerBuddy today to connect with our team." />
        <meta name="keywords" content="contact us, PeerBuddy contact, mentorship support, counseling services, career advice" />
      </Helmet>
            <Header />

            <div className="px-8 md:px-[100px]  py-10 lg:py-20 h-auto text-txtclr dark:text-white dark:bg-Bluecor">


                <h1 className=" text-center dark:text-white font-bold text-2xl md:text-4xl lg:text-6xl">
                    About Us</h1>
                <div className=" mt-5 mb-12 lg:mb-20 text-center text-xl text-blue-500 font-semibold">
                    What we are today.
                </div>

                {/* Leaders */}
                <div className="mt-20 flex flex-col justify-center items-center">
                    <p className="text-4xl font-semibold mt-10 text-center">Leading our way</p>
                    <p className="mt-5 text-xl lg:w-[100%] text-center mb-5">With founders Amarpreet Singh and Hari Om at the helm, Club One Realtors is led by a team of experienced innovators. These proven pioneers across real estate, marketing, technology, and finance are solving real estate’s most complex challenges.</p>

                    <div className="flex justify-center items-center w-full mt-10">
                        <div className="w-[30%] flex justify-center items-center h-auto">
                            <img src={Abhishek} className="w-[300px] h-[300px] object-cover rounded-[50%]" alt="" />
                        </div>
                        <div className="w-[70%] h-auto">
                            <p className="text-2xl font-semibold">Amarpreet Singh - Director</p>
                            <p className="text-lg text-gray-500 font-semibold">B.Tech and MBA</p>
                            <p className="text-justify text-lg mt-5">Amarpreet Singh, a top-performing real estate agent in Delhi NCR, has achieved over USD 200 million in sales, representing luxury estates for high-profile clients including industry leaders, celebrities, royalty, and foreign investors. Known for his expertise in the luxury market, Singh has conducted international roadshows for North Indian properties and built valued relationships within the industry. <br />

                                Amarpreet Singh’s recent accomplishments include the sale of ATS Knightsbridge, one of North India’s premium condominiums, contributing to sales exceeding ₹500 crore over three years, despite challenges like demonetization, GST reforms, and RERA. His vast market knowledge, strategic marketing, exclusive contacts, and passion for luxury sales have made him a sought-after partner for developers and architects.

                                Developers now consult Singh and his team during project planning phases to ensure designs cater to high-end buyers. His exceptional track record underscores his prominence in the real estate market.</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center w-full lg:mt-20">
                        <div className="w-[30%] flex justify-center items-center h-auto">
                            <img src={Abhishek} className="w-[300px] h-[300px] object-cover rounded-[50%]" alt="" />
                        </div>
                        <div className="w-[70%] h-auto">
                            <p className="text-2xl font-semibold">Hari Om - Director</p>
                            <p className="text-lg text-gray-500 font-semibold">B.Com Honours & MBA</p>
                            <p className="text-justify text-lg mt-5">
                                Hari Om, Director of Club One Realtors, understands the stress often associated with real estate transactions. As a full-time consultant, he prioritizes reducing your stress by maintaining open communication and being readily accessible. His goal is to ensure a seamless and enjoyable experience for every client. <br />
                                Club One Realtors is committed to being your trusted real estate advocate. Whether you’re buying, selling, or renting, we work tirelessly to promote your best interests. For sellers, we leverage state-of-the-art technology, team collaboration, and superior marketing strategies to secure the best price in the shortest time. For buyers, we provide accurate market data and insights to help you make informed decisions and negotiate effectively.

                                A Delhi NCR resident since 2008, Om is deeply familiar with the unique benefits of living and working in Gurgaon, Delhi, and Noida. With a finance background from Patna University and a Master’s in Business Administration from Delhi, he combines local expertise with strong financial acumen to deliver exceptional service.

                            </p>
                        </div>
                    </div>
                </div>

                {/* Mision and Vision */}
                <div className="flex flex-col mt-20">
                    <div className="">
                        <h2 className="text-3xl font-semibold mt-10">Mission</h2>
                        <p className="mt-4 text-lg w-[60%] text-justify">Our mission is to help everyone discover their perfect place in the world, a space where they feel secure, valued, and connected. We’re dedicated to transforming houses into homes and fostering communities that inspire belonging and lasting fulfillment.</p>
                    </div>

                    <div className="flex flex-col items-end">
                        <h2 className="text-3xl font-semibold mt-10">Vision</h2>
                        <p className="mt-4 text-lg w-[60%] text-end">Our vision is to be the trusted leader in property sales, connecting buyers with their perfect homes through unmatched expertise, integrity, and personalized service. We aim to make every property transaction smooth, transparent, and fulfilling.</p>
                    </div>

                </div>

                <div className="">
                <p className="text-4xl font-semibold mt-20 text-center">Our Achievements</p>
                <div className="flex justify-between flex-wrap mt-10 ">
                    <img src={Certificate_1} className="w-[31%] h-[200px] rounded-2xl" alt="" />
                    <img src={Certificate_2} className="w-[31%] h-[200px]" alt="" />
                    <img src={Certificate_3} className="w-[31%] h-[200px] mb-5" alt="" />
                    <img src={Certificate_4} className="w-[31%] h-[200px]" alt="" />
                    <img src={Landing_Hero} className="w-[31%] h-[200px]" alt="" />
                    <img src={Certificate_2} className="w-[31%] h-[200px]" alt="" />
                </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default About;
