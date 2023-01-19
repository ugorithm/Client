import { useEffect, useState } from "react";
import useAuthorize from "../hooks/useAuthorize";
import { useRouter } from "next/router"
import useAuth from "../stores/authUser"

const url = process.env["web_url"]

export default function Todo() {

  const { authenticated, loading, error } = useAuthorize()

  const router = useRouter()

  const SID = useAuth((state) => state.SID)

  useEffect(() => {
    if (error) console.log(error)
  }, [error])

  useEffect(() => {
    if (loading === false) {
      if (authenticated.current === false) {
        router.push(`https://${url}/login`)
      } else if (authenticated.current === true) {
        console.log("Loaded and authed")
      }
    }
  }, [loading, authenticated, router])

  useEffect(() => {
    if (SID === null) {
      router.push(`https://${url}/login`)
    }
  }, [SID, router])

  return (
    <>
      <h1>Todo</h1>
    </>
  )
}