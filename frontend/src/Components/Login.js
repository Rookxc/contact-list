import {useState} from 'react';

import Button from './Button'

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    var success = true;


    async function Login(e){
        e.preventDefault();
        const res = await fetch('http://localhost:3001/users/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        });

        var status = await res.status;
        var data = null;

        if(status === 201){
            data = await res.json();
        } 
        else{
            success = false;
        }

        if(success){
            setUsername(data.username);
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("userID", data._id);
            window.location.href = "/";
        }
        else{
            localStorage.setItem("loggedIn", false);
            localStorage.setItem("userID", "");
            alert("Wrong username or password!");
        }

        //const data = await res.json();
        setUsername("");
        setPassword("");  
    }


    return(
        <div style={{width: "400px", margin: "30px", position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%, -50%)'}}>
            <form className="form-group " onSubmit={Login}>
                <h2 style={{marginBottom: "30px"}}> Login </h2>
                <input
                    style={{marginBottom: "15px"}}
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => {
                    setUsername(e.target.value);
                    }}
                />
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                    setPassword(e.target.value);
                    }}
                />
                <Button text="Login"/>    
            </form>
        </div> 
    )
}

export default Login;