import { RootContext } from '@/pages/root';
import React, { useContext } from 'react';

export default function HotelOtherInfo() {
  console.log('456');
  const { hotelService } = useContext(RootContext);
  return <div>其他信息：{hotelService.value}</div>;
}
