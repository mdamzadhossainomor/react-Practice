import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Initial state is 0

  const increment = () => {
    setCount(count + 1); // Update state
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
