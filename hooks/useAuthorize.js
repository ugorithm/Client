import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function useAuthorize(ID) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const isLoading = useRef(false);

    const fetchData = async () => {
        const resp = await axios.get("https://server.ugorithm.repl.co/auth/db").then(isLoading.current = true)
        setData(resp.data);
    }

    useEffect(() => {
        if (isLoading.current) return;
        fetchData()
        isLoading.current = false;
    }, [ID]);

    return { data, isLoading, error };
}