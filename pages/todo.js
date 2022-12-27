import React, { useContext, useEffect, useState } from 'react'
import { refreshKeyContext } from '../context/RefreshKeyContext'

export function LoggedIn() {
  <h2>Logged into todo</h2>
}

export function LoggedOut() {
  <h2>No access to todo</h2>
}

export default function Home() {
  const { refreshKey, setRefreshKey } = useContext(refreshKeyContext);
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (window.localStorage.getItem("refresh_key")) {
      console.log("Exists")
      setLoggedIn(true);
    }
  }, [loggedIn])
  
  return (
    <>
      <h1>Todo</h1>
      {loggedIn ? <LoggedIn /> : <LoggedOut />}
    </>
  )
}