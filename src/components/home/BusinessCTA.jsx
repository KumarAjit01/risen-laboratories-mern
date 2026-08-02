import { FaArrowRight } from "react-icons/fa";

const BusinessCTA = () => {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-[40px] bg-gradient-to-r from-blue-700 to-green-600 p-14 text-center text-white">

          <h2 className="text-4xl lg:text-5xl font-bold">
            Become Our Business Partner
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg opacity-90">
            Join RISEN Laboratories and grow your pharmaceutical business
            with quality products, marketing support and a trusted brand.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
              Become Distributor
            </button>

            <button className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition flex items-center gap-2">
              Contact Us
              <FaArrowRight />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BusinessCTA;