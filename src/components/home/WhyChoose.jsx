import {
  FaFlask,
  FaAward,
  FaTruck,
  FaUserMd,
} from "react-icons/fa";

import FeatureCard from "../ui/FeatureCard";

const features = [
  {
    icon: <FaFlask />,
    title: "Quality Manufacturing",
    description:
      "Manufactured with advanced pharmaceutical standards and strict quality control.",
  },
  {
    icon: <FaAward />,
    title: "Certified Products",
    description:
      "Committed to quality with industry-standard manufacturing processes and certifications.",
  },
  {
    icon: <FaTruck />,
    title: "Fast Distribution",
    description:
      "Reliable supply chain ensuring timely product availability across regions.",
  },
  {
    icon: <FaUserMd />,
    title: "Healthcare Focus",
    description:
      "Building trusted relationships with healthcare professionals and partners.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-green-600 font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
            Why Choose
            <span className="text-blue-700"> RISEN Laboratories?</span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg">
            We are committed to innovation, quality, and delivering trusted
            pharmaceutical solutions for a healthier future.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChoose;