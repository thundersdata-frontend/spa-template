import { Button } from 'antd';
import React, { memo, useContext } from 'react';
import HotelOtherInfo from '../HotelOtherInfo';
import { HotelContext } from '../useHotelService';

const HotelInfo = () => {
  const hotelService = useContext(HotelContext);

  const handleClick = () => {
    hotelService.setValue((val) => val + 1);
  };

  return (
    <div>
      <div>酒店基本信息</div>
      <Button onClick={handleClick}>修改value</Button>
      <HotelOtherInfo />
    </div>
  );
};
export default memo(HotelInfo);
