import { motion } from "framer-motion";
import {
  FaBullseye,
  FaMegaphone,
  FaNetworkWired,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    icon: FaBullseye,
    number: "01",
    title: "Brand Positioning",
    description:
      "Helping create a clear market positioning for pharmaceutical products and brands.",
  },
  {
    icon: FaMegaphone,
    number: "02",
    title: "Product Promotion",
    description:
      "Supporting product promotion through focused communication and market activities.",
  },
  {
    icon: FaNetworkWired,
    number: "03",
    title: "Distribution Network",
    description:
      "Developing relationships and opportunities across relevant distribution channels.",
  },
  {
    icon: FaChartLine,
    number: "04",
    title: "Business Growth",
    description:
      "Creating opportunities that support sustainable market expansion and business growth.",
  },
];

const MarketingServices = () => {
  return (
    <section className="py-20 lg:py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <span className="text-sm uppercase tracking-[3px] text-green-600 font-semibold">
              Our Approach
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">

              Turning Pharmaceutical
              <span className="block text-blue-700">
                Products Into Opportunities
              </span>

            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-8">

              Our approach focuses on market understanding, brand
              visibility, business relationships and consistent support.
              We work towards creating stronger opportunities for
              pharmaceutical products in competitive markets.

            </p>

            <div className="mt-8 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">

              <p className="text-sm uppercase tracking-wider text-gray-400 font-semibold">
                Our Focus
              </p>

              <div className="flex flex-wrap gap-3 mt-4">

                {[
                  "Market Reach",
                  "Brand Visibility",
                  "Partner Network",
                  "Business Growth",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <div className="grid sm:grid-cols-2 gap-5">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition"
                >

                  <span className="absolute top-5 right-5 text-xs font-bold text-slate-300">
                    {service.number}
                  </span>

                  <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-lg">

                    <Icon />

                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mt-5">

                    {service.title}

                  </h3>

                  <p className="text-sm text-gray-600 leading-6 mt-2">

                    {service.description}

                  </p>

                </motion.div>
              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default MarketingServices;