import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaUsers,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";

const benefits = [
  {
    icon: FaUsers,
    title: "Strong Business Relationships",
    text: "We focus on developing reliable and long-term relationships with business partners.",
  },
  {
    icon: FaChartLine,
    title: "Growth-Oriented Approach",
    text: "Our activities are focused on creating practical market and business opportunities.",
  },
  {
    icon: FaHeadset,
    title: "Partner Support",
    text: "We aim to provide continuous communication and support throughout the business journey.",
  },
];

const PartnerBenefits = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-sm uppercase tracking-[3px] text-green-600 font-semibold">
            Why Work With Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            A Partner-Focused Approach
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-8">
            We focus on building long-term business relationships
            rather than simply promoting products.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-7 mt-14">

          {benefits.map((benefit, index) => {

            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-100"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-700 text-white flex items-center justify-center text-xl">

                  <Icon />

                </div>

                <h3 className="text-xl font-bold text-slate-900 mt-6">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-7 mt-3">
                  {benefit.text}
                </p>

                <div className="flex items-center gap-2 mt-6 text-sm font-semibold text-green-600">

                  <FaCheckCircle />

                  Partner-focused service

                </div>

              </motion.div>
            );

          })}

        </div>

      </div>

    </section>
  );
};

export default PartnerBenefits;