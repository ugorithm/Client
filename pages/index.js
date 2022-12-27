import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useContext, useEffect } from 'react'
import { refreshKeyContext } from '../UserContext'

export default function Home() {
  const { refreshKey, setRefreshKey } = useContext(refreshKeyContext);

  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
    },
    body: body,
    mode: "no-cors"
  };

  const handleSubmit = async () => {
    fetch("http://localhost:3000/auth/accesskey", settings)
      .then((data) => data.json())
      .then(access_key => console.log(access_key))
  }
  
  return (
    <>
      <h1>Home</h1>
      <h2>{refreshKey}</h2>
      <button onClick={handleSubmit}>Generate access key</button>
    </>
  )
}