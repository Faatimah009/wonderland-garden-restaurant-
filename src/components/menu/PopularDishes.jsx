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

const PopularDishes = ({ onAddToCart }) => {
  return (
    <Container className="py-5">
      <Row className="g-4">
        {/* Sidebar / Categories Filter */}
        <Col lg={3} md={4}>
          <div className="bg-white p-4 rounded shadow-sm border sticky-top" style={{ top: "90px" }}>
            <h5 className="fw-bold mb-3 pb-2 border-bottom">Categories</h5>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-4">
              <li>
                <a href="#popular" className="text-decoration-none text-dark d-flex align-items-center gap-2 fw-semibold">
                  <FaRegStar className="text-danger" /> Popular
                </a>
              </li>
              <li>
                <a href="#jollof" className="text-decoration-none text-dark d-flex align-items-center gap-2 fw-semibold">
                  <FaBowlFood className="text-danger" /> Jollof Dishes
                </a>
              </li>
              <li>
                <a href="#proteins" className="text-decoration-none text-dark d-flex align-items-center gap-2 fw-semibold">
                  <GiChickenOven className="text-danger" /> Proteins
                </a>
              </li>
              <li>
                <a href="#sides" className="text-decoration-none text-dark d-flex align-items-center gap-2 fw-semibold">
                  <GiFrenchFries className="text-danger" /> Sides
                </a>
              </li>
              <li>
                <a href="#drinks" className="text-decoration-none text-dark d-flex align-items-center gap-2 fw-semibold">
                  <RiDrinks2Fill className="text-danger" /> Drinks
                </a>
              </li>
            </ul>

            <h6 className="fw-bold mb-2">Quick Search</h6>
            <input 
              type="search" 
              placeholder="Search category..." 
              className="form-control form-control-sm" 
            />
          </div>
        </Col>

        {/* Main Food Grid Content */}
        <Col lg={9} md={8}>
          <div className="row g-4">
            {foods.map((food) => (
              <Col lg={4} sm={6} key={food.id}>
                <FoodCard food={food} onAddToCart={onAddToCart} />
              </Col>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PopularDishes;