import { useCallback } from 'react';
import getContextService from '@/utils/getContextService';

/**
 * 权限验证服务
 *
 */
export default function useAuthService() {
  const getToken = useCallback(() => {
    return window.localStorage.getItem('accessToken');
  }, []);

  const saveToken = useCallback((token: string) => {
    window.localStorage.setItem('accessToken', token);
  }, []);

  /** 退出登录 */
  const logout = useCallback(() => {
    window.localStorage.setItem('accessToken', '');
  }, []);

  return {
    getToken,
    saveToken,
    logout,
  };
}

// 这个服务将被注册至全局
export const AuthContext = getContextService(useAuthService);
