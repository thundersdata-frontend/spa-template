import getContextService from '@/utils/getContextService';
import { useCallback } from 'react';

// 这个服务将被注册至全局
export const AuthContext = getContextService(useAuthService);

/**
 * 权限验证服务
 *
 */
export default function useAuthService() {
  const token = window.localStorage.getItem('accessToken');

  const saveToken = useCallback((token: string) => {
    window.localStorage.setItem('accessToken', token);
  }, []);

  /** 退出登录 */
  const logout = useCallback(() => {
    window.localStorage.setItem('accessToken', '');
  }, []);

  return {
    token,
    saveToken,
    logout,
  };
}
