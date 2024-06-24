import DealsGallery from "./components/DealsGallery/DealsGallery.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Supermarket Deals</h1>
      </header>
      <DealsGallery />
      <footer className="App-footer">
        <p>&copy; 2024 Alejandra Valdivia. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
