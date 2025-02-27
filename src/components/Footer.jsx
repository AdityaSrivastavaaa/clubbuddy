

function Footer() {
  return (
    <footer className="bg-gray-100 rounded-lg ">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Company Logo & Contact Info */}
          <div className="space-y-4">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-wide">
  Clubbuddy
</h1>

            <div className="flex flex-col gap-3 mt-4 text-gray-500 text-sm">
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-black text-lg"></i>
                <p>support@clubbuddy.com</p>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-phone-alt text-black text-lg"></i>
                <p>+91 827 315 5716</p>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-phone-alt text-black text-lg"></i>
                <p>+91 921 913 5156</p>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-black text-lg"></i>
                <p> Plot No 22, Sector 135, Noida, Uttar Pradesh , India 201304</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-500 space-y-3 grid grid-cols-2">
              <li><a href="#" className="hover:text-black">Home</a></li>
              <li><a href="#" className="hover:text-black">FAQs</a></li>
              <li><a href="#" className="hover:text-black">Price Plan</a></li>
              <li><a href="#" className="hover:text-black">Features</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
              <li><a href="#" className="hover:text-black">Products</a></li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Follow Us</h3>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-blue-500 text-2xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-sky-500 text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-red-500 text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700 text-2xl">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Newsletter</h3>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email..."
                className="p-3 border border-gray-300 rounded-full w-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 rounded-full hover:bg-indigo-700 transition duration-300">
                Subscribe →
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <hr className="my-10 border-gray-200 dark:border-gray-700" />
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Clubbuddy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
