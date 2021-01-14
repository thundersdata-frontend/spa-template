import { useContext } from 'react';
import { Redirect } from 'umi';
import type { IRouteComponentProps } from 'umi';
import { AuthService } from '../useAuthService';

export default (props: IRouteComponentProps) => {
  const authService = useContext(AuthService);
  console.log(666);
  if (authService.token) {
    return props.children;
  }
  return <Redirect to="/auth/login" />;
};
