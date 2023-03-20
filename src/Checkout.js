import React, { useContext, useEffect, useState } from 'react';
import { DataAppContext } from './DataApp';
import { useNavigate, useLocation } from 'react-router-dom';

const Checkout = () => {
  const localContext = useContext(DataAppContext);
  const {appState, setAppState} = localContext;
  const {username, loginStatus, searchFrom, searchTo} = appState;
  const navigate = useNavigate();
  const {state} = useLocation();
  const {busid, busname, costprice, seatNum} = state;
  console.log('state - ', state);

  const [id, setId] = useState('');

//fetch bus details from useNavigate
//user details from context
//create a form to take other details like name, gender, age, email, mobile, button
//button click - ticket booked
//navigate them to success page / show in the same page

  useEffect(() => {
    if(!loginStatus) {
      console.log('not logged in')
      navigate('/login');
    }
    else {
      console.log('logged in')
    }
  })

  const generateId = () => {
    setId(Math.random()*1000000000);
  }

  useEffect(() => {
    generateId();
  }, [])

  useEffect(() => {
    window.localStorage.setItem('booking', JSON.stringify({id, busid, busname, costprice, username, searchFrom, searchTo, seatNum}))
  }, [id])

  return (
    <div>
        <div class="alert alert-success" role="alert">
          <h2>Successfully Booked Ticket</h2>
          <div>Your Booking Details :-</div>
          <div>Booking Id - {id}</div>
          <div>Bus Id - {busid}</div>
          <div>Bus Name - {busname}</div>
          <div>Cost Price - {costprice}</div>
          <div>Passenger Name - {username}</div>
          <div>Source - {searchFrom}</div>
          <div>Destination - {searchTo}</div>
          <div>Seat Number - {seatNum}</div>
        </div>
    </div>
  )
}

export default Checkout
