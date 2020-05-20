/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-05-20 09:57:13
 * @LastEditors: 陈杰
 * @LastEditTime: 2020-05-20 10:00:21
 */
import { useSessionStorageState } from '@umijs/hooks';
import { useMemo } from 'react';

export default function useAuth() {
  const [accessToken, setAccessToken] = useSessionStorageState(
    'accessToken',
    '',
  );

  const isLogin = useMemo(() => !!accessToken, [accessToken]);

  const clearToken = () => {
    setAccessToken();
  };

  return {
    isLogin,
    accessToken,
    saveToken: setAccessToken,
    clearToken,
  };
}
