import { useRequest } from 'ahooks';
import getContextService from '@/utils/getContextService';
import { useState } from 'react';

export default function useHotelService() {
  const [value, setValue] = useState(0);
  const { data: hotelInfo = [], loading: hotelLoading } = useRequest(
    API.authorization.resource.listResource.fetch,
    {
      defaultParams: [
        {
          clientKey: '123',
        },
      ],
    },
  );

  return {
    hotelInfo,
    hotelLoading,
    value,
    setValue,
  };
}

export const HotelContext = getContextService(useHotelService);
