import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const CertificateCard = ({ title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-3xl p-6 shadow-lg flex items-center gap-4 hover:shadow-2xl transition"
    >
      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
        <FaCertificate className="text-green-600 text-2xl" />
      </div>

      <h3 className="font-semibold text-lg text-slate-800">
        {title}
      </h3>
    </motion.div>
  );
};

export default CertificateCard;