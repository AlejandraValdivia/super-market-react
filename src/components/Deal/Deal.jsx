import './Deal.css';

const Deal = ({ image, name, price }) => {
  return (
    <div className="deal">
      <img src={image} alt={name} className="deal-image" />
      <h3 className="deal-name">{name}</h3>
      <p className="deal-price">{price}</p>
    </div>
  );
};

export default Deal;
