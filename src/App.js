import React, { useState, useMemo } from 'react';

let App = () => {
  let [count, setCount] = useState(0);
  let biggerCalculation =
    (useMemo(() => {
      let calculateSumOfBigNumber = 0;
      for (let i = 0; i < 1000000; i++) {
        calculateSumOfBigNumber = calculateSumOfBigNumber + i;
      }
    }),
    []);
  const handleChange = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{biggerCalculation}</h1>
      <h2>{count}</h2>
      <button onClick={handleChange}>Increment</button>
    </div>
  );
};

export default App;
