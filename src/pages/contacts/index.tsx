import React, { useState, useEffect } from 'react';

const useCountDown = (num: number) => {
  const [seconds, setSecond] = useState<number>(num);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (seconds > 0) {
        setSecond(seconds - 1);
      }
    }, 1000);

    return () => {
      if (seconds <= 0) {
        clearTimeout(timeout);
      }
    };
  }, [seconds]);

  return [seconds, setSecond] as const;
};

// use it
const Demo = () => {
  const [seconds, setSecond] = useCountDown(0);
  console.log(seconds);
  return (
    <button disabled={seconds !== 0} onClick={() => setSecond(5)}>
      {seconds > 0 ? `${seconds}s后可点击` : '点击开始倒计时'}
    </button>
  );
};
export default Demo;
