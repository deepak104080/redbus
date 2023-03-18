import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menubar = () => {
  return (
    <Row className='bg-warning'>
        <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link><Link to="/home">Home</Link></Nav.Link>
            <Nav.Link><Link to="/list">List</Link></Nav.Link>
            <Nav.Link><Link to="/checkout">Checkout</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Row>
  )
}

export default Menubar
