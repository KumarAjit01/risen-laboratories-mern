import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    visible && (
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-blue-700 hover:bg-green-600 text-white shadow-xl"
      >
        <FaArrowUp className="mx-auto" />
      </button>
    )
  );
};

export default ScrollTop;