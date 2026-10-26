import React from "react";

function FoodCard({ food, onAddToCart }) {
  return (
    <div className="card food-card h-100 border-0 shadow-sm">
      <div className="food-image-wrapper">
        <img
          src={food.image}
          className="card-img-top food-image"
          alt={food.name}
        />
      </div>

      <div className="card-body d-flex flex-column text-center p-3 p-lg-2">
        <h3 className="card-title food-title mb-2">{food.name}</h3>

        <p className="card-text food-description">{food.description}</p>

        <div className="d-flex align-items-center justify-content-between gap-2 ">
          <span className="food-price">
            ₦{Number(food.price).toLocaleString("en-NG")}
          </span>

          <button
            type="button"
            className="btn btn-danger food-cart-btn"
            onClick={() => onAddToCart?.(food)}
          >
            <i className="bi bi-cart-plus me-1"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
