import { useState } from 'react'

export default () => {
  const [test, setTest] = useState();

  return {
    test,
    setTest,
  };
}
