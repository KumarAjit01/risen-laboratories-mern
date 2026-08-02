import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaTag,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="uppercase tracking-[3px] text-green-600 font-semibold">
              Get In Touch
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Send Us A Message
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Have questions about our pharmaceutical products,
              franchise opportunities or business partnerships?
              Fill out the form and our team will contact you shortly.
            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Call Us
                  </h4>

                  <p className="text-gray-600">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                  <FaEnvelope />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <p className="text-gray-600">
                    risenlaboratoriespvltd@gmail.com
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Form */}

          <div className="bg-slate-50 rounded-3xl p-10 shadow-xl">

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <div className="relative">

                  <FaUser className="absolute left-4 top-5 text-gray-400" />

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-12 p-4 rounded-xl border focus:outline-none focus:border-blue-600"
                  />

                </div>

                <div className="relative">

                  <FaEnvelope className="absolute left-4 top-5 text-gray-400" />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-12 p-4 rounded-xl border focus:outline-none focus:border-blue-600"
                  />

                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="relative">

                  <FaPhoneAlt className="absolute left-4 top-5 text-gray-400" />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full pl-12 p-4 rounded-xl border focus:outline-none focus:border-blue-600"
                  />

                </div>

                <div className="relative">

                  <FaTag className="absolute left-4 top-5 text-gray-400" />

                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full pl-12 p-4 rounded-xl border focus:outline-none focus:border-blue-600"
                  />

                </div>

              </div>

              <textarea
                rows="6"
                placeholder="Write Your Message..."
                className="w-full p-4 rounded-xl border focus:outline-none focus:border-blue-600"
              ></textarea>

              <button
                className="w-full bg-blue-700 hover:bg-green-600 transition text-white py-4 rounded-xl font-semibold"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactForm;