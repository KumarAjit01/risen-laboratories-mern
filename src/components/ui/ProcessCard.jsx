import { motion } from "framer-motion";

const ProcessCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 hover:shadow-2xl transition-all"
    >
      <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-3xl mb-5">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">
        {description}
      </p>
    </motion.div>
  );
};

export default ProcessCard;