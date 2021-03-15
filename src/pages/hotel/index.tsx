import React, { useMemo } from 'react';
import type { IRouteComponentProps } from 'umi';

import useHotelService, { HotelDispatchContext, HotelStateContext } from './useHotelService';

export default function Hotel(props: IRouteComponentProps) {
  const {setValue, setName, value, name} = useHotelService();

  const dispatchValues = useMemo(() => ({setValue, setName}), [setValue, setName]);

  const stateValues = useMemo(() => ({ value, name }), [value, name]);

  return <HotelDispatchContext.Provider value={dispatchValues}>
    <HotelStateContext.Provider value={stateValues}>
    {props.children}
    </HotelStateContext.Provider>
  </HotelDispatchContext.Provider>;
}
