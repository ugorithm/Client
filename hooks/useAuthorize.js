import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import useAuth from "../stores/authUser";

export default function useAuthorize() {

    const SID = useAuth((state) => state.SID);

    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const loading = useRef(true);
    const authenticated = useRef(false);


    useEffect(() => {
        const payload = {
            "sessionID": SID
        };

        const fetchData = async () => {
            try {
                const resp = await axios.post("https://server.ugorithm.repl.co/auth/getsession", payload)
                setData(resp.data);
                loading.current = false;
                if (data?.authenticated === true) {
                    authenticated.current = true;
                } else {
                    authenticated.current = false;
                }
            } catch (err) {
                console.log("Error: " + err);
            }

        }
        fetchData()
    }, [SID, data?.authenticated]);

    return { authenticated, loading, error };
}
