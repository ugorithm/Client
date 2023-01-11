import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import useAuth from "../stores/authUser";

export default function useAuthorize() {

    const SID = useAuth((state) => state.SID);

    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [authenticated, setAuthenticated] = useState(null);


    useEffect(() => {
        const payload = {
            "sessionID": SID
        };

        const fetchData = async () => {
            try {
                setLoading(true);
                const resp = await axios.post("https://server.ugorithm.repl.co/auth/getsession", payload)
                setData(resp.data);
                if (data?.authenticated === true) {
                    setAuthenticated(true);
                } else {
                    setAuthenticated(false);    
                }
            } catch (err) {
                console.log("Error: " + err);
            }

        }
        fetchData().then(setLoading(false))
    }, [setLoading, SID, authenticated, data?.authenticated]);

    return { authenticated, loading, error };
}
