import { Spin } from 'antd';
import React, { useContext } from 'react';
import { HotelContext } from '../useHotelService';

export default function HotelInfo() {
  const hotelService = useContext(HotelContext);

  return (
    <div>
      <div>酒店基本信息</div>
      {hotelService.hotelLoading ? (
        <Spin />
      ) : (
        <>
          <div>
            <span>酒店名称：</span>
            <span>{hotelService.hotelInfo}</span>
          </div>
          <div>
            <span>酒店地址：</span>
            {/* <span>{hotelService.hotelInfo.address}</span> */}
          </div>
        </>
      )}
    </div>
  );
}
