import React, { useContext } from 'react';
import type { IRouteComponentProps } from 'umi';
import { RootContext } from '../root';

import { HotelContext } from './useHotelService';

export default function Hotel(props: IRouteComponentProps) {
  const { hotelService } = useContext(RootContext);

  return <HotelContext.Provider value={hotelService}>{props.children}</HotelContext.Provider>;
}
