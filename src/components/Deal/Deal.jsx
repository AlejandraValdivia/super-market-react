import './Deal.css';
import BasketIcon from '../Basket/BasketIcon';
import BuyButton from '../BuyButton/BuyButton';

const Deal = ({ image, name, icon, price }) => {
  return (
    <div className="deal">
      <img src={image} alt={name} className="deal-image" />
      <h3 className="deal-name">{name}</h3>
      <div className="deal-icon-div">
        <BasketIcon />
      </div>
      <BuyButton />
      <p>{icon}</p><p className="deal-price">{price}</p>
    </div>
  );
};

export default Deal;
