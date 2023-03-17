import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Home from './Home';
import List from './List';
import Register from './Register';
import Login from './Login';

import Header from './template/Header';
import Navbar from './template/Navbar';
import Footer from './template/Footer';
import LeftSidebar from './template/LeftSidebar';
import RightSidebar from './template/RightSidebar';

function App() {
  return (

    <BrowserRouter>
          
            <Container>

              <Header/>
              <Navbar/>

              <Row>
                <Col xs={3} className='bg-primary'>
                    <LeftSidebar/>
                </Col>

                <Col xs={6}>
                  <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/list" element={<List/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                  </Routes>
                </Col>

                <Col xs={3} className='bg-primary'>
                  <RightSidebar/>
                </Col>

              </Row>

              <Footer/>

            </Container>
    </BrowserRouter>
  );
}

export default App;




// Register - form, localStorage

// Login - form, localStorage, set context var (Authentication)


// Rest pages - context check (Authorization)
