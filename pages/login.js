import React, { useState, useContext, useEffect } from "react";
import { useRouter } from 'next/router';
import { refreshKeyContext } from "../context/RefreshKeyContext";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const { refreshKey, setRefreshKey } = useContext(refreshKeyContext);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const user = {
        username,
        password
      };

      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      };

      fetch("http://localhost:3001/auth/login", settings)
        .then((data) => data.json())
        .then(userData => {
          
          const refreshData = {
            "refresh_key": userData["refresh_key"]
          }
          setRefreshKey(refreshData);

          router.push("http://localhost:3000")
        })
    }

    useEffect(() => {
      router.prefetch("http://localhost:3000")
    }, [])
    
    return (
      <>
        <h1>Login</h1>
        <form>
          Username: <input type="text" id="username" name="username" onChange={e => setUsername(e.target.value)} />
          Password: <input type="text" id="password" name="password" onChange={e => setPassword(e.target.value)} />
          <button type="submit" onClick={handleSubmit}>Log in</button>
        </form>
      </>
    )
} 
