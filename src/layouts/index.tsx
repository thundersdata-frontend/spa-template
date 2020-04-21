import React from 'react';
import { IRouteComponentProps } from 'umi';
import SignInLayout from './SignInLayout';
import BasicLayout from './BasicLayout';

export default function Layout(props: IRouteComponentProps) {
  if (props.location.pathname.includes('/signIn')) {
    return <SignInLayout {...props}>{props.children}</SignInLayout>;
  }
  return <BasicLayout {...props}>{props.children}</BasicLayout>;
}
