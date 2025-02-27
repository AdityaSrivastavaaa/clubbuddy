const nightclubs = [
    { name: "Club Mirage" },
    { name: "Sky Lounge" },
    { name: "Velvet Nights" },
    { name: "Neon Pulse" },
    { name: "Moonlight Bar" },
    { name: "Horizon Club" },
    { name: "Midnight Bliss" },
    { name: "Eclipse Lounge" },
    { name: "Aurora Nightclub" },
    { name: "Infinity Beats" },
  ];
  
  const Partners = () => {
    return (
      <div className="bg-gradient-to-r from-pink-400 via-indigo-500 to-purple-600 text-white py-12 px-6 text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
          Clubs
        </h2>
        <p className="mt-4 text-lg font-light text-gray-200">
          Experience the best nightlife at these exclusive clubs.
        </p>
  
        {/* Infinite Scroll Wrapper */}
        <div className="relative w-full overflow-hidden mt-10">
          <div className="flex gap-10 animate-scroll">
            {/* Duplicate list for seamless looping */}
            {[...nightclubs, ...nightclubs].map((club, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-lg border border-gray-200 shadow-xl rounded-xl w-56 h-32 flex items-center justify-center text-2xl font-semibold text-gray-800 hover:bg-gradient-to-r from-pink-400 via-indigo-500 to-purple-600 hover:text-white hover:scale-105 transition-all duration-300"
              >
                {club.name}
              </div>
            ))}
          </div>
        </div>
  
        {/* Tailwind CSS Animation (Same File) */}
        <style>
          {`
            @keyframes scroll {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll {
              display: flex;
              width: max-content;
              animation: scroll 20s linear infinite;
            }
          `}
        </style>
      </div>
    );
  };
  
  export default Partners;
  