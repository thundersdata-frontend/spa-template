import React, { useContext } from 'react';
import { HotelContext } from '../useHotelService';

export default function HotelOtherInfo() {
  const hotelService = useContext(HotelContext);
  return <div>其他信息：{hotelService.value}</div>;
}
