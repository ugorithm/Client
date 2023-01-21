import { useEffect } from "react";
import { HeroBullets } from "../components/hero";
import App from "../components/nextheader/nextheader";
import useAuthorize from "../hooks/useAuthorize"
import useAuth from "../stores/authUser"


export default function Home() {

  return (
    <>
      <App />
      <HeroBullets />

    </>
  )
}