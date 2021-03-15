import React, { useContext } from 'react';
import { Button, Spin } from 'antd';

import OrderItem from './OrderItem';
import TestItem from './TestItem';
import useOrderService, { StateContext } from './useOrderService';
import { OrderContext } from '../useOrderService';

const StateProvider: React.FC = ({ children }) => {
  const orderService = useOrderService();
  return <StateContext.Provider value={orderService}>{children}</StateContext.Provider>;
};

const Order = () => {
  const { value } = useContext(StateContext);
  const orderService = useContext(OrderContext);

  return (
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
  );
};

export default () => {
  return (
    <StateProvider>
      <Order />
    </StateProvider>
  );
};
