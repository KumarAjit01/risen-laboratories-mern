import { FaArrowRight } from "react-icons/fa";

const AboutCTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-gradient-to-r from-blue-700 to-green-600 rounded-3xl p-12 text-center text-white">

          <h2 className="text-4xl font-bold">
            Partner With RISEN Laboratories
          </h2>

          <p className="mt-5 text-lg max-w-2xl mx-auto">
            Let's build a healthier future together with quality
            pharmaceutical products and trusted partnerships.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold flex items-center gap-3 mx-auto hover:bg-gray-100 transition">
            Contact Us
            <FaArrowRight />
          </button>

        </div>

      </div>
    </section>
  );
};

export default AboutCTA;