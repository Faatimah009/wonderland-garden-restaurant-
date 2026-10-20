import React from "react";

function FoodCard({ food }) {
  if (!food) {
    return <div className="food-card error">Food data unavailable</div>;
  }

  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />

      <div className="food-content">
        <h3>{food.name}</h3>

        <p>{food.description}</p>

        <div className="food-bottom">
          {/* Using optional chaining safety check for nested 'price' properties */}
          <strong>₦{food.price?.toLocaleString() || "0"}</strong>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
