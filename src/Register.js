import React, { useState, useEffect } from 'react'

const Register = () => {

    const initialData = {
        username: '',
        password: '',
    }

    //state object for formdata
    const [formdata, setFormdata] = useState(initialData);

    //state variable to check form submission status
    const [status, setStatus] = useState(false);

    //method to update each key of state object
    const updateData = (e) => {
        console.log(e.target.id, e.target.value);
        let tempObj = {};
        tempObj[e.target.id] = e.target.value.trim();
        setFormdata({
            ...formdata, ...tempObj
        });
    }

    //methods for form submission button
    const registerFn = () => {
            //form submiited
            setStatus(true);
            //call api for form submission - POST - Submit Data - formdata/localstorage
            let temp = JSON.parse(localStorage.getItem('users')) || [];
            localStorage.setItem('users', JSON.stringify([...temp, formdata]));
            //store the response in a state variable
            setFormdata(initialData);
    }

    useEffect(() => {
        let temp = localStorage.getItem('users');
        console.log(JSON.parse(temp));
    }, [status])


    return (
        <div>

            Username: <input type="text" id="username" onChange={updateData} value={formdata.username} />

            Password: <input type="password" id="password" onChange={updateData} value={formdata.password} /><br></br>

            <button onClick={registerFn}>Register</button>
            <br></br>
            <br></br>

            {status && <div class="alert alert-success" role="alert">
                <h2>Successfully Registered</h2>
                </div>
            }
        </div>
    )
}

export default Register
