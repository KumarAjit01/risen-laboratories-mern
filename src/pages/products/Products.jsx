import { useState } from "react";

import ProductsHero from "../../components/products/ProductsHero";
import ProductFilter from "../../components/products/ProductFilter";
import ProductGrid from "../../components/products/ProductGrid";

import { products } from "../../data/products";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <>
      <ProductsHero />

      <ProductFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <ProductGrid
        products={filteredProducts}
        activeCategory={activeCategory}
      />
    </>
  );
};

export default Products;