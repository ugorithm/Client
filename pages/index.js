import React, { useContext, useEffect, useState } from "react";
import Link from "next/link"
import { refreshKeyContext } from '../context/RefreshKeyContext'

export function LoggedIn() {
  return (
    <>
      <h1>Is logged in</h1>
      <Link href="/todo">Todo Page</Link>
      <Link href="/">Log out</Link>
    </>
  )
}

export function LoggedOut() {
  return (
    <>
      <Link href="/login">Login</Link>
    </>
  )
}

export default function Home() {

  const { refreshKey, setRefreshKey } = useContext(refreshKeyContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedOut, setLoggedOut] = useState(true);

  useEffect(() => {
    if (refreshKey) {
      setLoggedIn(true);
      window.localStorage.setItem("refresh_key", JSON.stringify(refreshKey.refresh_key))
    } else {
      setLoggedIn(false)
      window.localStorage.removeItem("refresh_key")
    }
  }, [])

  return (
    <>
      <h1>Welcome to home</h1>
      {loggedIn && <LoggedIn />}
      {loggedOut && <LoggedOut />}
    </>
  )
}