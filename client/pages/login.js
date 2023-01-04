import { useEffect, useState } from "react";
import useLikes from "../stores/likes"
import useAuth from "../stores/authUser";

export default function Login() {

    const authRefresh = useAuth((state) => state.refreshKey);

    return (
        <>
            <h1>Login {authRefresh}</h1>
        </>
    )
}