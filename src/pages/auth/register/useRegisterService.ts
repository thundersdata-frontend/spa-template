import { useCallback, useContext, useState } from 'react';
import request from 'umi-request';
import type { Store } from 'rc-field-form/es/interface';
import * as Sentry from '@sentry/react';

import useToast from '@/hooks/useToast';
import { AuthContext } from '../useAuthService';
import { useModel, history } from 'umi';

export default function useRegisterService() {
  const [loading, setLoading] = useState(false);
  const { toastFailure, toastSuccess } = useToast();
  const authService = useContext(AuthContext);
  const { refresh } = useModel('@@initialState');

  /**
   * 注册
   */
  const register = useCallback(
    async (values: Store) => {
      setLoading(true);
      try {
        const { success, data, code, message } = await request.post('/register/submit', {
          data: values,
        });
        if (success && code === 20000) {
          toastSuccess(message ?? '注册成功');
          authService.setToken(data.accessToken);
          await refresh();
          history.replace('/homepage');
        } else {
          toastFailure(message);
        }
      } catch (error) {
        Sentry.withScope((scope) => {
          scope.setTag('type', 'register');
          scope.setExtras(values);
          Sentry.captureException(error);
        });
        toastFailure(error.message);
      } finally {
        setLoading(false);
      }
    },
    [authService, refresh, toastFailure, toastSuccess],
  );

  /**
   * 发送注册短信
   */
  const sms = useCallback(
    async (phone: string) => {
      try {
        const { success, code, message } = await request.post('/register/sms', {
          data: { phone },
        });
        if (success && code === 20000) {
          toastSuccess(message ?? '注册短信发送成功');
        } else {
          toastFailure(message);
        }
      } catch (error) {
        Sentry.withScope((scope) => {
          scope.setTag('type', 'sms');
          scope.setExtras({
            type: 'register',
            phone,
          });
          Sentry.captureException(error);
        });
        toastFailure(error.message);
      }
    },
    [toastFailure, toastSuccess],
  );

  return {
    register,
    sms,
    loading,
  };
}
