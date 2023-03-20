import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { DataAppContext } from '../DataApp';

const Header = () => {
  const localContext = useContext(DataAppContext);
  const {appState , setAppState} = localContext;
  const {username, loginStatus} = appState;
  const navigate = useNavigate();

  const logoutFn = () => {
    //update context variable
    setAppState({
      ...appState,
      loginStatus: false,
      username: ''
    })
    navigate('/home');
  }

  return (
    <Row className='bg-success'>
        <Col xs={1}>
        
          <img src="https://i.pinimg.com/originals/58/91/2b/58912b2e3ad6a279347eebb47751a9c1.png" className='img-fluid'/>
          {/* <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"/> */}
        </Col>
        <Col xs={9}>
          {/* Search bar */}
        </Col>
        <Col xs={2}>
          
        <Navbar variant="light">
          <Container>
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            
            <Nav className="me-auto">
              {
                loginStatus ? 
                <>
                  <Nav.Link onClick={logoutFn}>Logout</Nav.Link>
                  {loginStatus && <Nav.Link>Hi {username} !</Nav.Link>}
                </>
                : 
                <>
                  <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                  <Nav.Link><Link to="/register">Register</Link></Nav.Link>
                </>
              }
              
              

              
            </Nav>

          </Container>
        </Navbar>

        </Col>
        
    </Row>
  )
}

export default Header
