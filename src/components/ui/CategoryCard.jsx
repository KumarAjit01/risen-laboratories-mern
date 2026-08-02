import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CategoryCard = ({ icon, title, desc }) => {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      <div className="w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center text-4xl text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition">

        {icon}

      </div>

      <h3 className="mt-7 text-2xl font-bold text-slate-900">

        {title}

      </h3>

      <p className="mt-4 text-gray-600 leading-7">

        {desc}

      </p>

      <button className="mt-8 flex items-center gap-3 font-semibold text-blue-700 group-hover:text-green-600 transition">

        Learn More

        <FaArrowRight />

      </button>
    </motion.div>
  );
};

export default CategoryCard;