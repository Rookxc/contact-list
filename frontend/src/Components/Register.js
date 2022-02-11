import {useState} from 'react';

import Button from './Button'

function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState("");

    async function Register(e){
        e.preventDefault();
        const res = await fetch('http://localhost:3001/users', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
            })
        });

        const data = await res.json();
        console.log("dataa: " + data);
        setUsername("");
        setPassword("");
        setEmail("");

        window.location.href = "/login";
    }


    return(
        <div style={{width: "400px", margin: "30px", position: 'absolute', left: '50%', top: '40%', transform: 'translate(-50%, -50%)'}}>
        <form className="form-group" onSubmit={Register}>
            <h2 style={{marginBottom: "30px"}}> Register </h2>
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
                style={{marginBottom: "15px"}}
                type="text"
                className="form-control"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                setEmail(e.target.value);
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
            <Button text="Sign in" />
        </form>
    </div>
    )
}

export default Register;