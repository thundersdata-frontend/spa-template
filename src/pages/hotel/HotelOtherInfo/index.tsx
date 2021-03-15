import React, { memo, useContext } from 'react';
import { HotelContext } from '../useHotelService';

const HotelOtherInfo = () => {
  const hotelService = useContext(HotelContext);
  return <div>其他信息：{hotelService.value}</div>;
};

export default memo(HotelOtherInfo);
