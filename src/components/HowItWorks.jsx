const HowItWorks = () => {
  return (
    <div className="bg-gray-800 text-white py-10 px-6">
      <h2 className="text-center text-3xl font-semibold">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-center">
        <div className="bg-gray-700 p-6 rounded-lg">
          <span className="text-4xl">📲</span>
          <h3 className="text-lg font-medium mt-2">Download the App</h3>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg">
          <span className="text-4xl">🎟️</span>
          <h3 className="text-lg font-medium mt-2">Explore & Book</h3>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg">
          <span className="text-4xl">🎉</span>
          <h3 className="text-lg font-medium mt-2">Enjoy the Party</h3>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
