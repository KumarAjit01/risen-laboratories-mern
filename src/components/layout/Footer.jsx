import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B2C6B] text-white mt-20">

      {/* Top Border */}
      <div className="h-2 bg-gradient-to-r from-green-500 via-blue-400 to-blue-700"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Company */}

          <div>

            <img
              src={logo}
              alt="RISEN"
              className="h-16 mb-6"
            />

            <p className="text-gray-300 leading-7 text-sm">
              RISEN Laboratories Pvt. Ltd. is committed to delivering
              high-quality pharmaceutical products through innovation,
              research and trusted healthcare solutions.
            </p>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-green-600 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-green-600 transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-green-600 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-green-600 transition flex items-center justify-center"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>

            </ul>

          </div>

          {/* Products */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Products
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>Tablets</li>
              <li>Capsules</li>
              <li>Syrups</li>
              <li>Injectables</li>
              <li>Nutraceuticals</li>

            </ul>

            <div className="mt-8">

              <div className="flex gap-3">

                <FaEnvelope className="text-green-400 mt-1" />

                <span className="text-gray-300 text-sm break-all">
                  risenlaboratoriespvltd@gmail.com
                
                </span>

              </div>

              <div className="flex gap-3 mt-4">

                <FaBuilding className="text-green-400 mt-1" />

                <span className="text-gray-300 text-sm">
                  CIN : U47721DL2026PTC467121
                  
                </span>

              </div>

            </div>

          </div>

          {/* Office */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Office Address
            </h3>

            <div className="space-y-6">

              <div className="flex gap-3">

                <FaMapMarkerAlt className="text-green-400 mt-1" />

                <div>

                  <h4 className="font-semibold text-white">
                    Regd. Office
                  </h4>

                  <p className="text-gray-300 text-sm leading-6 mt-2">
                    400-A, 4th Floor,
                    12 Ajit Singh House,
                    Yusuf Sarai Commercial Complex,
                    Near Green Park Metro Station Exit-2,
                    Green Park,
                    New Delhi - 110016
                    
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <FaMapMarkerAlt className="text-green-400 mt-1" />

                <div>

                  <h4 className="font-semibold text-white">
                    Zonal Office
                  </h4>

                  <p className="text-gray-300 text-sm leading-6 mt-2">
                    Ground Floor,
                    8H/22,
                    Bahadurpur Housing Colony,
                    Back of ZSI Building,
                    Patna - 800026
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-blue-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-sm text-center">
            © 2026 RISEN Laboratories Pvt. Ltd. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-3 md:mt-0">
            Rising Through Innovation & Care
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;