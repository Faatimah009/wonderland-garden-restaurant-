import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FoodCard from "../FoodCard";
import { FaRegStar } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { GiChickenOven, GiFrenchFries } from "react-icons/gi";
import { RiDrinks2Fill } from "react-icons/ri";
import foods from "../../data/food";

const PopularDishes = () => {
  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <aside>
        <ul>
          <a href="#">
            <li>
              <FaRegStar /> Popular
            </li>
          </a>
          <hr />
          <a href="#">
            <li>
              <FaBowlFood /> Jollof Dishes
            </li>
          </a>
          <hr />
          <a href="#">
            <li>
              <GiChickenOven /> Proteins
            </li>
          </a>
          <hr />
          <a href="#">
            <li>
              <GiFrenchFries /> Sides
            </li>
          </a>
          <hr />
          <a href="#">
            <li>
              <RiDrinks2Fill /> Drinks
            </li>
          </a>
        </ul>
        <hr />
        <input type="search" placeholder="Search" />
      </aside>

      <main>
        <div className="menu-card">
          <div className="food-grid">
            {foods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PopularDishes;
