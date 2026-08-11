import { AnimatePresence, motion } from "framer-motion";
import GalleryCard from "./GalleryCard";

const GalleryGrid = ({
  items,
  loading,
  error,
  onOpen,
}) => {

  if (loading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200"
          >

            <div className="h-64 bg-slate-200 animate-pulse" />

            <div className="p-5 space-y-3">

              <div className="h-5 bg-slate-200 rounded animate-pulse w-2/3" />

              <div className="h-4 bg-slate-200 rounded animate-pulse w-full" />

            </div>

          </div>
        ))}

      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 bg-white rounded-3xl border border-red-100">

        <h3 className="text-xl font-bold text-slate-900">
          Unable to Load Gallery
        </h3>

        <p className="text-gray-500 mt-2">
          Please try again later.
        </p>

      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="text-center py-20">

        <h3 className="text-2xl font-bold text-slate-900">
          No Gallery Items Found
        </h3>

        <p className="text-gray-500 mt-2">
          Gallery content will be available soon.
        </p>

      </div>
    );
  }

  return (
    <motion.div
      layout
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
    >

      <AnimatePresence mode="popLayout">

        {items.map((item) => (
          <GalleryCard
            key={item.id}
            item={item}
            onOpen={onOpen}
          />
        ))}

      </AnimatePresence>

    </motion.div>
  );
};

export default GalleryGrid;