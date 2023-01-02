import React, { useContext, useEffect, useState } from "react";
import Link from "next/link"
import useAuthStore from "../stores/auth";

export default function Home() {

  const loggedIn = useAuthStore((state) => state.loggedIn)
  const refresh_key = "sdf"

  return (
    <>
      <h1>Welcome to home</h1>
      <h2>Your refresh key: {refresh_key}</h2>
    </>
  )
}