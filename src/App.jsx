import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavbarMenu from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
