import React, { useContext, useEffect, useState } from 'react';
import Search from './Search';
import { DataAppContext } from './DataApp';
import { useNavigate } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const List = () => {
  const localContext = useContext(DataAppContext);
  const {appState, setAppState} = localContext;
  const {username, loginStatus, searchFrom, searchTo, searchDate} = appState;
  const navigate = useNavigate();

  const [buses, setBuses] = useState([]);
  const [seats, setSeats] = useState([false, true, false, false]);

  useEffect(() => {
    if(!loginStatus) {
      console.log('not logged in')
      navigate('/login');
    }
    else {
      console.log('logged in')
    }
  })

  const callApi = async() => {
    //create dynamic url with from and to cities
    // const response = await fetch('https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source='+searchFrom+'&destination='+searchTo)
    const response = await fetch('https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=hyderabad&destination=vijayawada')
    const data = await response.json();
    console.log('List of Buses - ', data);
    //add uniqueid and openStatus in array object
    setBuses(data);
  }

  useEffect(() => {
    callApi();
  }, [])

  const openPanel = () => {
    //set openStatus true for that specific bus - on basis of id
  }
  const selectSeat = (index) => {
    //setSeats
  }

  const bookFn = () =>{
    //useNavigate to checkout with some data - reference - nova_react
    //data - bus details
  }
  
  return (
    <div>
        <Search/>
        <br></br>
        <br></br>
        <h2>Filters</h2>
        <br></br>
        <br></br>

        <ListGroup variant="flush">
        <ListGroup.Item>
              <Row>
                <Col>Bus Name</Col>
                <Col>Arrival Time</Col>
                <Col>Departure Time</Col>
                <Col>Price</Col>
              </Row>
            </ListGroup.Item>
        {
          
          buses && buses.map((item, index) => (
            <>
            <ListGroup.Item onClick={openPanel}>
              <Row>
                <Col>{item.busName}</Col>
                <Col>{item.arrivalTime}</Col>
                <Col>{item.departureTime}</Col>
                <Col>{item.ticketPrice}</Col>
              </Row>
            </ListGroup.Item>
            {/* {openStatus && <>panel for bus seat selection</>} */}
            
            <button onClick={bookFn}>Book Ticket</button>
            </>
          ))
        }

          {/* {
              seats.map((item, index) => (
                <div className={item ? 'bus-seat selected' : 'bus-seat'} onClick={() => selectSeat(index)}>&nbsp;</div>
              ))
            } */}
        </ListGroup>
    </div>
  )
}

export default List
