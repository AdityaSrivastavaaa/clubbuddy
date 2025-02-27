const reviews = [
    { name: "Aarav", review: "This app transformed my nightlife! Easy to use and has great perks!" },
    { name: "Isha", review: "VIP access is a game changer. No more waiting!" },
    { name: "Ravi", review: "Perfect for finding new places to go out and have fun!" },
    { name: "Priya", review: "The deals are amazing! Loved every minute of it." },
    { name: "Arjun", review: "A must-have app for anyone who loves nightlife!" },
    { name: "Simran", review: "The best app for nightlife enthusiasts. Highly recommend!" },
    { name: "Rahul", review: "Super user-friendly! Made my nights out much easier!" },
    { name: "Neha", review: "Great experience, and the app’s interface is smooth!" },
    { name: "Vikram", review: "Loved the special offers. A perfect companion for nightlife." },
    { name: "Tanvi", review: "Easy navigation and great discounts. Definitely worth it!" },
  ];
  
  const Testimonials = () => {
    return (
      <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-10">
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">What people <br />are saying.</h1>
              <h3 className="text-xl mb-5 font-light text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div key={index} className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200">
                      <img src={`https://i.pravatar.cc/100?img=${index + 1}`} alt={review.name} />
                    </div>
                    <div className="flex-grow pl-4">
                      <h6 className="font-semibold text-sm text-gray-700">{review.name}</h6>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 italic">
                      <span className="text-lg text-gray-400 mr-1">"</span>
                      {review.review}
                      <span className="text-lg text-gray-400 ml-1">"</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  