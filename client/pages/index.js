import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import useAuth from "../stores/authUser";

export default function Home() {

  const SID = useAuth((state) => state.SID);
  const [username, setUsername] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    const payload = {
      "sessionID": SID
    };

    axios.post("http://localhost:3001/auth/getsession", payload)
      .then(data => {
        if (data.status === 401) {
          setUsername("Not logged in")
        } else {
          setUsername(data.data["userPayload"].username);
        }

      })
  }, [SID, username])

  return (
    <>
      <h1>Welcome {username}</h1>
      <button onClick={handleClick}>Logout</button>
    </>
  )
}
