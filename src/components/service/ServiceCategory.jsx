import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ServiceCategory = () => {
  return (
    <div>
      <Container fluid>
        <Row className='row-1'>
            <Col>
            <h2>Bulk Orders</h2>
            <p>Large-scale food production for offices, groups, and family packs.</p>
            <h6>Offerings:</h6>
            <h5>Party-Size Jollof Rice (30-50 Persons)</h5>
            <h5>Suya Platter (Large)</h5>
            <h5>Family Meal Packs</h5>
            </Col>
            <Col><img src="\public\images\bulk-order.png" alt="" width="50%" height="300px"/>
    </Col>
        </Row>
        <Row className='row-2'>
            <Col><img src="\public\images\Cooperate Catering.png" alt="" /></Col>
            <Col>
            <h2>Corporate Catering</h2>
            <p>Polished service for business lunches, conference lunches, and employee meals.</p>
            <h6>Offerings:</h6>
            <h5>Customized corporate meal boxes</h5>
            <h5>Reliable scheduled office deliveries</h5>
            <h5>Professional setup support</h5>
            </Col>
        </Row>
        <Row className='row-3'>
            <Col>
            <h2>Event Catering</h2>
            <p>Elegant catering for weddings, gala food stations, and private events across Lagos.</p>
            <h6>Offerings:</h6>
            <h5>Full buffet setups</h5>
            <h5>Dedicated event support staff</h5>
            <h5>Live food stations</h5>
            </Col>
            <Col><img src="\public\images\event-catering.png" alt="" /></Col>
        </Row>
        <Row className='row-4'>
            <Col><img src="\public\images\delivery-vans.png" alt="" /></Col>
            <Col>
            <h2>Home Delivery</h2>
            <p>Quick and secure delivery of all bulk orders across Lagos.</p>
            <h6>Offering:</h6>
            <h5>Fast & reliable delivery</h5>
            <h5>Safe packaging</h5>
            <h5>Coverage across Lagos</h5>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ServiceCategory