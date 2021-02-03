import React from 'react';
import type { IRouteComponentProps } from 'umi';

import useOrderService, { OrderContext } from './useOrderService';

export default function Order(props: IRouteComponentProps) {
  const orderService = useOrderService();

  return <OrderContext.Provider value={orderService}>{props.children}</OrderContext.Provider>;
}
