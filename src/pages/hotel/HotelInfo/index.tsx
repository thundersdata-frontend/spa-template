import { RootContext } from '@/pages/root';
import { Button, Spin } from 'antd';
import React, { useContext } from 'react';

export default function HotelInfo() {
  const { hotelService } = useContext(RootContext);
  console.log('123');
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
          <Button onClick={() => hotelService.setValue(123)}>修改value</Button>
        </>
      )}
    </div>
  );
}
