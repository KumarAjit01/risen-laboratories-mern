import ProductCard from "../ui/ProductCard";

const ProductGrid = ({
  products,
  activeCategory,
}) => {
  return (
    <section className="bg-slate-50 py-12 lg:py-16">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <p className="text-sm text-gray-500">
              Product Category
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              {activeCategory}
            </h2>

          </div>

          <div className="px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">

            <span className="font-semibold text-blue-700">
              {products.length}
            </span>

            <span className="text-gray-500 ml-1">
              {products.length === 1
                ? "Product"
                : "Products"}
            </span>

          </div>

        </div>

        {/* Products */}

        {products.length > 0 ? (

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        ) : (

          <div className="bg-white rounded-3xl border border-slate-200 text-center py-20">

            <div className="text-5xl mb-5">
              💊
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              No Products Found
            </h3>

            <p className="text-gray-500 mt-2">
              No products are currently available in the{" "}
              {activeCategory} category.
            </p>

          </div>

        )}

      </div>

    </section>
  );
};

export default ProductGrid;