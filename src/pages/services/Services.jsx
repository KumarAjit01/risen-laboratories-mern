const services = [
  {
    title: "Pharmaceutical Manufacturing",
    desc: "High-quality manufacturing with modern facilities.",
  },
  {
    title: "Third Party Manufacturing",
    desc: "Reliable third-party manufacturing services.",
  },
  {
    title: "PCD Pharma Franchise",
    desc: "Expand your business with our franchise model.",
  },
  {
    title: "Marketing Support",
    desc: "Professional marketing and promotional support.",
  },
];

const Services = () => {
  return (
    <section className="pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-700">
            Our Services
          </h1>

          <p className="mt-5 text-gray-600">
            Quality pharmaceutical services for better healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;