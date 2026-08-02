import StatCard from "../ui/StatCard";
import CertificateCard from "../ui/CertificateCard";

const stats = [
  {
    number: 100,
    suffix: "+",
    title: "Products",
  },
  {
    number: 500,
    suffix: "+",
    title: "Doctors Trust",
  },
  {
    number: 25,
    suffix: "+",
    title: "States Served",
  },
  {
    number: 10,
    suffix: "+",
    title: "Years of Excellence",
  },
];

const certificates = [
  "WHO-GMP Certified",
  "ISO Certified",
  "Quality Assurance",
  "Ethical Manufacturing",
];

const QualityStats = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-green-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[3px] text-green-600 font-semibold">
            Quality Assurance
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Trusted Quality, Proven Results
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality ensures every product meets
            international pharmaceutical standards before reaching
            healthcare professionals.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {stats.map((item, index) => (
            <StatCard key={index} {...item} />
          ))}

        </div>

        {/* Certificates */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          {certificates.map((item, index) => (
            <CertificateCard
              key={index}
              title={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default QualityStats;