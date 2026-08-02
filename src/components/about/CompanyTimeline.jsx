import { motion } from "framer-motion";

const timeline = [
  {
    year: "2021",
    title: "Company Founded",
    description:
      "RISEN Laboratories started with a vision to provide quality pharmaceutical products.",
  },
  {
    year: "2022",
    title: "Product Expansion",
    description:
      "Expanded product portfolio with tablets, capsules and syrups.",
  },
  {
    year: "2023",
    title: "Market Growth",
    description:
      "Strengthened distribution network and reached new healthcare partners.",
  },
  {
    year: "2024",
    title: "Innovation",
    description:
      "Focused on research, quality and customer satisfaction.",
  },
];

const CompanyTimeline = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-green-600 uppercase tracking-widest font-semibold">
            Company Journey
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Our Growth Timeline
          </h2>

          <p className="text-gray-600 mt-4">
            A quick look at our journey and milestones.
          </p>
        </div>

        <div className="relative border-l-4 border-blue-600 ml-4">

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 ml-8 relative"
            >
              <div className="absolute -left-12 top-1 w-6 h-6 rounded-full bg-green-600 border-4 border-white shadow"></div>

              <span className="text-blue-700 font-bold">
                {item.year}
              </span>

              <h3 className="text-2xl font-semibold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CompanyTimeline;