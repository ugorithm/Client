import { useEffect, useState } from "react";
import useAuthorize from "../hooks/useAuthorize";
import { useRouter } from "next/router"
import useAuth from "../stores/authUser"
import { FloatingLabelInput } from "../components/input";
import axios from "axios";

const url = process.env["web_url"]

export default function Todo() {

  const router = useRouter()

  const gotoDashboard = (e) => {
    e.preventDefault()
    router.push(`${url}/dashboard`)
  }

  const [tasks, setTasks]=  useState([]);
  const [item, setItem] = useState("");

  const [dbTask, setDbTask] = useState([]);

  const clickedRandomButton = async () => {
    const data = await (await fetch("https://Server.ugorithm.repl.co/users/DB")).json();
    let todos = [];
    todos = data[0]["todo"];
    setDbTask(todos);
  }

  const AddItem = async () => {

    //const res = await (await fetch("https://Server.ugorithm.repl.co/todo/add", {method: "POST", cache: "no-cache", mode:"cors"})).json();
    //console.log(res);

    if (item) {
      setTasks([
        ...tasks,
        item,
      ]);
      setItem("");

    }
  }

  const RemoveItem = (theTask) => {
    console.log(`removed ${theTask}`)
    const temp = tasks.filter(i => i !== theTask);
    setTasks(temp);
  }

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      AddItem();
    }
  }


  //authintaication 
  const { authenticated, loading, error } = useAuthorize()

  const SID = useAuth((state) => state.SID)

  useEffect(() => {
    if (error) console.log(error)
  }, [error])

  useEffect(() => {
    if (loading === false) {
      if (authenticated.current === false) {
        router.push(`${url}/login`)
      } else if (authenticated.current === true) {
        console.log("Loaded and authed")
      }
    }
  }, [loading, authenticated, router])

  useEffect(() => {
    if (SID === null) {
      router.push(`${url}/login`)
    }
  }, [SID, router])
   //authintaication 


  return (
    <>
      <button onClick={gotoDashboard}>Dashboard</button>
      <form onKeyDown={(e) => handleEnter(e)}>
        <div>
          <input className="border-2" placeholder="Enter task"
          onChange={(e) => setItem(e.target.value)} />
          <button type="button" onClick={AddItem} className='border-2'>Add</button>
        </div>
      </form>
      <br />
      <ul>
        {tasks.map(i => {
          return (
            <>
              <li onClick={() => RemoveItem(i)} key={i}>{i}</li>
            </>
          )
        })}
        </ul>
      <br />
    </>
  )
}