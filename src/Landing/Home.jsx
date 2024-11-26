import Footer from "../Component/Common/Footer";
import Header from "../Component/Common/Header";
import Featured from "./Component/Featured";
import Hero from "./Component/Hero";
import Locations from "./Component/Locations";
import Services from "./Component/Services";


const Home = () => {
    return (
      <div>
        <Header/>
        <Hero/>
        <Services/>
        <Featured/>
        <Locations/>
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