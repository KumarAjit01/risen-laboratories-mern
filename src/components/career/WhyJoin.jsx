import { motion } from "framer-motion";
import {
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

const benefits = [
  {
    icon: FaUsers,
    title: "Collaborative Culture",
    text: "Work with people who value teamwork, communication and shared goals.",
  },
  {
    icon: FaLightbulb,
    title: "Learning Opportunities",
    text: "Develop your professional skills through practical exposure and new challenges.",
  },
  {
    icon: FaChartLine,
    title: "Growth Mindset",
    text: "Take opportunities to learn, contribute and grow with the organization.",
  },
  {
    icon: FaHandshake,
    title: "Professional Environment",
    text: "Build meaningful professional relationships in a focused business environment.",
  },
];

const WhyJoin = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-sm uppercase tracking-[3px] text-green-600 font-semibold">
            Why Join Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Grow With a Team That Values People
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-5">
            We believe strong businesses are built by motivated,
            responsible and continuously learning people.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {benefits.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className="p-7 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center text-xl">

                  <Icon />

                </div>

                <h3 className="text-xl font-bold text-slate-900 mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7 mt-3">
                  {item.text}
                </p>

              </motion.div>
            );

          })}

        </div>

      </div>

    </section>
  );
};

export default WhyJoin;