import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';

export default function Register() {

    const router = useRouter();

    const userRef = useRef("");
    const passwordRef = useRef("");
    const conPasswordRef = useRef("");

    const handleRegistration = async (e) => {
        e.preventDefault();

        const username = userRef.current.value;
        const password = passwordRef.current.value;
        const conPassword = conPasswordRef.current.value; 

        if (password !== conPassword) {
            console.log("passwords does not match"); // we need a proper error message or error page
            return;
        }

        const userPayload = {
            "username": username,
            "password": password
        }

        try {
            const resp = await axios.post("https://Server.ugorithm.repl.co/auth/register", userPayload);
            router.push("http://localhost:3000/login");
        }catch (error){
            console.error(error); // we need a proper error message or error page according to the status code we received
        }

    }
   
    useEffect(() => {
        router.prefetch("http://localhost:3000/dashboard")
    }, [router]);

    const loginRedirect = async () => {
      router.push("http://localhost:3000/login");
    }

    return (
      <>
       <Container>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form>
            <TextInput label="Username" placeholder="you@mantine.dev" required ref={userRef} />
            <PasswordInput label="Password" placeholder="Your password" required mt="md" ref={passwordRef} />
            <PasswordInput label="Confirm Password" placeholder="retype your password" required mt="md" ref={conPasswordRef} />
            <Button fullWidth mt="xl" onClick={handleRegistration}>Register</Button>
            <Button fullWidth mt="xl" onClick={loginRedirect}>Log in</Button>
          </form>
        </Paper>
      </Container>
      </>
    )
  }
