"use client";

import { useState } from "react";

export default function Counter({ data }) {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((c) => c + 1);
  }

  function decreaseCount() {
    setCount((c) => c - 1);
  }
  return (
    <>
      <p>There are {data.length} users.</p>
      <div>
        <button onClick={increaseCount}>+</button>
        <span>Count: {count}</span>
        <button onClick={decreaseCount}>-</button>
      </div>
    </>
  );
}
