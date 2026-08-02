import ProductsHero from "../../components/products/ProductsHero";
import ProductFilter from "../../components/products/ProductFilter";
import ProductGrid from "../../components/products/ProductGrid";

const Products = () => {
  return (
    <>
      <ProductsHero />
      <ProductFilter />
      <ProductGrid />
    </>
  );
};

export default Products;