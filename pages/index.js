import { useEffect } from "react";
import useAuthorize from "../hooks/useAuthorize"
import useAuth from "../stores/authUser"

export default function Home() {

    const SID = useAuth((state) => state.SID);

    const { data, isLoading, error } = useAuthorize(SID)

    if (error) console.log(error);

    useEffect(() => {
        if (isLoading) {
            console.log("loading")
        }
    }, [data, isLoading])

    return (
        <>
            <h1>Home</h1>
            <p>{JSON.stringify(data)}</p>
        </>
    )
}