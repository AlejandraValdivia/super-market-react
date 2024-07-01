import { useState } from "react";
import DealsGallery from "./components/DealsGallery/DealsGallery.jsx";
import IncrementButton from "./components/IncrementButton/IncrementButton.jsx";
import AddToCartBtn from "./components/AddToCartBtn/AddToCartBtn.jsx";
import Navbar from "./components/NavMenu/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

const App = () => {
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

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Supermarket Deals</h1>
      </header>
      <DealsGallery>
        <IncrementButton addOne={addOne} />
        <AddToCartBtn addOne={addOne}/>
      </DealsGallery>
      <Footer />
    </div>
  );
};

export default App;
