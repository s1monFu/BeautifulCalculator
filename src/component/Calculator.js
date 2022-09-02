import { useState } from "react";

function Calculator() {
    const [counter, setCounter] = useState(0)
    const [text, setText] = useState("")
    return (
        <div>
            Counter: {counter}
            <button onClick={() => { setCounter(counter *10 +1) }}>1</button>
            <button onClick={() => { setCounter(counter *10 +2) }}>2</button>
            <button onClick={() => { setCounter(counter *10 +3) }}>3</button>
            <button onClick={() => { setCounter(counter *10 +4) }}>4</button>
            <button onClick={() => { setCounter(counter *10 + 5) }}>5</button>
            <button onClick={() => { setCounter(counter *10 + 6) }}>6</button>
            <button onClick={() => { setCounter(counter *10 + 7) }}>7</button>
            <button onClick={() => { setCounter(counter *10 + 8) }}>8</button>
            <button onClick={() => { setCounter(counter * 10 +9) }}>9</button>
            <button onClick={() => { setCounter(counter *10) }}>0</button>
            <button onClick={() => { setCounter(counter *10) }}>+</button>
            <button onClick={() => { setCounter(counter *10) }}>-</button>
            <button onClick={() => { setCounter(counter *10) }}>*</button>
            <button onClick={() => { setCounter(counter *10) }}>/</button>
            <input onChange={(e) => { setText(e.target.value) }}></input>
            {/* <p>result: {text}</p> */}

        </div>
    );
}

export default Calculator;