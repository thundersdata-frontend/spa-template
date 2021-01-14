import { useState, useEffect } from 'react';

export default function useSpinning(state = false) {
  const [spinning, setSpinning] = useState(false);
  const [tip, setTip] = useState('');

  useEffect(() => {
    setSpinning(state);
  }, [state])

  return {
    spinning,
    setSpinning,
    tip,
    setTip,
  };
}
