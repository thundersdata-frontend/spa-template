import React, { createContext, useContext, useState } from 'react';
import { Button, Spin } from 'antd';
import { RootContext } from '@/pages/root';

import OrderItem from './OrderItem';
import TestItem from './TestItem';

export interface Action {
  data: number;
  key: number;
}
export const StateContext = createContext<any>({});
export default function Order() {
  const { orderService } = useContext(RootContext);

  const [value, setValue] = useState<Action[]>([
    { data: 0, key: 0 },
    { data: 1, key: 1 },
    { data: 2, key: 2 },
    { data: 3, key: 3 },
    { data: 4, key: 4 },
  ]);

  console.log(value);

  return (
    <StateContext.Provider value={setValue}>
      <div>
        <div>订单</div>
        {orderService.orderLoading ? (
          <Spin />
        ) : (
          <div>
            {orderService.orderList.map((order) => (
              <OrderItem key={order.orderId} {...order} />
            ))}
            <Button onClick={() => orderService.createOrder()}>执行Hotel里的setValue</Button>
            <div>
              {value.map((item) => (
                <TestItem key={item.key} index={item.key} data={item.data} />
              ))}
            </div>
          </div>
        )}
      </div>
    </StateContext.Provider>
  );
}
