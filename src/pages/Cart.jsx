import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus, FaArrowLeft, FaShoppingBag } from "react-icons/fa";
import "../cart.css"


const Cart = ({
  cartItems = [],
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  const deliveryFee = cartItems.length > 0 ? 1500 : 0;
  const total = subtotal + deliveryFee;

  return (
    <section className="cart-section py-5">
      <Container>

        {/* Page Heading */}
        <div className="cart-heading mb-4">
          <h1>Your Shopping Cart</h1>
          <p>Review your delicious selections before checkout.</p>
        </div>

        {cartItems.length === 0 ? (

          /* Empty Cart */
          <Card className="cart-empty border-0 shadow-sm">
            <Card.Body className="text-center py-5">

              <div className="empty-cart-icon">
                <FaShoppingBag />
              </div>

              <h3>Your cart is empty</h3>

              <p>
                You haven't added any delicious meals yet.
                Explore our menu and find something you love.
              </p>

              <Button
                as={Link}
                to="/menu"
                className="cart-primary-btn mt-3"
              >
                Browse Menu
              </Button>

            </Card.Body>
          </Card>

        ) : (

          <Row className="g-4">

            {/* Cart Items */}
            <Col lg={8}>

              <Card className="cart-items-card border-0 shadow-sm">
                <Card.Body className="p-3 p-md-4">

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="mb-0">Cart Items</h4>

                    <span className="cart-item-count">
                      {cartItems.reduce(
                        (count, item) => count + item.quantity,
                        0
                      )} items
                    </span>
                  </div>

                  {cartItems.map((item) => (

                    <div className="cart-item" key={item.id}>

                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                      />

                      <div className="cart-item-details">

                        <h5>{item.name}</h5>

                        <p>{item.description}</p>

                        <strong>
                          ₦{Number(item.price).toLocaleString("en-NG")}
                        </strong>

                      </div>

                      <div className="cart-item-actions">

                        <div className="cart-quantity">

                          <button
                            type="button"
                            aria-label={`Decrease ${item.name} quantity`}
                            onClick={() => onDecrease?.(item.id)}
                          >
                            <FaMinus />
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            type="button"
                            aria-label={`Increase ${item.name} quantity`}
                            onClick={() => onIncrease?.(item.id)}
                          >
                            <FaPlus />
                          </button>

                        </div>

                        <strong className="cart-item-total">
                          ₦{(
                            Number(item.price) * item.quantity
                          ).toLocaleString("en-NG")}
                        </strong>

                        <button
                          type="button"
                          className="cart-remove-btn"
                          aria-label={`Remove ${item.name} from cart`}
                          onClick={() => onRemove?.(item.id)}
                        >
                          <FaTrash /> Remove
                        </button>

                      </div>

                    </div>

                  ))}

                  <div className="mt-4">
                    <Button
                      as={Link}
                      to="/menu"
                      variant="outline-secondary"
                      className="continue-shopping-btn"
                    >
                      <FaArrowLeft className="me-2" />
                      Continue Shopping
                    </Button>
                  </div>

                </Card.Body>
              </Card>

            </Col>

            {/* Order Summary */}
            <Col lg={4}>

              <Card className="cart-summary-card border-0 shadow-sm">
                <Card.Body className="p-4">

                  <h4 className="mb-4">Order Summary</h4>

                  <div className="summary-row">
                    <span>Subtotal</span>
                    <strong>
                      ₦{subtotal.toLocaleString("en-NG")}
                    </strong>
                  </div>

                  <div className="summary-row">
                    <span>Delivery Fee</span>
                    <strong>
                      ₦{deliveryFee.toLocaleString("en-NG")}
                    </strong>
                  </div>

                  <hr />

                  <div className="summary-total">
                    <span>Total</span>
                    <strong>
                      ₦{total.toLocaleString("en-NG")}
                    </strong>
                  </div>

                  <Button
                    as={Link}
                    to="/checkout"
                    className="cart-checkout-btn w-100 mt-4"
                  >
                    Proceed to Checkout
                  </Button>

                  <p className="cart-secure-note text-center mt-3 mb-0">
                    Fresh meals, delivered to your doorstep.
                  </p>

                </Card.Body>
              </Card>

            </Col>

          </Row>

        )}

      </Container>
    </section>
  );
};

export default Cart;