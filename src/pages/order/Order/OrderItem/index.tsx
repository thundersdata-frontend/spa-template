import React from 'react';
import type { OrderInfo } from '../../useOrderService';

export default function OrderItem(order: OrderInfo) {
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
