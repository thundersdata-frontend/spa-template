import getContextService from '@/utils/getContextService';
import { useRequest } from 'ahooks';
import { useCallback } from 'react';

export class OrderInfo {
  orderId = 0;
  orderNo = '';
}

function fetchOrder(): Promise<OrderInfo[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { orderId: 1, orderNo: 'aaa' },
        { orderId: 2, orderNo: 'bbb' },
      ]);
    }, 2000);
  });
}

export default function useOrderService(hotelService: any) {
  const { data: orderList = [], loading: orderLoading } = useRequest(fetchOrder);

  const createOrder = useCallback(() => {
    hotelService.setValue(555);
  }, [hotelService]);

  return {
    orderList,
    orderLoading,
    createOrder,
  };
}

export const OrderContext = getContextService(useOrderService);
