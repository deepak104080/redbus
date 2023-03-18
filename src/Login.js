import React, {useState, useEffect, useContext} from 'react';
import {DataAppContext} from './DataApp';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const initialData = {
        username: '',
        password: '',
    }

    //state object for formdata
    const [loginformdata, setFormdata] = useState(initialData);

    //state variable to check form submission status
    const [loginstatus, setStatus] = useState(false);


    const localContext = useContext(DataAppContext);
    const navigate = useNavigate();

    //method to update each key of state object
    const updateData = (e) => {
        console.log(e.target.id, e.target.value);
        let tempObj = {};
        tempObj[e.target.id] = e.target.value.trim();
        setFormdata({
            ...loginformdata, ...tempObj
        });
    }

    //methods for form submission button
    const loginFn = () => {
            //form submiited
            //setStatus(true);
            //call api for form submission - POST - Submit Data - loginformdata/localstorage
            let temp = JSON.parse(localStorage.getItem('users'));
            // localStorage.setItem('users', JSON.stringify([...temp, formdata]));


            for(let i=0 ; i<temp.length ; i++) {
                console.log(temp[i].username, loginformdata.username);
                if(temp[i].username === loginformdata.username) {
                    console.log('Inside first if - ', i)
                    if(temp[i].password === loginformdata.password) {
                        console.log('Inside 2nd if - ', i)
                        setStatus(true);
                        //set context varibale
                        let obj = {
                            ...localContext.appState,
                            loginStatus: true, //true means logged in
                            username: loginformdata.username,
                        }
                        localContext.setAppState(obj)
                        //navigate page to home
                        navigate('/home')
                    }
                }
            }





            //store the response in a state variable
            setFormdata(initialData);
    }

    useEffect(() => {
        let temp = localStorage.getItem('users');
        console.log(JSON.parse(temp));
    }, [loginstatus])

  return (
    <div>
        
        Username: <input type="text" id="username" onChange={updateData} value={loginformdata.username} /><br></br>

        Password: <input type="password" id="password" onChange={updateData} value={loginformdata.password} /><br></br><br></br>


            <button onClick={loginFn}>Login</button>
            <br></br>
            <br></br>

            {loginstatus && <div class="alert alert-success" role="alert">
                <h2>Successfully Logged In</h2>
                </div>
            }

    </div>
  )
}

export default Login
