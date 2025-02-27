import { FaRegHeart, FaGift } from 'react-icons/fa';

const SpecialOffers = () => {
  return (
    <div className="bg-pink-50 text-gray-900 py-12 px-6">
      <h2 className="text-center text-4xl font-bold text-pink-600">💖 Exclusive Offers 💖</h2>
      <p className="text-center text-gray-600 mt-2">Find love and save while you're at it!</p>

      <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
        
        <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-xl shadow-lg w-full md:w-1/3 text-center transform hover:scale-105 transition-all">
          <FaRegHeart className="text-white text-5xl mb-4" />
          <h3 className="text-2xl font-semibold text-white">💕 20% Off First Booking</h3>
          <p className="text-pink-100 mt-2">Start your romantic adventure with a special discount.</p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-xl shadow-lg w-full md:w-1/3 text-center transform hover:scale-105 transition-all">
          <FaGift className="text-white text-5xl mb-4" />
          <h3 className="text-2xl font-semibold text-white">🎁 Refer & Earn Rewards</h3>
          <p className="text-indigo-100 mt-2">Share the love and get rewarded for every referral.</p>
        </div>

      </div>
    </div>
  );
};

export default SpecialOffers;
