import { motion } from "framer-motion";

const ProcessCard = ({ icon, step, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-3xl border border-slate-200 p-7 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Step */}

      <div className="absolute top-5 right-5">

        <span className="text-xs font-bold text-slate-300 group-hover:text-blue-200 transition">
          {step}
        </span>

      </div>

      {/* Icon */}

      <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center text-2xl group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">

        {icon}

      </div>

      {/* Content */}

      <div className="mt-6">

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition">
          {title}
        </h3>

        <p className="mt-3 text-gray-600 leading-7">
          {description}
        </p>

      </div>

      {/* Bottom Line */}

      <div className="mt-6 h-1 w-10 rounded-full bg-green-500 group-hover:w-20 transition-all duration-300" />

    </motion.div>
  );
};

export default ProcessCard;