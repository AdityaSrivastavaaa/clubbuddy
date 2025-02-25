import MainBanner from "./components/MainBanner";
import Navbar from "./components/Navbar";
import Step from "./components/Step";

const App = () => {
  return (
    <div className=" text-white min-h-screen">
      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
      <MainBanner/>

      {/* Steps for registration  */}
      <Step/>
    </div>
  );
};

export default App;
