import { useState } from 'react';

export default () => {
  const [value, setValue] = useState<string>();
  const [, setEnums] = useState();
  // models里面涉及的请求统一使用hooks下的useModelRequest

  return {
    value,
    setValue,
    setEnums,
  };
};
