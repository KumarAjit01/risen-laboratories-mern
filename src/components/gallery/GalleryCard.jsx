import { motion } from "framer-motion";
import { FaExpand } from "react-icons/fa";

const GalleryCard = ({
  item,
  onOpen,
}) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
    >

      {/* Image */}

      <button
        type="button"
        onClick={() => onOpen(item)}
        className="relative block w-full h-64 overflow-hidden bg-slate-100 text-left"
      >

        <img
          src={item.image}
          alt={item.title || "RISEN Laboratories Gallery"}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-300" />

        {/* Expand */}

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">

          <div className="w-12 h-12 rounded-full bg-white text-blue-700 flex items-center justify-center shadow-xl">

            <FaExpand />

          </div>

        </div>

        {/* Category */}

        {item.category && (
          <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur text-xs font-semibold text-blue-700 shadow-sm">
            {item.category}
          </span>
        )}

      </button>

      {/* Content */}

      <div className="p-5">

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition">

          {item.title}

        </h3>

        {item.description && (
          <p className="text-sm text-gray-500 mt-2 leading-6 line-clamp-2">
            {item.description}
          </p>
        )}

        {item.date && (
          <p className="text-xs text-gray-400 mt-4">
            {item.date}
          </p>
        )}

      </div>

    </motion.article>
  );
};

export default GalleryCard;