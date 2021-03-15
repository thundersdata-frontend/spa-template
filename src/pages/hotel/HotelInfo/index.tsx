import { Button } from 'antd';
import { Link } from 'umi';
import React, { useContext } from 'react';
import { HotelDispatchContext } from '../useHotelService';
import HotelOtherInfo from '../HotelOtherInfo';
import HotelMetaInfo from '../HotelMetaInfo';

export default function HotelInfo() {
  const {setValue, setName} = useContext(HotelDispatchContext);

  const changeValue = () => {
    setValue(Math.random() * 100);
  };

  const changeName = () => {
    setName((Math.random() * 100).toFixed(2));
  };

  console.log('222')
  return (
    <div>
      <div>酒店基本信息</div>
      <Button onClick={changeValue}>修改value</Button>
      <Button onClick={changeName}>修改name</Button>
      <Link to="/homepage">homepage</Link>
      <HotelOtherInfo />
      <HotelMetaInfo />
    </div>
  );
};
