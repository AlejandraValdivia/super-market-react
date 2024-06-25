import DealsGallery from "./components/DealsGallery/DealsGallery.jsx";
import Navbar from "./components/NavMenu/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Supermarket Deals</h1>
      </header>
      <DealsGallery />
      <Footer />
    </div>
  );
}

export default App;
