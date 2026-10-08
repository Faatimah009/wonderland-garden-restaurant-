import React from "react";

const FoodCart = () => {
  return <div className = "food-card">
<img src ={food.image} alt={food.name} />
<h3>{food.name}</h3>
<p>{food.description}</p>
<div className="food-bottom">
<strong> ₦{food.price.toLocaleString()}</strong>
<button className="add-cart-btn">Add to cart</button>

</div>
  </div>;
};

export default FoodCart;
