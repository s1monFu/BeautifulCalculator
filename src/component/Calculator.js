import { useState } from "react";
import "../styles/buttons.css";

function Calculator() {
  // const [counter, setCounter] = useState(0)
  const [ops, setOps] = useState("");
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const pushOperator = (op) => {
    if (
      ops === "" ||
      ops.endsWith("+") ||
      ops.endsWith("*") ||
      ops.endsWith("-") ||
      ops.endsWith("/")
    ) {
      return;
    }
    setOps(ops + op);
  };

  const calculate = () => {
    if (ops !== undefined) setOps(eval(ops));
  };

  const btnSize =
    window.screen.availableHeight > window.screen.width ? "10vw" : "10vh";
  const displayWidth =
    window.screen.availableHeight > window.screen.width ? "30vw" : "30vh";
  const displayHeight =
    window.screen.height > window.screen.width ? "70vw" : "70vh";

  return (
    <div
      style={{
        width: displayWidth,
        height: displayHeight,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div className="display" style={{ width: displayWidth, height: btnSize ,backgroundColor:"#8badc0"}}>
        {ops}
      </div>
      {numbers.map((n) => (
        <button
          className="numbers"
          onClick={() => {
            setOps(ops + n);
          }}
          style={{ width: btnSize, height: btnSize }}
        >
          {n}
        </button>
      ))}
      <button
        className="numbers"
        onClick={() => {
          setOps(ops + "0");
        }}
        style={{ width: btnSize, height: btnSize }}
      >
        0
      </button>
      <button
        className="numbers"
        onClick={() => {
          setOps(ops + ".");
        }}
        style={{ width: btnSize, height: btnSize, fontSize: "38px" }}
      >
        .
      </button>

      <button
        className="numbers"
        onClick={() => {
          pushOperator("+");
        }}
        style={{ width: btnSize, height: btnSize}}
      >
        +
      </button>
      <button
        className="numbers"
        onClick={() => {
          pushOperator("-");
        }}
        style={{ width: btnSize, height: btnSize }}
      >
        -
      </button>
      <button
        className="numbers"
        onClick={() => {
          pushOperator("*");
        }}
        style={{ width: btnSize, height: btnSize }}
      >
        x
      </button>
      <button
        className="numbers"
        onClick={() => {
          pushOperator("/");
        }}
        style={{ width: btnSize, height: btnSize }}
      >
        /
      </button>
      <button
        className="numbers"
        onClick={() => {
          calculate();
        }}
        style={{ width: btnSize, height: btnSize, backgroundColor:"#f2f7f6" }}
      >
        =
      </button>

      <button
        className="numbers"
        onClick={() => {
          setOps(ops.slice(0, -1));
        }}
        style={{ width: btnSize, height: btnSize ,backgroundColor:"#d6e7e7"}}
      >
        Back
      </button>
      <button
        className="numbers"
        onClick={() => {
          setOps("");
        }}
        style={{ width: btnSize, height: btnSize ,backgroundColor:"#b3cad7"}}
      >
        Clear
      </button>
    </div>
  );
}

export default Calculator;
