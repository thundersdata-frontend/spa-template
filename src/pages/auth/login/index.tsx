import React from 'react';
import useLoginService from './useLoginService';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import styles from './index.module.less';
import { Link } from 'umi';

export default function Login() {
  const loginService = useLoginService();

  return (
    <div className={styles.form}>
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
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          <img
            style={{
              height: '44px',
              marginRight: 16,
            }}
            alt="logo"
            src={require('@/assets/logo.png')}
          />
          雷数科技
        </h1>
        <ProFormText
          fieldProps={{
            size: 'large',
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
            prefix: <LockOutlined style={{ color: '#0189fb' }} />,
          }}
          name="password"
          placeholder="请输入密码"
          rules={[{ required: true, message: '请输入密码' }]}
        />
      </ProForm>
      <div style={{ marginTop: 20 }}>
        <Link to="/auth/register">去注册&gt;&gt;</Link>
      </div>
    </div>
  );
}
