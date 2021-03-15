import React, { useContext, useMemo } from 'react';
import { HotelStateContext } from '../useHotelService';

export default function HotelMetaInfo() {
  const {name} = useContext(HotelStateContext);

  console.log('444')
  return useMemo(() => (
    <div>
      name: {name}
    </div>
  ), [name]);
};
