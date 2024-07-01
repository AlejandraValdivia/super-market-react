const ShoppingCartIcon = ({count}) => {
    return (
        <div className="shopping-cart-icon">
            <a href="#"><box-icon name="cart" type="solid" color="#ffffff">{count}</box-icon></a>
        </div>
    );
};

export default ShoppingCartIcon;