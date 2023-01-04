import axios from "axios";
import { useEffect, useState } from "react";
import useLikes from "../stores/likes";
import Link from "next/link";

export default function Home() {

  const likes = useLikes((state) => state.likes);
  const addLike = useLikes((state) => state.addLike);

  const [likesHydrated, setLikesHydrated] = useState();

  useEffect(() => {
    setLikesHydrated(likes);
  }, [likes])

  const handleClick = (e) => {
    e.preventDefault();
    addLike();
  }

  return (
    <>
      <h1>Likes: {likesHydrated}</h1>
      <button onClick={handleClick}>Add like</button>
    </>
  )
}
