import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CategoryGrid from "./components/CategoryGrid";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <header className="app-header">
            <div className="logo">
              <span className="logo-main">Flipkart</span>
              <span className="logo-plus">Plus</span>
              <span className="logo-star">★</span>
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Search for products, brands and more" />
              <button className="search-button">🔍</button>
            </div>
            <nav className="nav-right">
              <div className="nav-item user-name">Ansh ▼</div>
              <div className="nav-item">Become a Seller</div>
              <div className="nav-item">More ▼</div>
              <Link to="/cart" className="cart-icon" title="View Cart">🛒 Cart</Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<><CategoryGrid /><ProductList /></>} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<div>Login Page (to be implemented)</div>} />
            <Route path="/signup" element={<div>Sign Up Page (to be implemented)</div>} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
