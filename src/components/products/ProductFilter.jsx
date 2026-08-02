const ProductFilter = () => {
  return (
    <section className="py-10 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-wrap gap-4 justify-center">

          <button className="bg-blue-700 text-white px-6 py-3 rounded-full">
            All
          </button>

          <button className="border px-6 py-3 rounded-full hover:bg-blue-700 hover:text-white transition">
            Tablets
          </button>

          <button className="border px-6 py-3 rounded-full hover:bg-blue-700 hover:text-white transition">
            Capsules
          </button>

          <button className="border px-6 py-3 rounded-full hover:bg-blue-700 hover:text-white transition">
            Syrups
          </button>

          <button className="border px-6 py-3 rounded-full hover:bg-blue-700 hover:text-white transition">
            Injection
          </button>

        </div>

      </div>

    </section>
  );
};

export default ProductFilter;