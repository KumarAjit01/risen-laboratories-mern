import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition"
    >
      <div className="bg-slate-50 p-8 flex justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 object-contain group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-7">
        <span className="text-green-600 text-sm font-semibold">
          {product.category}
        </span>

        <h3 className="text-2xl font-bold mt-3">
          {product.name}
        </h3>

        <p className="mt-3 text-gray-600">
          {product.composition}
        </p>

        <button className="mt-6 flex items-center gap-2 text-blue-700 font-semibold hover:text-green-600 transition">
          View Details
          <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;