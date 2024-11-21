import Footer from "../Component/Common/Footer";
import Header from "../Component/Common/Header";
import Featured from "./Component/Featured";
import Hero from "./Component/Hero";
import Services from "./Component/Services";


const Home = () => {
    return (
      <div>
        <Header/>
        <Hero/>
        <Services/>
        <Featured/>
        {/* <TopMentors />
        <LaunchPage/>
        <Features/>
        <MentorTestimonial/>
        <MenteeTestimonial/>
        <FaqSection/> */}
        <Footer/>
      </div>
    );
  };
  
  export default Home;