import { FaSearch, FaUserPlus, FaHandshake } from "react-icons/fa";

function Step() {
  const steps = [
    { icon: <FaSearch size={30} />, title: "Explore Clubs", desc: "Browse and find clubs that match your interests." },
    { icon: <FaUserPlus size={30} />, title: "Connect with Members", desc: "Send requests and start conversations with club members." },
    { icon: <FaHandshake size={30} />, title: "Meet Your Buddy", desc: "Join events and meet your perfect club buddy." }
  ];

  return (
    <div className="text-center py-10 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Start Your Journey to Finding Your Club Buddy in Just a Few Simple Steps
      </h1>

      {/* Step-by-Step Process */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-xs">
            <div className="flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full mb-4">
              {step.icon}
            </div>
            <h2 className="text-xl font-semibold">{step.title}</h2>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Step;