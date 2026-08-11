import { FaBriefcase, FaArrowRight } from "react-icons/fa";

const OpenPositions = () => {
  return (
    <section
      id="open-positions"
      className="py-20 lg:py-24 bg-white"
    >

      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[3px] text-green-600 font-semibold">
            Opportunities
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Current Openings
          </h2>

          <p className="text-gray-600 text-lg mt-5">
            Explore available opportunities and find the right role
            for your professional journey.
          </p>

        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-10 md:p-14 text-center">

          <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center text-2xl">

            <FaBriefcase />

          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-6">
            No Open Positions Currently
          </h3>

          <p className="max-w-xl mx-auto text-gray-600 leading-7 mt-3">
            We may have opportunities in the future. You can still
            share your profile with our team for consideration.
          </p>

          <a
            href="mailto:careers@risenlaboratories.com"
            className="inline-flex items-center gap-2 mt-7 bg-blue-700 hover:bg-blue-800 text-white px-7 py-3.5 rounded-full font-semibold transition"
          >
            Send Your Resume
            <FaArrowRight />
          </a>

        </div>

      </div>

    </section>
  );
};

export default OpenPositions;