import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaUsers,
  FaMapMarkedAlt,
  FaChartBar,
  FaHandshake,
  FaGlobeAsia,
} from "react-icons/fa";

const services = [
  {
    icon: FaBullhorn,
    title: "Pharmaceutical Marketing",
    description:
      "Focused marketing support to improve pharmaceutical brand visibility and market presence.",
  },
  {
    icon: FaUsers,
    title: "Doctor & Professional Outreach",
    description:
      "Supporting brand communication and professional engagement activities for better product awareness.",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Market Expansion",
    description:
      "Helping identify and develop opportunities across new markets and business territories.",
  },
  {
    icon: FaChartBar,
    title: "Market Development",
    description:
      "Structured activities focused on understanding market opportunities and supporting business growth.",
  },
  {
    icon: FaHandshake,
    title: "Business Partnerships",
    description:
      "Building meaningful relationships with distributors, retailers and other business partners.",
  },
  {
    icon: FaGlobeAsia,
    title: "Pan-India Reach",
    description:
      "Supporting business expansion through a wider network and market-oriented approach.",
  },
];

const ServiceCategories = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-sm uppercase tracking-[3px] font-semibold text-green-600">
            What We Do
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Our Pharmaceutical Marketing Services
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-8">
            We provide market-focused services that help pharmaceutical
            brands strengthen visibility, partnerships and business
            opportunities.
          </p>

        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-14">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center text-xl group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">

                  <Icon />

                </div>

                <h3 className="text-xl font-bold text-slate-900 mt-6 group-hover:text-blue-700 transition">

                  {service.title}

                </h3>

                <p className="text-gray-600 mt-3 leading-7">

                  {service.description}

                </p>

                <div className="mt-6 w-10 h-1 rounded-full bg-green-500 group-hover:w-20 transition-all duration-300" />

              </motion.div>
            );

          })}

        </div>

      </div>

    </section>
  );
};

export default ServiceCategories;