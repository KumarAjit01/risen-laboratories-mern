import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const team = [
  {
    id: 1,
    name: "Mr. Rajesh Kumar",
    role: "Managing Director",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    role: "Medical Advisor",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Marketing Head",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const Leadership = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold uppercase tracking-widest">
            Leadership Team
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Meet Our Leadership
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our experienced leadership team is committed to innovation,
            quality and excellence in healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >

              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="text-blue-700 font-medium mt-2">
                  {member.role}
                </p>

                <div className="flex gap-4 mt-6">

                  <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800">
                    <FaLinkedinIn />
                  </button>

                  <button className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700">
                    <FaEnvelope />
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Leadership;