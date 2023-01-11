import axios from "axios";
import { useEffect, useState, useRef } from "react";
import useAuth from "../stores/authUser";
import { useRouter } from "next/router";

export default function Dashboard() {

  const router = useRouter();

  const [username, setUsername] = useState("");
  const logout = useAuth((state) => state.logOut);
  const SID = useAuth((state) => state.SID);

  const isFetched = useRef(false);

  const handleLogOut = (e) => {
    e.preventDefault();
    logout();
    router.push("https://client-iota-orpin.vercel.app/login")
  }


  useEffect(() => {
    const payload = {
      "sessionID": SID
    };

    if (isFetched.current) return;
    isFetched.current = true;

    async function fetchData() {
      const resp = await axios.post("https://Server.ugorithm.repl.co/auth/getsession", payload)
  
      if (resp.data["authenticated"] === false) {
        router.push("https://client-iota-orpin.vercel.app/login");
      } else {
        setUsername(resp.data.userPayload["username"])
      }
    }
    fetchData();
  }, [logout, router, SID]);

  return (
    <>
      <h1>Welcome {username}</h1>
      <button onClick={handleLogOut}>Logout</button>
    </>
  )
}