import { useCallback, useContext, useState } from 'react';
import request from 'umi-request';
import type { Store } from 'rc-field-form/es/interface';

import useToast from '@/hooks/useToast';
import { AuthContext } from '../useAuthService';
import { useModel, history } from 'umi';

export default function useLoginService() {
  const [loading, setLoading] = useState(false);
  const { toastFailure, toastSuccess } = useToast();
  const authService = useContext(AuthContext);
  const { refresh } = useModel('@@initialState');

  /**
   * 登录操作
   */
  const login = useCallback(
    async (values: Store) => {
      setLoading(true);
      try {
        const { success, data, code, message } = await request.post('/login/submit', {
          data: values,
        });
        if (success && code === 20000) {
          toastSuccess(message ?? '登录成功');
          authService.saveToken(data.accessToken);
          await refresh();
          history.replace('/homepage');
        } else {
          toastFailure(message);
        }
      } catch (error) {
        toastFailure(error.message);
      } finally {
        setLoading(false);
      }
    },
    [authService, refresh, toastFailure, toastSuccess],
  );

  return {
    login,
    loading,
  };
}
