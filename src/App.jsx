import { useEffect } from "react";
import Home from "./Landing/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import Contact from "./Info/Contact";
import About from "./Info/About";


function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Urbanist",
          "Poppins",
          "Roboto",
          "Rubik",
          "Inter",
          "Moderustic",
          "Noto Sans",
          "Open Sans",
        ],
      },
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/mentors" element={<ExploreMentors />} />
        <Route path="*" element={<Error404 />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />forgot-password
        <Route path="otp-verify" element={<OtpVerification />} />
        <Route path="profile-complete" element={<MentorProfileComplete />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
