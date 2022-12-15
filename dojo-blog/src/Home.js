import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(33);
    //let name = 'mario';

    const handleClick = (e) => {
        setName('luigi');
        setAge('37');
    }

    return (
        <div className="home">
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;