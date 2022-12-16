import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('mario');

    useEffect(() => {
        console.log(`Let's fetch!!!`);
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                console.log(data);
            });
        console.log('useEffect has just run');
    }, []);

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title={'All blogs!'} />}
            <button onClick={() => setName('luigi')}>Change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;