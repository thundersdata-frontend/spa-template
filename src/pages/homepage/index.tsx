import React from 'react';
import { Button } from 'antd';
import { Link } from 'umi';
import useHomepageService from './useHomepageService';

export default function Homepage() {
  const homepageService = useHomepageService();

  console.log('111');
  return (
    <div>
      <div>我是首页</div>
      <div>当前step: {homepageService.step}</div>
      <Button onClick={() => homepageService.increment()}>增加</Button>
      <Button onClick={() => homepageService.decrement()}>减少</Button>
      <Link to="/hotel/hotelInfo">hotel info</Link>
    </div>
  );
}
