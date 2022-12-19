import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(`Let's fetch!!!`);
        fetch(url)
            .then(res => {
                console.log(res);
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json()
            })
            .then(data => setTimeout(() => {
                setIsPending(false);
                setData(data);
                setError(null);
            }, 1000))
            .catch(err => {
                setError(err.message);
                setIsPending(false);
                console.log(err.message);
            });

        console.log('useEffect has just run');
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;