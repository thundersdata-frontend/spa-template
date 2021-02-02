import React from 'react';
import useLoginService from './useLoginService';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function Login() {
  const loginService = useLoginService();

  return (
    <ProForm
      onFinish={loginService.login}
      submitter={{
        searchConfig: {
          submitText: '登录',
        },
        render: (_, dom) => dom.pop(),
        submitButtonProps: {
          loading: loginService.loading,
          size: 'large',
          style: {
            width: '100%',
          },
        },
      }}
    >
      <ProFormText
        fieldProps={{
          size: 'large',
          bordered: false,
          prefix: <UserOutlined style={{ color: '#0189fb' }} />,
        }}
        name="username"
        placeholder="请输入用户名"
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      />
      <ProFormText.Password
        fieldProps={{
          size: 'large',
          bordered: false,
          prefix: <LockOutlined style={{ color: '#0189fb' }} />,
        }}
        name="password"
        placeholder="请输入密码"
        rules={[{ required: true, message: '请输入密码' }]}
      />
    </ProForm>
  );
}
