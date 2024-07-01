import "./Navbar.css";
import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon";
const Navbar = ({count}) => {
    return (
      <nav id="top-navbar">
        <a href="/">Home</a>
        <a href="/about">Who We Are</a>
        <a href="/shop">Shop</a>
        <a href="/contact">Contact</a>
        <ShoppingCartIcon count={count} className="shopping-cart-icon"/>
      </nav>
    );
  };

  export default Navbar;