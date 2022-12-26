import React, { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/router'

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const router = useRouter()

    const href = "http://localhost:3001/login"


    const handleSubmit = async (e) => {
        e.preventDefault();

        router.push(href);

        if (password !== password2) {
            throw new Error("Passwords does not match")
        }

        const user = {
            username,
            password
        };
    
        const settings = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
          };
    
          fetch("http://localhost:3000/auth/register", settings)
            .then((data) => data.json())
            .then(userData => {
              console.log(`${userData}`);
              router.push(href);     
            })
    }
    return (
      <>
        <h1>Register</h1>
        <form>
            Username: <input type="text" id="username" name="username" onChange={e => setUsername(e.target.value)}/>
            Password: <input type="password" id="password" name="password" onChange={e => setPassword(e.target.value)} />
            Confirm password: <input type="password" id="password2" name="password2" onChange={e => setPassword2(e.target.value)}/>
            <button type="submit" onClick={handleSubmit}>Register</button>
        </form>
      </>
    )
  }