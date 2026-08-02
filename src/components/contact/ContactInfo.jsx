import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaBuilding,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Registered Office */}

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl text-blue-700">

              <FaMapMarkerAlt />

            </div>

            <h3 className="text-2xl font-bold mt-6">
              Registered Office
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              400-A, 4th Floor,
              12 Ajit Singh House,
              Yusuf Sarai Commercial Complex,
              Green Park,
              New Delhi – 110016
            </p>

          </div>

          {/* Zonal Office */}

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">

            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl text-green-600">

              <FaBuilding />

            </div>

            <h3 className="text-2xl font-bold mt-6">
              Zonal Office
            </h3>

            <p className="text-gray-600 mt-4 leading-7">
              Ground Floor,
              8H/22,
              Bahadurpur Housing Colony,
              Patna – 800026
            </p>

          </div>

          {/* Email */}

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl text-blue-700">

              <FaEnvelope />

            </div>

            <h3 className="text-2xl font-bold mt-6">
              Email
            </h3>

            <p className="text-gray-600 mt-4 break-all">
              risenlaboratoriespvltd@gmail.com
            </p>

            <p className="mt-4 text-gray-500">
              CIN :
              U47721DL2026PTC467121
            </p>

          </div>

          {/* Office Hours */}

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">

            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl text-green-600">

              <FaClock />

            </div>

            <h3 className="text-2xl font-bold mt-6">
              Office Hours
            </h3>

            <p className="text-gray-600 mt-4">
              Monday - Saturday
            </p>

            <p className="font-semibold mt-2">
              09:00 AM – 06:00 PM
            </p>

            <p className="mt-4 text-red-500">
              Sunday Closed
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactInfo;