import getContextService from '@/utils/getContextService';

import useHotelService from '../hotel/useHotelService';
import useOrderService from '../order/useOrderService';

export default function useRoot() {
  const hotelService = useHotelService();
  const orderService = useOrderService(hotelService);

  return {
    hotelService,
    orderService,
  };
}

export const RootContext = getContextService(useRoot);
