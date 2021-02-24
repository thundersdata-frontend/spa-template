import getContextService from '@/utils/getContextService';
import { useState } from 'react';

export interface Action {
  data: number;
  key: number;
}

export default function useOrderService() {
  const [value, setValue] = useState<Action[]>([
    { data: 0, key: 0 },
    { data: 1, key: 1 },
    { data: 2, key: 2 },
    { data: 3, key: 3 },
    { data: 4, key: 4 },
  ]);

  return {
    value,
    setValue,
  };
}

export const StateContext = getContextService(useOrderService);
