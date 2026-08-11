import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaHandshake,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ServicesHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 pt-28 lg:pt-32 pb-20">

      {/* Background Shapes */}

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />

      <div className="absolute top-40 -right-32 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-700 font-semibold text-sm">

              <span className="w-2 h-2 rounded-full bg-green-500" />

              Pharmaceutical Marketing Services

            </div>

            <h1 className="mt-7 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-slate-900">

              Growing Brands Through

              <span className="block text-blue-700">
                Smart Marketing
              </span>

              <span className="block text-green-600">
                & Strong Partnerships
              </span>

            </h1>

            <p className="mt-7 text-lg text-slate-600 leading-8 max-w-xl">

              We help pharmaceutical brands build market presence,
              strengthen business relationships and create sustainable
              growth opportunities through focused marketing support.

            </p>

            <div className="flex flex-wrap gap-4 mt-9">

              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-blue-700/20 transition"
              >

                Partner With Us

                <FaArrowRight />

              </button>

              <button
                onClick={() => navigate("/products")}
                className="inline-flex items-center gap-3 border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-7 py-3.5 rounded-full font-semibold transition"
              >

                Explore Products

              </button>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="grid grid-cols-2 gap-5">

              {/* Card 1 */}

              <div className="bg-white rounded-3xl p-7 shadow-xl border border-slate-100">

                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center text-2xl">

                  <FaBullhorn />

                </div>

                <h3 className="text-xl font-bold text-slate-900 mt-5">
                  Brand Marketing
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-6">
                  Building visibility and awareness for pharmaceutical brands.
                </p>

              </div>

              {/* Card 2 */}

              <div className="bg-white rounded-3xl p-7 shadow-xl border border-slate-100 mt-10">

                <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center text-2xl">

                  <FaHandshake />

                </div>

                <h3 className="text-xl font-bold text-slate-900 mt-5">
                  Business Partnerships
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-6">
                  Connecting with business partners and distribution networks.
                </p>

              </div>

              {/* Card 3 */}

              <div className="bg-white rounded-3xl p-7 shadow-xl border border-slate-100 -mt-2">

                <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl">

                  <FaChartLine />

                </div>

                <h3 className="text-xl font-bold text-slate-900 mt-5">
                  Market Growth
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-6">
                  Focused strategies designed to support long-term growth.
                </p>

              </div>

              {/* Small Stats */}

              <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-7 shadow-xl text-white mt-8">

                <p className="text-sm text-blue-100">
                  Our Approach
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  Quality
                </h3>

                <p className="text-sm text-blue-100 mt-1">
                  Trust • Reach • Growth
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default ServicesHero;