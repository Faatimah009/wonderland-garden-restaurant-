import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems = [], clearCart }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Lagos',
    paymentMethod: 'card'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = 1500;
  const totalAmount = subtotal > 0 ? subtotal + deliveryFee : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Clear the cart items from state / localStorage
    if (clearCart) {
      clearCart();
    }

    // Redirect to Order Success confirmation page
    navigate('/order-success');
  };

  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4">Checkout</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="g-5">
          {/* Shipping Information */}
          <Col lg={7}>
            <Card className="border-0 shadow-sm p-4">
              <h4 className="mb-3 fw-semibold">Shipping Information</h4>
              
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="fullName" 
                  placeholder="Enter your full name" 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email" 
                      placeholder="name@example.com" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                      type="tel" 
                      name="phone" 
                      placeholder="+234 800 000 0000" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Delivery Address</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  name="address" 
                  placeholder="Street address, apartment, suite, etc." 
                  value={formData.address} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>City / State</Form.Label>
                <Form.Control 
                  type="text" 
                  name="city" 
                  value={formData.city} 
                  onChange={handleChange} 
                  required 
                />
              </Form.Group>

              <h4 className="mb-3 fw-semibold">Payment Method</h4>
              <div className="d-flex flex-column gap-2 mb-3">
                <Form.Check 
                  type="radio" 
                  label="Pay with Card (Flutterwave / Paystack)" 
                  name="paymentMethod" 
                  value="card" 
                  defaultChecked 
                  onChange={handleChange}
                />
                <Form.Check 
                  type="radio" 
                  label="Cash on Delivery" 
                  name="paymentMethod" 
                  value="cash" 
                  onChange={handleChange}
                />
              </div>
            </Card>
          </Col>

          {/* Order Summary */}
          <Col lg={5}>
            <Card className="border-0 shadow-sm p-4 bg-light">
              <h4 className="mb-3 fw-semibold">Order Summary</h4>
              
              <div className="d-flex flex-column gap-3 mb-4" style={{ maxHeight: '250px', overflowY: 'auto' }}>
                {cartItems.length === 0 ? (
                  <p className="text-muted">Your cart is empty. <Link to="/menu">Go to Menu</Link></p>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom pb-2">
                      <div>
                        <h6 className="mb-0 fw-semibold">{item.name}</h6>
                        <small className="text-muted">Qty: {item.quantity}</small>
                      </div>
                      <span className="fw-semibold">₦{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))
                )}
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span className="fw-semibold">₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-3 border-bottom pb-3">
                <span>Delivery Fee</span>
                <span className="fw-semibold">₦{deliveryFee.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-4 fs-5 fw-bold text-dark">
                <span>Total</span>
                <span className="text-danger">₦{totalAmount.toLocaleString()}</span>
              </div>

              <Button 
                type="submit" 
                variant="danger" 
                size="lg" 
                className="w-100 py-3 fw-bold"
                disabled={cartItems.length === 0}
              >
                Place Order Now
              </Button>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Checkout;