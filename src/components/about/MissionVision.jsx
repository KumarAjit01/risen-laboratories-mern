import { FaBullseye, FaEye, FaGem } from "react-icons/fa";

const cards = [
  {
    icon: <FaBullseye />,
    title: "Mission",
    text: "Deliver safe, effective, and affordable medicines."
  },
  {
    icon: <FaEye />,
    title: "Vision",
    text: "Become a trusted pharmaceutical brand through innovation."
  },
  {
    icon: <FaGem />,
    title: "Core Values",
    text: "Integrity, Quality, Customer Focus, and Excellence."
  }
];

const MissionVision = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition"
            >
              <div className="text-5xl text-blue-700 mb-6">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {card.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {card.text}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default MissionVision;