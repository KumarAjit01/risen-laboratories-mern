import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative pt-36 pb-24 bg-gradient-to-r from-blue-700 via-blue-600 to-green-600 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold"
        >
          About RISEN Laboratories
        </motion.h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
          Dedicated to innovation, quality, and improving healthcare
          through trusted pharmaceutical solutions.
        </p>

      </div>

    </section>
  );
};

export default AboutHero;