import React, { useContext, useMemo } from 'react';
import { HotelStateContext } from '../useHotelService';

export default function HotelOtherInfo() {
  const {value} = useContext(HotelStateContext);

  console.log('333')
  return useMemo(() => (<div>value：{value}</div>), [value]);
};

