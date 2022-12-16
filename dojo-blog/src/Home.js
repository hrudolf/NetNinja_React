import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        console.log(`Let's fetch!!!`);
        fetch('http://localhost:8000/blogs')
            .then(res => {
                console.log(res);
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json()
            })
            .then(data => setTimeout(() => {
                setIsPending(false);
                setBlogs(data);
                setErrorMessage(null);
            }, 1000))
            .catch(err => {
                setErrorMessage(err.message);
                setIsPending(false);
                console.log(err.message);
            });

        console.log('useEffect has just run');
    }, []);

    return (
        <div className="home">
            {errorMessage && <div> Error: {errorMessage} </div>}
            {isPending && <div>Loading... </div>}
            {blogs && <BlogList blogs={blogs} title={'All blogs!'} />}
        </div>
    );
}

export default Home;