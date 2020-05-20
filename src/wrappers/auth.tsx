/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-05-20 09:50:01
 * @LastEditors: 陈杰
 * @LastEditTime: 2020-05-20 10:05:47
 */
import React from 'react';
import { history } from 'umi';
import useAuth from '@/hooks/useAuth';

const Auth: React.FC = props => {
  const { isLogin } = useAuth();

  if (isLogin) {
    return <>{props.children}</>;
  }
  history.replace('/user/login');
  return null;
};
export default Auth;
