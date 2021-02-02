import React from 'react';
import type { IRouteComponentProps } from 'umi';

import useOrderService, { OrderContext } from './useOrderService';

export default function Order(props: IRouteComponentProps) {
  const OrderService = useOrderService();

  return <OrderContext.Provider value={OrderService}>{props.children}</OrderContext.Provider>;
}
