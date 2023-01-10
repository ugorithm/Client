import { useEffect, useState, useRef } from "react";
import useAuth from "../stores/authUser";
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

    const resp = await axios.post("https://Server.ugorithm.repl.co/auth/login", userPayload);
    const SIDPayload = resp.data["user"].SID;
    logIn(SIDPayload); // set SID state to retreived SID
    router.push("http://localhost:3000/dashboard");
  }

  useEffect(() => {
    router.prefetch("http://localhost:3000/dashboard")
  }, [router]);

  return (
    <>
      <Container>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form>
            <TextInput label="Username" placeholder="you@mantine.dev" required ref={userRef} />
            <PasswordInput label="Password" placeholder="Your password" required mt="md" ref={passwordRef} />
            <Button fullWidth mt="xl" onClick={handleLogin}>Log in</Button>
          </form>
        </Paper>
      </Container>
    </>
  )
}