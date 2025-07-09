import React, { useEffect, useState, useContext, useRef, useCallback } from "react";
import "./ProductList.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);
  const limit = 8;
  const [hasMore, setHasMore] = useState(true);
  const { addToCart, cartItems, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const observer = useRef();

  // Fetch categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch categories");
        return res.json();
      })
      .then((data) => {
        setCategories(["All", ...data]);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to load categories. Please try again.");
      });
  }, []);

  // Fetch products with pagination and category filter
  useEffect(() => {
    setProducts([]);
    setPage(1);
    setHasMore(true);
  }, [selectedCategory]);

  useEffect(() => {
    if (!hasMore) return;
    setLoading(true);
    let url = `https://fakestoreapi.com/products?limit=${limit}&page=${page}`;
    if (selectedCategory !== "All") {
      url = `https://fakestoreapi.com/products/category/${selectedCategory}?limit=${limit}&page=${page}`;
    }
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        if (data.length < limit) {
          setHasMore(false);
        }
        setProducts((prev) => [...prev, ...data]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to load products. Please try again.");
        setLoading(false);
      });
  }, [page, selectedCategory]);

  // Search filter on client side
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const lastProductElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  const getCartQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="container">
      <h2>New Products</h2>
      <div className="controls">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearchChange}
        />
        <div className="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pill ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product, index) => {
          const quantity = getCartQuantity(product.id);
          if (filteredProducts.length === index + 1) {
            return (
              <div className="product-card" key={`${product.id}-${index}`} ref={lastProductElementRef}>
                <Link to={`/product/${product.id}`} className="product-card-link">
                  <img src={product.image} alt={product.title} />
                  <div className="category">{product.category}</div>
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                </Link>
                {quantity === 0 ? (
                  <button className="btn btn-buy" onClick={() => handleAddToCart(product)}>
                    <i className="fal fa-shopping-cart cart"></i> Add to Cart
                  </button>
                ) : (
                  <div className="quantity-controls">
                    <button className="btn btn-decrease" onClick={() => decreaseQuantity(product.id)}>-</button>
                    <span className="quantity">{quantity}</span>
                    <button className="btn btn-increase" onClick={() => increaseQuantity(product.id)}>+</button>
                  </div>
                )}
              </div>
            );
          } else {
            return (
              <div className="product-card" key={`${product.id}-${index}`}>
                <Link to={`/product/${product.id}`} className="product-card-link">
                  <img src={product.image} alt={product.title} />
                  <div className="category">{product.category}</div>
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                </Link>
                {quantity === 0 ? (
                  <button className="btn btn-buy" onClick={() => handleAddToCart(product)}>
                    <i className="fal fa-shopping-cart cart"></i> Add to Cart
                  </button>
                ) : (
                  <div className="quantity-controls">
                    <button className="btn btn-decrease" onClick={() => decreaseQuantity(product.id)}>-</button>
                    <span className="quantity">{quantity}</span>
                    <button className="btn btn-increase" onClick={() => increaseQuantity(product.id)}>+</button>
                  </div>
                )}
              </div>
            );
          }
        })}
      </div>

      {loading && <p className="loading">Loading products...</p>}
    </div>
  );
};

export default ProductList;
