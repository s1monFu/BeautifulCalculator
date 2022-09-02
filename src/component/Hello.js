import { useState } from "react";

function Hello() {
    const [counter, setCounter] = useState(0)
    const [text, setText] = useState("")
    const fruits = ["apple", "banana", "watermelon", "pepper"]
    return (
        <div>
            Counter: {counter}
            <button onClick={() => { setCounter(counter + 1) }}>+</button>
            <button onClick={() => { setCounter(counter - 1) }}>-</button>
            <input onChange={(e) => { setText(e.target.value) }}></input>
            <p>You typed: {text}</p>
            <ul>
                {fruits.map((item) => <li>{item}</li>)}
            </ul>

        </div>
    );
}

export default Hello;