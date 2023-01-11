import axios from "axios";
import { useEffect, useState, useRef } from "react";
import useAuth from "../stores/authUser";
import { useRouter } from "next/router";
import useAuthorize from "../hooks/useAuthorize";

export default function Dashboard() {

  const router = useRouter();

  const logout = useAuth((state) => state.logOut);

  const handleLogOut = (e) => {
    e.preventDefault();
    logout();
    router.push("http://localhost:3000/login")
  }
  const { authenticated, loading, error } = useAuthorize();

  if (error) console.log("There's an error");

  // useEffect(() => {
  //     if (loading === false) {
  //       if (authenticated === false) {
  //         router.push("http://localhost:3000/login");
  //         console.log(authenticated, loading);
  //       } else if (authenticated === true) {
  //         console.log("Loaded and authed")
  //       }
  //     }
  // }, [loading, authenticated, router])

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={handleLogOut}>Logout</button>
    </>
  )
}