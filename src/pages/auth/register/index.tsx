import React from 'react';
import useRegisterService from './useRegisterService';
import ProForm, { ProFormText, ProFormCaptcha, ProFormDependency } from '@ant-design/pro-form';
import { UserOutlined, LockOutlined, MobileTwoTone, MailTwoTone } from '@ant-design/icons';

import styles from './index.module.less';
import { Link } from 'umi';

export default function Register() {
  const registerService = useRegisterService();

  return (
    <div className={styles.form}>
      <ProForm
        onFinish={registerService.register}
        submitter={{
          searchConfig: {
            submitText: '注册',
          },
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            loading: registerService.loading,
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
        <ProFormText
          fieldProps={{
            size: 'large',
            prefix: <MobileTwoTone />,
          }}
          name="phone"
          placeholder="请输入手机号"
          rules={[
            {
              required: true,
              message: '请输入手机号!',
            },
            {
              pattern: /^1\d{10}$/,
              message: '不合法的手机号格式!',
            },
          ]}
        />
        <ProFormCaptcha
          fieldProps={{
            size: 'large',
            prefix: <MailTwoTone />,
          }}
          captchaProps={{
            size: 'large',
          }}
          phoneName="phone"
          name="captcha"
          rules={[
            {
              required: true,
              message: '请输入验证码',
            },
          ]}
          placeholder="请输入验证码"
          onGetCaptcha={registerService.sms}
        />
        <ProFormText.Password
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined style={{ color: '#0189fb' }} />,
          }}
          name="password"
          placeholder="请输入密码(6~20位中英文数字组合)"
          rules={[
            { required: true, message: '请输入密码' },
            {
              pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
              message: '密码格式不正确!',
            },
          ]}
        />
        <ProFormDependency name={['password']}>
          {({ password }) => {
            return (
              <ProFormText.Password
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined style={{ color: '#0189fb' }} />,
                }}
                name="confirmPassword"
                placeholder="请确认密码(6~20位中英文数字组合)"
                rules={[
                  { required: true, message: '请输入密码' },
                  () => ({
                    validator(_, value) {
                      if (!value || password === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('输入密码不一致'));
                    },
                  }),
                ]}
              />
            );
          }}
        </ProFormDependency>
      </ProForm>
      <div style={{ marginTop: 20 }}>
        <Link to="/auth/login">去登录&gt;&gt;</Link>
      </div>
    </div>
  );
}
