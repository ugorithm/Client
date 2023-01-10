import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function useAuthorize(ID) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const payload = {
            "sessionID": "sdf_324s" // temp
        };

        const fetchData = async () => {
            try {
                setLoading(true);
                const resp = await axios.post("https://server.ugorithm.repl.co/auth/getsession", payload)
                setData(resp.data);
            } catch (err) {
                console.log(err);
            }

        }
        fetchData()
        setLoading(false);
    }, [setLoading]);

    return { data, loading, error };
}
