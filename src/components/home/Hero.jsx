import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import heroImg from "../../assets/images/hero1.jpeg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-blue-300/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-green-300/20 blur-[120px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[250px] h-[250px] rounded-full bg-cyan-200/20 blur-[90px]" />

      {/* Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-4 h-4 rounded-full bg-blue-700"></div>
        <div className="absolute top-60 right-40 w-3 h-3 rounded-full bg-green-600"></div>
        <div className="absolute bottom-40 left-1/3 w-5 h-5 rounded-full bg-blue-500"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center min-h-[88vh]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-white shadow-lg border border-blue-100 rounded-full px-5 py-2 text-sm font-semibold text-blue-700">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              Trusted Pharmaceutical Company
            </span>

            <h1 className="mt-8 text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] text-slate-900">
              Rising Through
              <span className="block text-blue-700">
                Innovation &
              </span>
              <span className="bg-gradient-to-r from-green-500 to-blue-700 bg-clip-text text-transparent">
                Care
              </span>
            </h1>

            <p className="mt-8 text-base md:text-lg leading-8 text-slate-600 max-w-xl">
              RISEN Laboratories Pvt. Ltd. delivers high-quality
              pharmaceutical solutions through innovation,
              research and uncompromising quality standards for
              a healthier tomorrow.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition flex items-center gap-3">
                Explore Products
                <FaArrowRight />
              </button>

              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full font-semibold transition">
                Contact Us
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-14">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                  100+
                </h2>
                <p className="text-gray-500 text-sm md:text-base">
                  Products
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                  500+
                </h2>
                <p className="text-gray-500 text-sm md:text-base">
                  Healthcare Partners
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                  25+
                </h2>
                <p className="text-gray-500 text-sm md:text-base">
                  States
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute inset-0 rounded-full bg-blue-200 blur-3xl opacity-30"></div>

            <img
              src={heroImg}
              alt="RISEN Laboratories"
              className="relative w-full max-w-xl xl:max-w-2xl rounded-3xl shadow-2xl border-8 border-white object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;