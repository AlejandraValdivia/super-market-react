import "./AddToCartBtn.css";


const AddToCartBtn = ({ addOne }) => {


  return (
    <div className="add-to-cart-container">
      <button onClick={addOne} className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartBtn;
