import React, { useContext } from 'react';
import type { OrderInfo } from '../useOrderService';
import { Button, Spin } from 'antd';
import { RootContext } from '@/pages/root';

export default function Order() {
  const { orderService } = useContext(RootContext);

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
        </div>
      )}
    </div>
  );
}

function OrderItem(order: OrderInfo) {
  return (
    <div>
      <div>
        <span>订单ID：</span>
        <span>{order.orderId}</span>
      </div>
      <div>
        <span>订单编号：</span>
        <span>{order.orderNo}</span>
      </div>
    </div>
  );
}
