import React, { useContext } from 'react';
import { Redirect } from 'umi';
import type { IRouteComponentProps } from 'umi';
import { AuthContext } from '../useAuthService';

export default (props: IRouteComponentProps) => {
  const authService = useContext(AuthContext);
  if (authService.getToken()) {
    return props.children;
  }
  return <Redirect to="/auth/login" />;
};
