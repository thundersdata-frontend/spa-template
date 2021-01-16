import React from 'react';
import { Button } from 'antd';
import useHomepageService from './useHomepageService';

export default function Homepage() {
  const homepageService = useHomepageService();

  return (
    <div>
      <div>我是首页</div>
      <div>当前step: {homepageService.step}</div>
      <Button onClick={() => homepageService.increment()}>增加</Button>
    </div>
  );
}
