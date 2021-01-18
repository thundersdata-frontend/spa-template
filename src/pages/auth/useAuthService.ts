import { useLocalStorageState } from 'ahooks';
import getContextService from '@/utils/getContextService';

// 这个服务将被注册至全局
export const AuthContext = getContextService(useAuthService);

/**
 * 权限验证服务
 *
 */
export default function useAuthService() {
  const [token, setToken] = useLocalStorageState('token', '1111');
  const [userInfo, setUserInfo] = useLocalStorageState('userInfo', {
    name: '',
  });

  return {
    token,
    setToken,
    userInfo,
    setUserInfo,
  };
}
