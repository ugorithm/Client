import React, { useState, useContext, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from "axios"
import useStore from "../stores/auth";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const create = useStore((state) => state.create)
    

    const handleSubmit = async (e) => {
      e.preventDefault();
      const user = {
        username,
        password
      };

      const resp = await axios.post("http://localhost:3001/auth/login", user)

      create(resp.data["refresh_key"])

      localStorage.setItem("refresh_key", resp.data["refresh_key"])

      router.push("http://localhost:3000/") 
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
