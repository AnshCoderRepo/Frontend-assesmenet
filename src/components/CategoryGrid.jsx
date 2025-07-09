import React from "react";
import "./CategoryGrid.css";

const categories = [
  {
    title: "Ethnic Wear",
    discount: "50-80% OFF",
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2023/3/23/1a3a7a3a-0a3a-4a3a-9a3a-1a3a7a3a7a3a1679567891234-ethnic-wear.jpg",
  },
  {
    title: "WFH Casual Wear",
    discount: "40-80% OFF",
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2023/3/23/2b4b7b4b-1b4b-5b4b-0b4b-2b4b7b4b7b4b1679567891235-casual-wear.jpg",
  },
  {
    title: "Activewear",
    discount: "30-70% OFF",
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2023/3/23/3c5c8c5c-2c5c-6c5c-1c5c-3c5c8c5c8c5c1679567891236-activewear.jpg",
  },
  {
    title: "Western Wear",
    discount: "40-80% OFF",
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2023/3/23/4d6d9d6d-3d6d-7d6d-2d6d-4d6d9d6d9d6d1679567891237-western-wear.jpg",
  },
  {
    title: "Sportswear",
    discount: "30-80% OFF",
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2023/3/23/5e7e0e7e-4e7e-8e7e-3e7e-5e7e0e7e0e7e1679567891238-sportswear.jpg",
  },
  {
    title: "Loungewear",
    discount: "30-60% OFF",
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2023/3/23/6f8f1f8f-5f8f-9f8f-4f8f-6f8f1f8f1f8f1679567891239-loungewear.jpg",
  },
  {
    title: "Innerwear",
    discount: "UP TO 70% OFF",
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2023/3/23/7g9g2g9g-6g9g-0g9g-5g9g-7g9g2g9g2g9g1679567891240-innerwear.jpg",
  },
  {
    title: "Watches",
    discount: "UP TO 80% OFF",
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2023/3/23/8h0h3h0h-7h0h-1h0h-6h0h-8h0h3h0h3h01679567891241-watches.jpg",
  },
];

const CategoryGrid = () => {
  return (
    <div className="category-grid">
      {categories.map((cat, index) => (
        <div key={index} className="category-card">
          <img src={cat.image} alt={cat.title} />
          <div className="discount-overlay">
            <div className="discount-title">{cat.title}</div>
            <div className="discount-text">{cat.discount}</div>
            <button className="shop-now-btn">Shop Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
