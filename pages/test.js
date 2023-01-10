import { useEffect } from "react";
import useAuthorize from "../hooks/useAuthorize"
import useAuth from "../stores/authUser"

export default function Test() {

    // const SID = useAuth((state) => state.SID);
    const SID = "olNsZTQLMDeS_2MM-q5xGf520oJ3cltk";

    const { data, isLoading, error } = useAuthorize(SID);

    if (error) console.log(error);

    useEffect(() => {
        console.log(data);
    })

    return (
        <>
            <h1>Testing custom hooks</h1>
            <p>{JSON.stringify(data)}</p>
        </>
    )
}