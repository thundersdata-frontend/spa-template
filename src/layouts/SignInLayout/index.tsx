import React from 'react';
import { IRouteComponentProps } from 'umi';

export default function SignInLayout(props: IRouteComponentProps) {
  return (
    <div>
      <div>我是登录、注册、忘记密码等页面的布局layout</div>
      <div>{props.children}</div>
    </div>
  );
}
