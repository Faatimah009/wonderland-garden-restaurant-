import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccess = () => {
  return (
    <Container className="text-center py-5 my-5">
      <div className="mb-4 text-success">
        <FaCheckCircle size={80} />
      </div>
      <h1 className="fw-bold mb-3">Order Placed Successfully!</h1>
      <p className="text-muted mb-4">
        Thank you for your order. Your delicious food is being prepared and will be delivered to your doorstep shortly.
      </p>
      <Button as={Link} to="/menu" variant="danger" size="lg" className="px-5">
        Order More Food
      </Button>
    </Container>
  );
};

export default OrderSuccess;