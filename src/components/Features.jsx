import { FaSearch, FaTicketAlt, FaGem, FaBolt } from "react-icons/fa";

const Features = () => {
  return (
    <div className="bg-pink-50 text-gray-900 py-12 px-6">
      <h2 className="text-center text-4xl font-semibold text-gray-800">Why ClubBuddy?</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 text-center">
        
        <div className="flex flex-col items-center">
          <FaSearch className="text-5xl text-pink-500" />
          <h3 className="text-lg font-medium mt-3">Club Discovery</h3>
        </div>

        <div className="flex flex-col items-center">
          <FaTicketAlt className="text-5xl text-pink-500" />
          <h3 className="text-lg font-medium mt-3">Easy Bookings</h3>
        </div>

        <div className="flex flex-col items-center">
          <FaGem className="text-5xl text-pink-500" />
          <h3 className="text-lg font-medium mt-3">VIP Access</h3>
        </div>

        <div className="flex flex-col items-center">
          <FaBolt className="text-5xl text-pink-500" />
          <h3 className="text-lg font-medium mt-3">Exclusive Deals</h3>
        </div>

      </div>
    </div>
  );
};

export default Features;
