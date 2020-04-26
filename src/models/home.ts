import { useState } from 'react';

export default () => {
  const [value, setValue] = useState<string>();
  const [, setEnums] = useState();

  return {
    value,
    setValue,
    setEnums,
  };
};
