import type { Key } from 'react';
import { useCallback, useContext } from 'react';
import { history } from 'umi';
import { AuthContext } from '@/pages/auth/useAuthService';

export default function useHeaderService() {
  const authService = useContext(AuthContext);

  const dropdownClick = useCallback(
    (key: Key) => {
      switch (key) {
        case 'personal':
        default:
          console.log('你点击的是个人信息');
          break;
        case 'logout':
          authService.logout();
          history.replace('/auth/login');
          break;
      }
    },
    [authService],
  );

  return {
    dropdownClick,
  };
}
