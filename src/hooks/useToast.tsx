import { message } from 'antd';
import { useCallback } from 'react';

export default function useToast() {
  const toastSuccess = useCallback((msg: string) => message.success(msg), []);
  const toastFailure = useCallback((msg: string) => message.error(msg), []);

  return {
    toastSuccess,
    toastFailure,
  };
}
