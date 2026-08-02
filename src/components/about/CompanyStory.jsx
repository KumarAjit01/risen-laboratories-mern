import { motion } from "framer-motion";
import aboutImg from "../../assets/images/about.png";

const CompanyStory = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <motion.img
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={aboutImg}
          alt="Company"
          className="rounded-3xl shadow-xl"
        />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-green-600 font-semibold uppercase tracking-widest">
            Our Story
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Building Trust Through Innovation
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            RISEN Laboratories Pvt. Ltd. is committed to providing
            high-quality pharmaceutical products backed by innovation,
            ethical practices, and customer satisfaction.
          </p>

          <p className="mt-4 text-gray-600 leading-8">
            We strive to improve lives by delivering reliable healthcare
            solutions across India through continuous research and
            quality-focused manufacturing.
          </p>
        </motion.div>

      </div>

    </section>
  );
};

export default CompanyStory;