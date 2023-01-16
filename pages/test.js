import { useRouter } from "next/router";
import { useEffect } from "react";
import useAuthorize from "../hooks/useAuthorize"
import useAuth from "../stores/authUser"

export default function Test() {

    const router = useRouter();

    const { authenticated, loading, error } = useAuthorize();

    if (error) console.log("There's an error");

    useEffect(() => {
        if (loading === true) return;
        if (authenticated === false) {
            console.log("not authed")
            router.push("http://localhost:3000/login");
        }
        if (!authenticated) {
            console.log("thing is null")
        }
    }, [loading, authenticated, router])

    return (
        <>
            <h1>Testing custom hooks</h1>
            <p>{JSON.stringify(authenticated)}</p>
        </>
    )
}