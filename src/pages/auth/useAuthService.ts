import { useLocalStorageState } from 'ahooks';
import getContextService from '@/utils/getContextService';
import { useCallback } from 'react';

// 这个服务将被注册至全局
export const AuthContext = getContextService(useAuthService);

/**
 * 权限验证服务
 *
 */
export default function useAuthService() {
  const [token, setToken] = useLocalStorageState('token', '');

  /** 退出登录 */
  const logout = useCallback(() => {
    setToken('');
  }, [setToken]);

  return {
    token,
    setToken,
    logout,
  };
}
