import { useState } from "react";
import { ReactTyped } from "react-typed"; // ✅ Correct import
import backgroundImage from "../../public/assets/ClubBackground.webp";
import underline from "../../public/assets/underline.svg";
import appstore from "../../public/assets/AppStore.svg";
import playstore from "../../public/assets/PlayStore.svg";

function MainBanner() {
  const [showTyping] = useState(true);

  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Whitish Blur Overlay for Better Visibility */}
      <div className="absolute inset-0 backdrop-blur-xs bg-white/20"></div>

      {/* Text Content */}
      <div className="relative text-center px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-50 ">
          {showTyping ? (
            <ReactTyped
              strings={["Meet People, Not Profiles", "Real Connections, Not Just Swipes"]}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          ) : (
            "Meet People, Not Profiles"
          )}
        </h1>
        <p className="text-lg md:text-xl font-medium text-red-50 max-w-2xl mx-auto ">
          Dating designed for real connections.
        </p>
        <img src={underline} className="mx-auto h-3 my-2" alt="Underline" />

        {/* Store Buttons */}
        <div className="flex justify-center mt-6 gap-4">
          <img
            src={appstore}
            className="h-12 md:h-14 drop-shadow-lg cursor-pointer hover:scale-105 transition"
            alt="App Store"
          />
          <img
            src={playstore}
            className="h-12 md:h-14 drop-shadow-lg cursor-pointer hover:scale-105 transition"
            alt="Play Store"
          />
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
