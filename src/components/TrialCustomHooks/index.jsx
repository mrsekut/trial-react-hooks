import React, { useState, useEffect } from 'react';

const useEffectFunctoin = num => {
  useEffect(() => {
    console.log('before');
    return () => console.log('after');
  });
  return num >= 10 ? 'Finish' : 'Loading...';
};

export const TrialCustomHooks = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  const num = useEffectFunctoin(count);

  return (
    <>
      <p>You clicked {count} times</p>
      <p>{num}</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </>
  );
};
