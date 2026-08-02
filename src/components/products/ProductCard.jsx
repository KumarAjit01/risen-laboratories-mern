const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-contain bg-slate-50 p-6"
      />

      <div className="p-6">

        <span className="text-sm text-blue-700 font-semibold">
          {product.category}
        </span>

        <h3 className="text-2xl font-bold mt-2">
          {product.name}
        </h3>

        <p className="text-gray-600 mt-3">
          {product.composition}
        </p>

        <p className="text-gray-500 mt-2">
          {product.pack}
        </p>

        <button className="mt-6 bg-blue-700 hover:bg-green-600 transition text-white px-5 py-3 rounded-full w-full">
          View Details
        </button>

      </div>

    </div>
  );
};

export default ProductCard;