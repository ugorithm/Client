import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import useAuth from "../stores/authUser";
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

  const [username, setUsername] = useState("");
  const logout = useAuth((state) => state.logOut);
  const SID = useAuth((state) => state.SID);

  const [isFetched, setIsFetched] = useState(false);

  const handleLogOut = (e) => {
    e.preventDefault();
    logout();
  }

  const payload = {
    "sessionID": SID
  };

  async function fetchData() {
    const resp = await axios.post("https://Server.ugorithm.repl.co/auth/getsession", payload)

    if (!resp.data["userPayload"]) {
      router.push("https://client-1.ugorithm.repl.co/login")
    } else {
      setUsername(resp.data["userPayload"]?.username);
    }
  }

  useEffect(() => {
    if (isFetched === false) {
      fetchData().then(() => setIsFetched(true))
    } else {
      return;
    }
  }, [SID, username, logout, router, fetchData])

  return (
    <>
      <h1>Welcome {username}</h1>
      <button onClick={handleLogOut}>Logout</button>
    </>
  )
}
