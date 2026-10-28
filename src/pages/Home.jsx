import React from "react";
import Hero from "../components/home/Hero";
import PopularDish from "../components/home/PopularDish";

const Home = ({ onAddToCart }) => {
  return (
    <>
      <Hero />
      <PopularDish onAddToCart={onAddToCart} />
    </>
  );
};

export default Home;
