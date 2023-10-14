import React, { useState } from "react";

const Counter = function () {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1> {count}</h1>

      <div className="buttons">
        <button className="button" onClick={increment}>
          Push me!
        </button>
        <button className="button" onClick={decrement}>
          Dont Push me!
        </button>
      </div>
    </div>
  );
};

export default Counter;
