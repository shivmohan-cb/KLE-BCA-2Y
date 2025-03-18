import { useState } from "react";

const Counter = () => {
  // let count = 0;
  //useState is used to create state for a component, useState will rerender the component when state will be updated
  const [count, setCount] = useState(0);

  const increment = () => {
    // count++;
    setCount((count) => count + 1); // updating state
    console.log(count);
  };

  const decrement = () => {
    // count--;
    if (count > 0) {
      setCount((count) => count - 1); // updating state
    }
    console.log(count);
  };

  console.log("Check rerender");
  return (
    <div className="counter">
      <h1>Counter</h1>
      <div>
        <button onClick={decrement}>-</button>
        <span> {count} </span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;
