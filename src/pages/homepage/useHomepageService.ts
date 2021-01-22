import { useState, useCallback } from 'react';

export default function useHomepageService() {
  const [step, setStep] = useState(0);

  const increment = useCallback(() => setStep((step) => step + 1), []);

  const decrement = useCallback(() => setStep((step) => step - 1), []);

  return {
    step,
    increment,
    decrement,
  };
}
