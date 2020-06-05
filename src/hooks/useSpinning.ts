import { useState } from 'react';

export default function useSpinning(status: boolean = false) {
  const [spinning, setSpinning] = useState(status);
  const [tip, setTip] = useState('');

  return {
    spinning,
    setSpinning,
    tip,
    setTip,
  };
}
