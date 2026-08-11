import { motion } from "framer-motion";
import {
  FaImages,
  FaArrowDown,
} from "react-icons/fa";

const GalleryHero = () => {
  const scrollToGallery = () => {
    document
      .getElementById("gallery-content")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-green-700 pt-32 pb-24">

      {/* Background */}

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

      <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-green-400/20 rounded-full blur-3xl" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_30%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center text-white"
        >

          {/* Icon */}

          <div className="mx-auto w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center text-2xl mb-7">

            <FaImages />

          </div>

          <p className="uppercase tracking-[4px] text-green-200 text-sm font-semibold">
            Our Gallery
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Explore Our Journey
          </h1>

          <p className="text-blue-100 text-lg md:text-xl leading-8 max-w-2xl mx-auto mt-6">
            Discover moments, events, business activities and
            milestones that represent the journey of RISEN Laboratories.
          </p>

          <button
            onClick={scrollToGallery}
            className="mt-9 inline-flex items-center gap-3 bg-white text-blue-700 px-7 py-3.5 rounded-full font-semibold hover:bg-blue-50 transition shadow-xl"
          >
            Explore Gallery

            <FaArrowDown className="text-sm" />

          </button>

        </motion.div>

      </div>

    </section>
  );
};

export default GalleryHero;