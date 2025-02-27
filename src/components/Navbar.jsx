import brandlogo from "../../public/assets/clubbuddy.png"; // Ensure correct path

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-50 shadow-md py-4 px-6 flex items-center z-10 h-16">
      <div className="flex items-center">
        <img src={brandlogo} alt="Brand Logo" className="w-24 h-auto object-contain mr-2" />
      </div>
    </nav>
  );
}

export default Navbar;
