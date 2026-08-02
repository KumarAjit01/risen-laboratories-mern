import ProcessCard from "../ui/ProcessCard";

import {
  FaLeaf,
  FaFlask,
  FaIndustry,
  FaVial,
  FaBoxOpen,
  FaTruck,
} from "react-icons/fa";

const process = [
  {
    icon: <FaLeaf />,
    title: "Raw Material",
    description:
      "Premium quality raw materials are sourced from trusted suppliers.",
  },
  {
    icon: <FaFlask />,
    title: "Research & Development",
    description:
      "Advanced R&D ensures innovation and effective formulations.",
  },
  {
    icon: <FaIndustry />,
    title: "Manufacturing",
    description:
      "Modern production facilities follow strict quality protocols.",
  },
  {
    icon: <FaVial />,
    title: "Quality Testing",
    description:
      "Every batch undergoes comprehensive quality and safety testing.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Packaging",
    description:
      "Products are securely packed using pharmaceutical standards.",
  },
  {
    icon: <FaTruck />,
    title: "Distribution",
    description:
      "Fast and reliable delivery through our nationwide distribution network.",
  },
];

const Manufacturing = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[3px] text-green-600 font-semibold">
            Manufacturing Process
          </span>

          <h2 className="text-5xl font-bold mt-4">
            From Research to Delivery
          </h2>

          <p className="text-gray-600 text-lg mt-6">
            Every product passes through a carefully monitored manufacturing
            process to ensure quality, safety and effectiveness.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {process.map((item, index) => (
            <ProcessCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Manufacturing;