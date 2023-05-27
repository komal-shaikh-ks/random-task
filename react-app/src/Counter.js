import React, { useState } from 'react';
import './App.css';

const Counter = ({ initial, min, max }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={decrement} class='set'>-</button>
      <input value={count} class='set'/>
      <button onClick={increment} class='set'>+</button>
    </div>
  );
};

export default Counter;
