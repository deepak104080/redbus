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
  const [seats, setSeats] = useState(Array(32).fill(false));

  // useEffect(() => {
  //   if(!loginStatus) {
  //     console.log('not logged in')
  //     navigate('/login');
  //   }
  //   else {
  //     console.log('logged in')
  //   }
  // })

  const callApi = async() => {
    //create dynamic url with from and to cities
    const response = await fetch('https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source='+searchFrom+'&destination='+searchTo)
    // const response = await fetch('https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=hyderabad&destination=vijayawada')
    const data = await response.json();
    console.log('List of Buses - ', data);
    console.log('data', data);
    //add uniqueid and openStatus in array object
    const ret = data.map((item) => {
      item.openStatus = false;
      return item
    })
    console.log('ret', ret);
    setBuses(ret);
  }

  useEffect(() => {
    callApi();
  }, [searchFrom, searchTo])

  const openPanel = (id) => {
    //set openStatus true for that specific bus - on basis of id
    let ret = buses.map((item) => {
      if(item.id === id) {
        item.openStatus = !item.openStatus;
      }
      return item
    })
    setBuses(ret);
  }
  const selectSeat = (index) => {
    //setSeats
    
    let arr = Array(32).fill(false);
    arr[index] = true;
    setSeats(arr);
  }

  const bookFn = (id, name, price) =>{
    //useNavigate to checkout with some data - reference - nova_react
    //data - bus details
    let seat = seats.indexOf(true) + 1;
    navigate('/checkout', {state : {busid: id, busname: name, costprice: price, seatNum: seat }})
  }
  
  return (
    <div>
        <Search/>
        <br></br>
        <br></br>
        <h2>Filters</h2>
        <br></br>
        <br></br>

        <ListGroup variant="flush" className='bg-danger px-4 py-4'>
        {/* <ListGroup.Item>
              <Row>
                <Col>Bus Name</Col>
                <Col>Arrival Time</Col>
                <Col>Departure Time</Col>
                <Col>Price</Col>
              </Row>
            </ListGroup.Item> */}
        {
          
          buses && buses.map((item, index) => (
            <>
            <ListGroup.Item onClick={() => openPanel(item.id)} className="my-2">
              <Row>
                <Col>{item.busName}</Col>
                <Col>{item.arrivalTime}</Col>
                <Col>{item.departureTime}</Col>
                <Col>{item.ticketPrice}</Col>
              </Row>
            </ListGroup.Item>
            {item.openStatus && <>
              <div className='bg-danger'>
                <div className='bus-panel bg-light'>
                   {
                      seats.map((item, index) => (
                        <div className={item ? 'bus-seat selected' : 'bus-seat'} onClick={() => selectSeat(index)}>&nbsp;</div>
                      ))
                    }
                    <div className='bus-engine'>&nbsp;</div>
                  </div>
                  
                    <br></br>
                    <button onClick={() => bookFn(item.id, item.busName, item.ticketPrice )}>Book Ticket</button>
              </div>
            </>}
            </>
          ))
        }

         
        </ListGroup>
    </div>
  )
}

export default List
