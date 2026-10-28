import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SearchBar = () => {
  return (
    <div className="bg-dark text-white py-4 shadow">
      <Container>
        <Row className="align-items-center g-3">
          {/* Search Input & Price Range */}
          <Col lg={4} md={12} className="d-flex flex-column gap-2">
            <input
              type="search"
              placeholder="Search our menu..."
              className="form-control"
            />
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between small text-muted">
                <label className="text-white">Price Range</label>
                <span className="text-warning">₦500 - ₦25,000+</span>
              </div>
              <input 
                className="form-range" 
                type="range" 
                min="500" 
                max="25000" 
                defaultValue="500" 
              />
            </div>
          </Col>

          {/* Filter Dropdowns */}
          <Col lg={8} md={12}>
            <Row className="g-2">
              <Col sm={3} xs={6}>
                <label className="form-label small mb-1">Dish Type</label>
                <select name="dish_type" id="dish_type" className="form-select form-select-sm">
                  <option value="">All Dishes</option>
                  <option value="Jollof">Jollof</option>
                  <option value="Fried">Fried</option>
                  <option value="Ofada">Ofada</option>
                </select>
              </Col>
              <Col sm={3} xs={6}>
                <label className="form-label small mb-1">Protein Type</label>
                <select name="Protein_type" id="Protein_type" className="form-select form-select-sm">
                  <option value="">All Proteins</option>
                  <option value="Beef">Beef</option>
                  <option value="Chicken">Chicken</option>
                  <option value="Ram">Ram</option>
                  <option value="Goat">Goat</option>
                </select>
              </Col>
              <Col sm={3} xs={6}>
                <label className="form-label small mb-1">Spice Level</label>
                <select name="spice_level" id="spice_level" className="form-select form-select-sm">
                  <option value="">Any</option>
                  <option value="Mild">Mild</option>
                  <option value="Medium">Medium</option>
                </select>
              </Col>
              <Col sm={3} xs={6}>
                <label className="form-label small mb-1">Dietary</label>
                <select name="dietary-restrictions" id="dietary-restrictions" className="form-select form-select-sm">
                  <option value="">None</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Gluten-Free">Gluten-Free</option>
                </select>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchBar;