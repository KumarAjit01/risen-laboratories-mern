import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaFlask,
  FaHeartbeat,
  FaShieldAlt,
} from "react-icons/fa";

import aboutImg from "../../assets/images/about.png";

const features = [
  "WHO-GMP Quality Standards",
  "Experienced Healthcare Team",
  "Modern Manufacturing",
  "Trusted Distribution Network",
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute -top-6 -left-6 w-full h-full rounded-[30px] bg-blue-100"></div>

            <img
              src={aboutImg}
              alt="About RISEN"
              className="relative rounded-[30px] shadow-2xl w-full"
            />

          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <span className="text-green-600 font-semibold uppercase tracking-[3px]">
              About Company
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 leading-tight">
              Delivering Trusted
              <span className="text-blue-700"> Pharmaceutical </span>
              Solutions
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              RISEN Laboratories Pvt. Ltd. is dedicated to delivering
              innovative, affordable and high-quality pharmaceutical
              products. Our focus is on improving healthcare through
              advanced research, ethical practices and uncompromising
              quality.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3 bg-slate-50 rounded-xl p-4"
                >

                  <FaCheckCircle className="text-green-600 text-xl" />

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* Small Cards */}

            <div className="grid grid-cols-3 gap-5 mt-10">

              <div className="bg-blue-50 rounded-2xl p-5 text-center">

                <FaFlask className="mx-auto text-3xl text-blue-700 mb-3" />

                <h3 className="font-bold">Research</h3>

              </div>

              <div className="bg-green-50 rounded-2xl p-5 text-center">

                <FaHeartbeat className="mx-auto text-3xl text-green-600 mb-3" />

                <h3 className="font-bold">Healthcare</h3>

              </div>

              <div className="bg-blue-50 rounded-2xl p-5 text-center">

                <FaShieldAlt className="mx-auto text-3xl text-blue-700 mb-3" />

                <h3 className="font-bold">Quality</h3>

              </div>

            </div>

            {/* Button */}

            <button className="mt-10 bg-blue-700 hover:bg-green-600 transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold shadow-lg">
              Read More
            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;