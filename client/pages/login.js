import { useEffect, useState, useRef } from "react";
import useAuth from "../stores/authUser";
import axios from "axios";
import { useRouter } from "next/router";

import { Button, ButtonProps, Group } from '@mantine/core';

export default function Login() {

    const router = useRouter();

    const userRef = useRef("");
    const passwordRef = useRef("");

    let SID = useAuth((state) => state.SID);
    const logIn = useAuth((state) => state.logIn);
    
    const handleLogin = async (e) => {
        e.preventDefault();
        const userPayload = {
            "username": userRef.current.value,
            "password": passwordRef.current.value
        }
        const resp = await axios.post("http://localhost:3001/auth/login", userPayload);
        const SIDPayload = resp.data["user"].SID;
        logIn(SIDPayload); // set SID state to retreived SID
        router.push("http://localhost:3000/");
    }

    useEffect(() => {
        router.prefetch("http://localhost:3000/")
    }, [router]);

    return (
        <>
            <form>
                <h4>Username</h4>
                <input type="text" id="username" name="username" defaultValue="Rohak" ref={userRef} />
                <h4>Password</h4>
                <input type="password" id="password" name="password" defaultValue="Rohak123" ref={passwordRef} />
                <br />
                <button onClick={handleLogin}>Login</button>
            </form>
            <Button>Mantine UI Button</Button>
        </>
    )
}