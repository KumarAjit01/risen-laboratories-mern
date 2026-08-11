import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CareerHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 pt-32 pb-20">

      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-green-200/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-700 text-sm font-semibold">

              <FaBriefcase />

              Careers at RISEN

            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mt-7">

              Build Your Career With

              <span className="block text-blue-700">
                Purpose & Growth
              </span>

            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">

              Join a growing pharmaceutical marketing organization
              where people, ideas and business opportunities come
              together to create meaningful growth.

            </p>

            <div className="flex flex-wrap gap-4 mt-9">

              <button
                onClick={() =>
                  document
                    .getElementById("open-positions")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-7 py-3.5 rounded-full font-semibold transition shadow-lg"
              >

                View Opportunities

                <FaArrowRight />

              </button>

              <button
                onClick={() => navigate("/contact")}
                className="border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-7 py-3.5 rounded-full font-semibold transition"
              >
                Contact Us
              </button>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="bg-white rounded-[32px] p-8 shadow-2xl border border-slate-100">

              <div className="grid grid-cols-2 gap-5">

                <div className="bg-blue-50 rounded-3xl p-6">

                  <FaUsers className="text-3xl text-blue-700" />

                  <h3 className="text-xl font-bold text-slate-900 mt-5">
                    People First
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    A collaborative environment for learning and growth.
                  </p>

                </div>

                <div className="bg-green-50 rounded-3xl p-6 mt-8">

                  <FaBriefcase className="text-3xl text-green-600" />

                  <h3 className="text-xl font-bold text-slate-900 mt-5">
                    Career Growth
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    Opportunities to develop skills and take on responsibility.
                  </p>

                </div>

                <div className="col-span-2 bg-slate-900 rounded-3xl p-7 text-white">

                  <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider">
                    Join Our Team
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    Learn. Contribute. Grow.
                  </h3>

                  <p className="text-slate-300 mt-2">
                    Explore opportunities with RISEN Laboratories.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default CareerHero;