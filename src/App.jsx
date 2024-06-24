import DealsGallery from "./components/DealsGallery/DealsGallery.jsx";
import Navbar from "./components/NavMenu/Navbar/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Supermarket Deals</h1>
      </header>
      <DealsGallery />
      <footer className="App-footer">
        <a href="https://github.com/AlejandraValdivia"><p>&copy; 2024 Alejandra Valdivia. All rights reserved.</p></a>
      </footer>
    </div>
  );
}

export default App;
