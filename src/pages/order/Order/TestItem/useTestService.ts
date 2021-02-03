import { useCallback, useState } from 'react';

export default function useTestService(setParent: (data: number) => void, initialData: number) {
  const [data, setData] = useState(initialData);

  const changeData = useCallback(
    (data: number) => {
      setData(data);
      setParent(data);
    },
    [setParent],
  );

  return {
    data,
    changeData,
  };
}
