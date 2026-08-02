const StatCard = ({ number, suffix, title }) => {
  return (
    <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
      <h3 className="text-5xl font-bold text-blue-700">
        {number}
        {suffix}
      </h3>

      <p className="mt-4 text-gray-600">
        {title}
      </p>
    </div>
  );
};

export default StatCard;