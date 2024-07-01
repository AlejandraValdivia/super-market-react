// todo: create a ShoppingCart component
import "./ShoppingCart.css";
import BasketIcon from "../Basket/BasketIcon";
import BuyButton from "../AddToCartBtn/AddToCartBtn";

export default function ShoppingCart(count) {
  return (
    <div className="shopping-cart">
      <BasketIcon />
      <BuyButton count={count} />
    </div>
  );
}
