import { AllProductsData } from "../../Data/Data";
import ProductCard from "../../components/product-card/ProductCard";
import "./products.scss";

const Products = () => {
  return (
    <section className="product-page">
      <div className="all-products">
        {AllProductsData.map((SingleCardData) => (
          <ProductCard
            key={SingleCardData.id}
            SingleCardData={SingleCardData}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
