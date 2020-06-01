/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-05-20 09:57:13
 * @LastEditors: 廖军
 * @LastEditTime: 2020-06-01 17:14:14
 */
import { useMemo, useState } from 'react';

export default function useAuth() {
  const [accessToken, setAccessToken] = useState(
    sessionStorage.getItem('accessToken'),
  );

  const isLogin = useMemo(() => !!accessToken, [accessToken]);

  const clearToken = () => {
    setAccessToken('');
    sessionStorage.removeItem('accessToken');
  };

  return {
    isLogin,
    accessToken,
    saveToken: (token: string) => {
      setAccessToken(token);
      sessionStorage.setItem('accessToken', token);
    },
    clearToken,
  };
}
