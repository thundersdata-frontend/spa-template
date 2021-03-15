import React, { useContext } from 'react';
import type { IRouteComponentProps } from 'umi';

import { OrderContext } from './useOrderService';

export default function Order(props: IRouteComponentProps) {
  const orderService = useContext(OrderContext);

  return <OrderContext.Provider value={orderService}>{props.children}</OrderContext.Provider>;
}
