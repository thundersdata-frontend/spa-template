import { useRequest } from 'ahooks';
import getContextService from '@/utils/getContextService';

export default function useHotelService() {
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
  };
}

export const HotelContext = getContextService(useHotelService);
