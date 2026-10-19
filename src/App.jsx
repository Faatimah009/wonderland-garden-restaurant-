import React,{useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavbarMenu from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Service from "./pages/Service";


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(food){
    let newCart =[];
    let foodFound = false;
    for (let i = 0; i < cartItems.length; i ++){
      if (cartItems[i].id === food.id ){
        let updateFood = {
          id:cartItems[i].name,
          name : cartItems[i].name,
          price: cartItems[i].price,
          image: cartItems[i].image,
          description: cartItems[i].description,
          quantity: cartItems[i].quantity +1,
        }
        newCart.push(updateFood)
        foodFound=true
      }
      else{
        newCart.push(cartItems[i])
      }
    }
 if (foodFound === false){
  let newFood={
          id:food.id,
          name:food.name,
          price: food.price,
          image: food.image,
          description: food.description,
          quantity:  1,
  }
 }
 setCartItems(newCart)
  } 

  function increaseQuantity(id ){
    let newCart = []

    for (let i = 0 ;i < cartItems.length; i++)
      if (cartItems[i].id === id ){
        let updatedFood = {
              id:cartItems[i].name,
          name : cartItems[i].name,
          price: cartItems[i].price,
          image: cartItems[i].image,
          description: cartItems[i].description,
          quantity: cartItems[i].quantity +1,
        }
        newCart.push(updatedFood);}
        else{
          newCart.push(cartItems[i])
        }
        setCartItems(newCart)
      
  }
    function decreaseQuantity(id ){
    let newCart = []

    for (let i = 0 ;i < cartItems.length; i++)
      if (cartItems[i].id === id ){
        if (cartItems[i].quantity > 1){

        
        let updatedFood = {
              id:cartItems[i].name,
          name : cartItems[i].name,
          price: cartItems[i].price,
          image: cartItems[i].image,
          description: cartItems[i].description,
          quantity: cartItems[i].quantity -1,
        }
        newCart.push(updatedFood);}
        else{
          newCart.push(cartItems[i])
        }}
        setCartItems(newCart)
      
  }

  let cartCount = 0
  for(let i = 0; i < cartItems.length; i++){
    cartCount = cartCount + cartItems[i].quantity
  }
  return (
    <BrowserRouter>
      <NavbarMenu cartCount={cartCount}/>
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onIncrease={increaseQuantity} OnDescrease={decreaseQuantity}  onAddToCart={addToCart}/> } />
        <Route path="/service" element={<Service />} />
        <Route path="/menu" element={<Menu onAddToCart={addToCart} />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
