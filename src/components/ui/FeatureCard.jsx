import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl text-blue-700 mb-6 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-slate-800 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;