import MainBanner from "./components/MainBanner";
import Navbar from "./components/Navbar";
import Step from "./components/Step";
import Footer from "./components/Footer";
import FAQ from "./components/Faq";
import Features from "./components/Features";
import SpecialOffers from "./components/SpecialOffer";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className=" text-white min-h-screen">
      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
      <MainBanner/>

      {/* Steps for registration  */}
      <Step/>
      {/* Features */}
      <Features/>
      {/* Special Offers */}
      <SpecialOffers/>
      {/* Partners */}
      <Partners/>
      {/* Testimonials  */}
      {/* <Testimonials/> */}
      {/* Faq */}
      {/* <FAQ/> */}
      {/* /footer  */}
      <Footer/>
    </div>
  );
};

export default App;
