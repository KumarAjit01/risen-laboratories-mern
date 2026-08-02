import { motion } from "framer-motion";
import heroImg from "../../assets/images/hero.png";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f4f9ff] via-white to-[#edf8ee] pt-28 lg:pt-36">

      {/* Blur Background */}

      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-green-200/30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Trusted Pharmaceutical Company
            </span>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-slate-900">

              Rising Through

              <span className="block text-blue-700">
                Innovation &
              </span>

              <span className="text-green-600">
                Care
              </span>

            </h1>

            <p className="text-slate-600 text-lg mt-8 leading-8 max-w-xl">
              RISEN Laboratories Pvt. Ltd. delivers
              high-quality pharmaceutical solutions with
              innovation, research, and uncompromising
              quality standards for a healthier tomorrow.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full flex items-center gap-3 transition">

                Explore Products

                <FaArrowRight />

              </button>

              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full transition">

                Contact Us

              </button>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-8 mt-14">

              <div>

                <h2 className="text-3xl font-bold text-blue-700">
                  100+
                </h2>

                <p className="text-gray-500">
                  Products
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-blue-700">
                  500+
                </h2>

                <p className="text-gray-500">
                  Doctors
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-blue-700">
                  25+
                </h2>

                <p className="text-gray-500">
                  States
                </p>

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="absolute inset-0 rounded-full bg-blue-200 blur-3xl opacity-30"></div>

            <img
              src={heroImg}
              alt="Laboratory"
              className="relative w-full max-w-xl mx-auto drop-shadow-2xl"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Hero;