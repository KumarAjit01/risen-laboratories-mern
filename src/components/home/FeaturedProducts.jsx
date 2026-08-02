import { products } from "../../data/products";
import ProductCard from "../ui/ProductCard";

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[3px] text-green-600 font-semibold">
            Featured Products
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Our Best Products
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Discover our high-quality pharmaceutical products
            manufactured with innovation and care.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        <div className="text-center mt-16">

          <button className="bg-blue-700 hover:bg-green-600 transition text-white px-10 py-4 rounded-full font-semibold">
            Explore All Products
          </button>

        </div>

      </div>

    </section>
  );
};

export default FeaturedProducts;