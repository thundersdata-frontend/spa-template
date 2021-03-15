import { useCallback, useState } from 'react';
import getContextService from '@/utils/getContextService';

export default function useHotelService() {
  const [value, setValue] = useState(0);
  const [name, setName] = useState('');

  const changeValue = useCallback((val: number) => {
    setValue(val);
  }, []);

  const changeName = useCallback((name: string) => {
    setName(name);
  }, []);

  return {
    value,
    name,
    setValue: changeValue,
    setName: changeName,
  };
}

type ServiceReturnType = ReturnType<typeof useHotelService>;

export const HotelDispatchContext = getContextService<DispatchContext<ServiceReturnType>>();
export const HotelStateContext = getContextService<StateContext<ServiceReturnType>>();
