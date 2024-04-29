import ProductCard from "../product-card/ProductCard";
import { ProductCardData } from "../../Data/Data";
import "./ourproducts.scss";
import HeaderIcon from "../../../public/assets/header-icon.svg";
import { NavLink } from "react-router-dom";

const OurProducts = () => {
  return (
    <section className="product-section">
      <div className="sec-header">
        <img src={HeaderIcon} alt="" />
        <p>Our Products</p>
      </div>
      <div className="our-products">
        {ProductCardData.map((SingleCardData) => (
          <ProductCard
            key={SingleCardData.id}
            SingleCardData={SingleCardData}
          />
        ))}
      </div>
      <div className="view-all">
        <NavLink style={{ textDecoration: "none" }} to="/products">
          <span className="view-all">View All Products</span>
        </NavLink>
      </div>
    </section>
  );
};

export default OurProducts;
