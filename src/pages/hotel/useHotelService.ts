import getContextService from '@/utils/getContextService';
import { useState } from 'react';

export default function useHotelService() {
  const [value, setValue] = useState(0);

  return {
    value,
    setValue,
  };
}

export const HotelContext = getContextService(useHotelService);
