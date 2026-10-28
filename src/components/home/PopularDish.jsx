import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import foods from "../../data/food"
import FoodCard from "../FoodCard"

function PopularDish({onAddToCart}) {

  const popularFoods = foods.slice(0, 6)

  return (
     <Container fluid>
      <Row className='p-5'>
        <Col md={3}>
        <img src="/image/homebanner.png" alt="" width="100%" />
        
        </Col>
        <Col md={9}>
        <section className='title'>
          <h6>OUR SPECIALS</h6>
          <h2>Popular Dishes</h2>
          <p>Fresh Ingredient , Authentic Taste, Always</p>
        </section>
        
        <div className="food-container">

          {popularFoods.map((food) =>(
            <FoodCard food={food} key={food.id} onAddToCart={onAddToCart} />
          ))}
        </div>

        </Col>
      </Row>
    </Container>
  )
}

export default PopularDish