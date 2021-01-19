import { useRequest } from 'ahooks';

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

export default function useOrderService() {
  const { data: orderList = [], loading: orderLoading } = useRequest(fetchOrder);

  return {
    orderList,
    orderLoading,
  };
}
