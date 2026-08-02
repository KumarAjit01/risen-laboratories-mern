import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/logos/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        sticky
          ? "bg-white shadow-lg py-3"
          : "bg-white/90 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}

        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="RISEN Laboratories"
            className="h-12 object-contain"
          />
        </NavLink>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-8">

          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition duration-300 ${
                  isActive
                    ? "text-blue-700"
                    : "text-slate-700 hover:text-blue-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

        </nav>

        {/* Contact Button */}

        <NavLink
          to="/contact"
          className="hidden lg:block bg-blue-700 hover:bg-green-600 text-white px-6 py-3 rounded-full transition"
        >
          Contact Us
        </NavLink>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-slate-700"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden bg-white shadow-xl">

          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 border-b transition ${
                  isActive
                    ? "bg-blue-50 text-blue-700 font-semibold"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <div className="p-6">
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-blue-700 hover:bg-green-600 text-white py-3 rounded-full transition"
            >
              Contact Us
            </NavLink>
          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;