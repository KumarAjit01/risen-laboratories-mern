import { useState } from "react";
import { products } from "../../data/products";
import ProductCard from "../ui/ProductCard";

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Tablets",
    "Capsules",
    "Syrups",
    "Nutraceuticals",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <section className="py-20 lg:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-green-600 uppercase tracking-[3px] text-sm font-semibold">
            Our Products
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Explore Our Product Portfolio
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-8">
            Explore our pharmaceutical product portfolio
            across different product categories.
          </p>

        </div>

        {/* Category Buttons */}

        <div className="mt-12 flex justify-center">

          <div className="flex gap-3 overflow-x-auto max-w-full pb-3">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                onClick={() => {
                  console.log("Clicked:", category);
                  setActiveCategory(category);
                }}
                className={`px-6 py-3 rounded-full whitespace-nowrap font-semibold text-sm border transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-700 text-white border-blue-700 shadow-lg"
                    : "bg-white text-slate-600 border-slate-200 hover:border-blue-500 hover:text-blue-700"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

        {/* Current Category */}

        <div className="flex justify-between items-center mt-8 mb-6">

          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-blue-700">
              {activeCategory}
            </span>
          </p>

          <p className="text-sm text-gray-500">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "Product"
              : "Products"}
          </p>

        </div>

        {/* Products */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

        {/* No Products */}

        {filteredProducts.length === 0 && (

          <div className="text-center py-16">

            <h3 className="text-xl font-semibold text-slate-800">
              No Products Available
            </h3>

            <p className="text-gray-500 mt-2">
              Products in this category will be added soon.
            </p>

          </div>

        )}

        {/* Bottom Button */}

        <div className="text-center mt-14">

          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className="px-8 py-3.5 rounded-full bg-slate-900 hover:bg-blue-700 text-white font-semibold transition-all duration-300 shadow-lg"
          >
            View All Products
          </button>

        </div>

      </div>

    </section>
  );
};

export default FeaturedProducts;