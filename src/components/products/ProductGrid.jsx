import ProductCard from "./ProductCard";

import { products } from "../../data/products";

const ProductGrid = () => {
  return (
    <section className="pb-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProductGrid;