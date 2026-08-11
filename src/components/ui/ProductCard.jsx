import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200 hover:shadow-2xl transition-all duration-300"
    >

      {/* Image */}

      <div className="relative h-64 bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center overflow-hidden">

        {/* Category Badge */}

        <span className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100 shadow-sm">
          {product.category}
        </span>

        {/* Product Image */}

        <img
          src={product.image}
          alt={product.name}
          className="h-52 w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />

      </div>

      {/* Content */}

      <div className="p-6">

        <p className="text-xs uppercase tracking-[2px] text-green-600 font-semibold">
          Pharmaceutical Product
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-blue-700 transition">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 mt-3 leading-6">
          {product.composition}
        </p>

        {/* Pack Size */}

        {product.packSize && (
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">

            <span className="text-sm text-gray-500">
              Pack Size
            </span>

            <span className="text-sm font-semibold text-slate-700">
              {product.packSize}
            </span>

          </div>
        )}

        {/* Button */}

        <button
          type="button"
          className="mt-6 flex items-center gap-2 text-blue-700 font-semibold hover:text-green-600 transition"
        >
          View Details

          <FaArrowRight className="text-sm" />

        </button>

      </div>

    </motion.div>
  );
};

export default ProductCard;