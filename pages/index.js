import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import useAuth from "../stores/authUser";
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

  const SID = useAuth((state) => state.SID);
  const [username, setUsername] = useState("");
  const logout = useAuth((state) => state.logOut);

  const handleLogOut = (e) => {
    e.preventDefault();
    logout();
  }

  useEffect(() => {
    const payload = {
      "sessionID": SID
    };

    axios.post("http://localhost:3001/auth/getsession", payload)
      .then(data => {

        if (!data.data["userPayload"]) {
          router.push("http://localhost:3000/login")
        }

        if (data.status === 401) {
          setUsername("Not logged in")
        } else {
          setUsername(data.data["userPayload"]?.username);
        }
      })
  }, [SID, username, logout, router])

  return (
    <>
      <h1>Welcome {username}</h1>
      <button onClick={handleLogOut}>Logout</button>
    </>
  )
}
