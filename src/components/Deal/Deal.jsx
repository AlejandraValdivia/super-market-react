import "./Deal.css";
import { useState } from "react";
import BasketIcon from "../Basket/BasketIcon";
import IncrementButton from "../IncrementButton/IncrementButton";
import DecrementButton from "../DecrementButton/DecrementButton";
import ResetQtyButton from "../ResetQtyButton/ResetQtyButton";
import BuyButton from "../AddToCartBtn/AddToCartBtn";

const Deal = ({ image, name, icon, price }) => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  const removeOne = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  // Implement the buy button as a component
  return (
    <>
      <div className="deal">
        <img src={image} alt={name} className="deal-image" />
        <h3 className="deal-name">{name}</h3>
        <div className="deal-icon-div">
          <BasketIcon />
        </div>
        <p className="deal-count">{count}</p>
        <IncrementButton addOne={addOne} />
        <DecrementButton removeOne={removeOne} />
        <ResetQtyButton reset={reset} />
        <BuyButton addOne={addOne} removeOne={removeOne} reset={reset} />
        <p>{icon}</p>
        <p className="deal-price">{price}</p>
      </div>
    </>
  );
};

export default Deal;
