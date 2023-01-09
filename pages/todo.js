import { useEffect, useState } from "react";
import { HeaderMegaMenu } from "../components/header"
import useAuth from "../stores/authUser";

export default function Todo() {

    const SID = useAuth((state) => state.SID);
    const [loggedIn, setLoggedin] = useState(false);

    useEffect(() => {
        if (!SID) {
            setLoggedin(false);
        }
    }, [SID])

    return (
        <>
            <HeaderMegaMenu page="Todo" login={loggedIn} />
        </>
    )
}