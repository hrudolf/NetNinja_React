import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('rudi');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); //stop page from refreshing
        const blog = { title, body, author };
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
            //JSON SERVER AUTOMATICALLY ADDS AN ID
        }).then(() => {
            console.log("New blog added");
            setIsPending(false);
            //history.go(-1); //GO BACK TO PREVIOUS PAGE
            history.push('/');
        })

    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog content:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="rudi">Rudi</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}

export default Create;