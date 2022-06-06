import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <div>
            <form action="/users/register" method="POST">
                <div>
                    <input type="text" id="name" name="name" placeholder="Name" required />
                </div>
                <div>
                    <input type="email" id="email" name="email" placeholder="Email" required />
                </div>
                <div>
                    <input type="password" id="password" name="password" placeholder="Password" required />
                </div>
                <div>
                    <input type="password" id="password2" name="password2" placeholder="Confirm password" required />
                </div>
                <div>
                    <input type="submit" value="Register" />
                </div>
                <a href="/users/login">Been here before? Login here</a>
            </form>
        </div>
    );
}

export default SignUp;
