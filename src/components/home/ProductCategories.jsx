import CategoryCard from "../ui/CategoryCard";

import {
  FaCapsules,
  FaPrescriptionBottleAlt,
  FaSyringe,
  FaTablets,
  FaHeartbeat,
  FaLeaf,
  FaBaby,
  FaAppleAlt,
} from "react-icons/fa";

const categories = [
  {
    title: "Tablets",
    icon: <FaTablets />,
    desc: "High-quality tablet formulations for various healthcare needs.",
  },
  {
    title: "Capsules",
    icon: <FaCapsules />,
    desc: "Reliable capsule medicines with superior quality standards.",
  },
  {
    title: "Syrups",
    icon: <FaPrescriptionBottleAlt />,
    desc: "Safe and effective liquid formulations for all age groups.",
  },
  {
    title: "Injectables",
    icon: <FaSyringe />,
    desc: "Sterile injectable medicines manufactured with precision.",
  },
  {
    title: "Cardiac Care",
    icon: <FaHeartbeat />,
    desc: "Advanced cardiac healthcare medicines.",
  },
  {
    title: "Ayurvedic",
    icon: <FaLeaf />,
    desc: "Natural healthcare products inspired by Ayurveda.",
  },
  {
    title: "Pediatric",
    icon: <FaBaby />,
    desc: "Medicines specially formulated for children.",
  },
  {
    title: "Nutraceutical",
    icon: <FaAppleAlt />,
    desc: "Health supplements for better nutrition and wellness.",
  },
];

const ProductCategories = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[3px] text-green-600 font-semibold">

            Our Products

          </span>

          <h2 className="text-5xl font-bold mt-5">

            Product Categories

          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">

            We offer a comprehensive portfolio of pharmaceutical
            products designed to improve healthcare and well-being.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {categories.map((item, index) => (
            <CategoryCard
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}

        </div>

        <div className="text-center mt-16">

          <button className="bg-blue-700 hover:bg-green-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition">

            View All Products

          </button>

        </div>

      </div>

    </section>
  );
};

export default ProductCategories;