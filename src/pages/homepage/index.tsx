import React from 'react';
import { Button } from 'antd';
import { Link } from 'umi';
import useHomepageService from './useHomepageService';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import { fetchUserInfoAtom, userInfoAtom } from '../counter/countAtom';

export default function Homepage() {
  const homepageService = useHomepageService();
  const userInfo = useAtomValue(userInfoAtom);
  const fetchUserInfo = useUpdateAtom(fetchUserInfoAtom);

  console.log('111');
  return (
    <div>
      <div>我是首页</div>
      <div>当前step: {homepageService.step}</div>
      <Button onClick={() => homepageService.increment()}>增加</Button>
      <Button onClick={() => homepageService.decrement()}>减少</Button>
      <Link to="/hotel/hotelInfo">hotel info</Link>

      <div>
        userInfo: {userInfo?.name} {userInfo?.age}
      </div>
      <Button onClick={() => fetchUserInfo()}>请求用户信息</Button>
    </div>
  );
}
