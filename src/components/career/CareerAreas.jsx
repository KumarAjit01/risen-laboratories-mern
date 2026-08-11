import {
  FaBullhorn,
  FaUsers,
  FaChartBar,
  FaLaptopCode,
  FaUserTie,
  FaHeadset,
} from "react-icons/fa";

const areas = [
  {
    icon: FaBullhorn,
    title: "Marketing",
    text: "Brand promotion, market communication and marketing activities.",
  },
  {
    icon: FaUsers,
    title: "Business Development",
    text: "Developing business relationships and identifying growth opportunities.",
  },
  {
    icon: FaChartBar,
    title: "Sales & Market Development",
    text: "Supporting market expansion and business development initiatives.",
  },
  {
    icon: FaUserTie,
    title: "Administration",
    text: "Supporting day-to-day organizational and administrative operations.",
  },
  {
    icon: FaLaptopCode,
    title: "Digital & Technology",
    text: "Digital presence, technology and online business initiatives.",
  },
  {
    icon: FaHeadset,
    title: "Support Functions",
    text: "Communication, coordination and other business support activities.",
  },
];

const CareerAreas = () => {
  return (
    <section className="py-20 lg:py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-sm uppercase tracking-[3px] text-green-600 font-semibold">
            Career Areas
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Find Where You Can Make an Impact
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-5">
            Explore different areas where your skills and experience
            can contribute to our growing business.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

          {areas.map((area) => {

            const Icon = area.icon;

            return (
              <div
                key={area.title}
                className="group bg-white rounded-3xl border border-slate-200 p-7 hover:shadow-xl hover:border-blue-200 transition"
              >

                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-lg group-hover:bg-green-600 group-hover:text-white transition">

                  <Icon />

                </div>

                <h3 className="text-xl font-bold text-slate-900 mt-5 group-hover:text-blue-700 transition">
                  {area.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  {area.text}
                </p>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
};

export default CareerAreas;