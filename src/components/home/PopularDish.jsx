import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import food from "../../data/food"
import Foodcard from "../FoodCart"
const PopularDish = () => {
      const popularFoods = food.slice(0,6)

  return (
     <Container fluid >
      <Row>
        <Col md={3}>banner</Col>
        <Col md={9}>
        <section>
          <h6>OUR SPECIALS</h6>
         <h2> Popular Dishes </h2>
          <p>Fresh Ingredient, Aunthetic Taste, Always,/</p>
        </section>
        <div className="food-container">
          {popularFoods.map((food) => (
            <Foodcard key={food.id} food={food}/>
          ))}
        </div>
        </Col>

      </Row>
    </Container >
  )
}

export default PopularDish
