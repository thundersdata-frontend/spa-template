import React, { useContext } from 'react';
import type { IRouteComponentProps } from 'umi';
import { RootContext } from '../root';

import { OrderContext } from './useOrderService';

export default function Order(props: IRouteComponentProps) {
  const { orderService } = useContext(RootContext);

  return <OrderContext.Provider value={orderService}>{props.children}</OrderContext.Provider>;
}
