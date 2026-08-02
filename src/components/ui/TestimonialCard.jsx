import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({ item }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">

      <FaQuoteLeft className="text-blue-600 text-3xl mb-5" />

      <p className="text-gray-600 leading-8">
        {item.review}
      </p>

      <div className="flex mt-6 text-yellow-400 gap-1">
        {[1,2,3,4,5].map((star)=>(
          <FaStar key={star}/>
        ))}
      </div>

      <div className="flex items-center mt-8 gap-4">

        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>

          <h4 className="font-bold text-lg">
            {item.name}
          </h4>

          <p className="text-gray-500">
            {item.designation}
          </p>

        </div>

      </div>

    </div>
  );
};

export default TestimonialCard;