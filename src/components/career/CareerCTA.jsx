import { FaArrowRight, FaEnvelope } from "react-icons/fa";

const CareerCTA = () => {
  return (
    <section className="py-20 lg:py-24 bg-slate-50">

      <div className="max-w-6xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-700 via-blue-800 to-green-700 p-8 md:p-12 lg:p-16 text-white">

          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-green-300/10 blur-3xl" />

          <div className="relative text-center max-w-3xl mx-auto">

            <div className="mx-auto w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-xl">

              <FaEnvelope />

            </div>

            <p className="text-blue-100 uppercase tracking-[3px] text-sm font-semibold mt-6">
              Start Your Journey
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
              Ready to Grow With Us?
            </h2>

            <p className="text-blue-100 text-lg leading-8 mt-5">
              Send us your resume and tell us how you can contribute
              to the growth of RISEN Laboratories.
            </p>

            <a
              href="mailto:careers@risenlaboratories.com"
              className="inline-flex items-center gap-3 mt-8 bg-white text-blue-700 px-7 py-3.5 rounded-full font-bold hover:bg-blue-50 transition"
            >
              Send Your Resume
              <FaArrowRight />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CareerCTA;