import React from "react";
import FoodCart from "../components/FoodCart";

const Menu = () => {
  return (
    <div>
      <section className=" menu-page">
        <h1>Our Menu</h1>
        <div className="food-grid">
          {foods.map((food) => (
            <FoodCart key={food.id} food={food} />
          ))}
        </div>
      </section>.l
    </div>
  );
};

export default Menu;
