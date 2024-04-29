import "./productcard.scss";

const ProductCard = ({ SingleCardData }) => {
  return (
    <div className="card">
      <img src={SingleCardData.image} alt="" />
      <div className="product-desc">
        <p>{SingleCardData.title}</p>
        <button>
          <p>₹{SingleCardData.price}</p>
          <p>-</p>
          <p>Add To Cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
