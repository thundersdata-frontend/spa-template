import React from 'react';
import type { IRouteComponentProps } from 'umi';

import useHotelService, { HotelContext } from './useHotelService';

export default function Hotel(props: IRouteComponentProps) {
  const hotelService = useHotelService();

  return <HotelContext.Provider value={hotelService}>{props.children}</HotelContext.Provider>;
}
