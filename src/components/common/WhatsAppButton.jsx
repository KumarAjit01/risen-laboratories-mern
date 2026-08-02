import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl flex items-center justify-center text-white text-4xl transition hover:scale-110">

        <FaWhatsapp />

      </div>
    </a>
  );
};

export default WhatsAppButton;