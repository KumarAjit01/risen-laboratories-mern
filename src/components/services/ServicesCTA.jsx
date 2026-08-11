import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ServicesCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-24 bg-slate-50">

      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-700 via-blue-800 to-green-700 p-8 md:p-12 lg:p-16 text-white"
        >

          {/* Decorative */}

          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl" />

          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-green-300/10 rounded-full blur-2xl" />

          <div className="relative max-w-3xl">

            <p className="text-blue-100 uppercase tracking-[3px] text-sm font-semibold">
              Let's Grow Together
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              Looking for a Pharmaceutical Marketing Partner?
            </h2>

            <p className="text-blue-100 text-lg leading-8 mt-5">
              Connect with our team to discuss products, business
              opportunities, marketing support and partnership possibilities.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-3 bg-white text-blue-700 px-7 py-3.5 rounded-full font-bold hover:bg-blue-50 transition"
              >
                Contact Our Team
                <FaArrowRight />
              </button>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/40 text-white px-7 py-3.5 rounded-full font-bold hover:bg-white/10 transition"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp Us
              </a>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default ServicesCTA;