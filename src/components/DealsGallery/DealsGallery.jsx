import Deal from "../Deal/Deal";

const deals = [
  {
    image: "https://hyperlinkwebdesignanddevelopment-223616266.imgix.net/amit-lahav-rxN2MRdFJVg-unsplash.jpg",
    name: "Apples",
    price: "$1.99/lb",
  },
  {
    image: "https://sandbox-uploads.imgix.net/u/1719191430-c6087294f5e253dd6726c3ee925d2c42?w=600",
    name: "Watermelons",
    price: "$3.99/lb",
  },
  {
    image: "https://sandbox-uploads.imgix.net/u/1719190862-adb9bd695d41002f798c2da09db718b5?w=600",
    name: "Carrots",
    price: "$5.99/lb",
  },
  {
    image: "https://sandbox-uploads.imgix.net/u/1719191020-aae50137ced1a4f1357104d61fd50cc3?w=600",
    name: "Tilapia Fish",
    price: "$9.89/lb",
  },
  {
    image: "https://sandbox-uploads.imgix.net/u/1719191512-9d9536f1a8a1f25eda06821d2e226e09?w=600",
    name: "Sirloin Steak",
    price: "$12.89/lb",
  },
];

const DealsGallery = () => {
  return (
    <div className="deals-gallery">
      {deals.map((deal, index) => (
        <Deal
          key={index}
          image={deal.image}
          name={deal.name}
          price={deal.price}
          className="deal"
        />
      ))}
    </div>
  );
};

export default DealsGallery;
