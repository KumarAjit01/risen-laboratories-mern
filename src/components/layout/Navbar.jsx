import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  HiMenuAlt3,
  HiX,
  HiHome,
  HiInformationCircle,
  HiCube,
  HiBriefcase,
  HiPhotograph,
  HiUserGroup,
  HiPhone,
} from "react-icons/hi";

import logo from "../../assets/logos/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: HiHome,
    },
    {
      name: "About",
      path: "/about",
      icon: HiInformationCircle,
    },
    {
      name: "Products",
      path: "/products",
      icon: HiCube,
    },
    {
      name: "Services",
      path: "/services",
      icon: HiBriefcase,
    },
    {
      name: "Gallery",
      path: "/gallery",
      icon: HiPhotograph,
    },
    {
      name: "Career",
      path: "/career",
      icon: HiUserGroup,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: HiPhone,
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Background Overlay */}

      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-slate-950/40 backdrop-blur-[2px] z-[998] lg:hidden"
        />
      )}

      <header
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
          sticky
            ? "bg-white/95 backdrop-blur-xl shadow-lg"
            : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              sticky ? "py-2.5" : "py-3"
            }`}
          >

            {/* Logo */}

            <NavLink
              to="/"
              onClick={closeMenu}
              className="flex items-center"
            >
              <img
                src={logo}
                alt="RISEN Laboratories"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </NavLink>

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex items-center gap-8">

              {navLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `relative flex items-center gap-1.5 py-2 font-medium transition-all duration-300 ${
                        isActive
                          ? "text-blue-700"
                          : "text-slate-700 hover:text-blue-700"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon className="text-lg" />

                        {item.name}

                        <span
                          className={`absolute -bottom-1 left-0 h-[3px] rounded-full bg-blue-700 transition-all duration-300 ${
                            isActive ? "w-full" : "w-0"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                );
              })}

            </nav>

            {/* Desktop Contact */}

            <NavLink
              to="/contact"
              className="hidden lg:flex items-center gap-2 bg-blue-700 hover:bg-green-600 text-white px-7 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <HiPhone />

              Contact Us
            </NavLink>

            {/* Mobile Menu Button */}

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center text-2xl shadow-sm hover:bg-blue-100 transition-all"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>

          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}

        <div
          className={`lg:hidden absolute top-full left-0 w-full px-3 transition-all duration-300 ${
            menuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-3 invisible"
          }`}
        >

          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">

            {/* Menu Header */}

            <div className="px-5 py-4 bg-gradient-to-r from-blue-50 to-green-50 border-b border-slate-100">

              <p className="text-xs uppercase tracking-[2px] text-blue-600 font-semibold">
                RISEN Laboratories
              </p>

              <p className="text-sm text-slate-500 mt-1">
                Pharmaceutical Healthcare Solutions
              </p>

            </div>

            {/* Navigation */}

            <div className="p-3">

              {navLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3.5 rounded-xl mb-1 transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-blue-700 shadow-sm"
                          : "text-slate-700 hover:bg-slate-50"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-3">

                          <span
                            className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                              isActive
                                ? "bg-blue-600 text-white"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            <Icon className="text-lg" />
                          </span>

                          <span className="font-medium">
                            {item.name}
                          </span>

                        </div>

                        <span
                          className={`text-xl ${
                            isActive
                              ? "text-blue-600"
                              : "text-slate-300"
                          }`}
                        >
                          →
                        </span>
                      </>
                    )}
                  </NavLink>
                );
              })}

            </div>

            {/* Mobile CTA */}

            <div className="px-4 pb-4">

              <NavLink
                to="/contact"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full bg-blue-700 hover:bg-green-600 text-white py-3.5 rounded-xl font-semibold shadow-lg transition-all"
              >
                <HiPhone className="text-lg" />

                Send Enquiry
              </NavLink>

            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;