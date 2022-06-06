import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // ADD A LOGIN METHOD that does a post fetch to that endpoint

    const login = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        };
        fetch('https://reqres.in/api/posts', requestOptions);
    }
  return (
    <div>
        <form action="/users/login" method="post">
            <div>
                <input onChange={(event) => setEmail(event.target.value)} type="email" id="email" value={email} placeholder="Email" required/>
            </div>
            <div>
                <input type="password" id="password" name="password" placeholder="Password" required/>
            </div>
            <div>
                <input onClick={login} class="button-primary" type="submit" value="Come Through" />
            </div>
            <a href="/users/register">Newbie? Register here</a>
        </form>
    </div>
  );
}

export default LogIn;
