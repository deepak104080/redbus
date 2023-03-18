import React, { useContext, useEffect } from 'react';
import { DataAppContext } from './DataApp';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const localContext = useContext(DataAppContext);
  const {appState, setAppState} = localContext;
  const {username, loginStatus} = appState;
  const navigate = useNavigate();

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

  return (
    <div>
        <h2>Checkout</h2>
    </div>
  )
}

export default Checkout
