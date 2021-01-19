import React from 'react';
import useOrderService from './useOrderService';
import type { OrderInfo } from './useOrderService';
import { Spin } from 'antd';

export default function Order() {
  const orderService = useOrderService();

  return (
    <div>
      <div>酒店订单</div>
      {orderService.orderLoading ? (
        <Spin />
      ) : (
        <div>
          {orderService.orderList.map((order) => (
            <OrderItem key={order.orderId} {...order} />
          ))}
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
