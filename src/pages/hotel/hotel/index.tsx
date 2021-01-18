import React from 'react';
import useHotelService, { HotelContext } from './useHotelService';

import HotelInfo from './HotelInfo';

export default function Hotel() {
  const hotelService = useHotelService();

  return (
    <HotelContext.Provider value={hotelService}>
      <HotelInfo />
    </HotelContext.Provider>
  );
}
