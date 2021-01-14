/*
 * @文件描述: 忘记密码
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-07-23 14:13:31
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-14 18:07:59
 */

import React from 'react';
import { message, Form } from 'antd';
import { history, Link } from 'umi';
import LoginForm from '@/components/LoginForm';
import { useRequest } from 'ahooks';
import request from 'umi-request';
import type { Store, StoreValue } from 'antd/es/form/interface';
import { AUTH_API_URL, LOGIN_CONFIG } from '@/constant';
import { SmsTypeEnum } from '@/enums';

const { Password, Mobile, Captcha, Submit } = LoginForm;

export default function Login() {
  const [form] = Form.useForm();
  /**
   * 重置密码
   * http://mindoc.internal.thundersdata.com/docs/platform/platform-1atuk4sroh108
   * @param values
   */
  const resetPassword = async (values: Store) => {
    const result = await request(`${AUTH_API_URL}/authz/users/resetPassword`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
        phone: values.mobile,
        newPassword: values.password,
        verificationCode: values.captcha,
        clientId: LOGIN_CONFIG.clientId,
        appVersion: '1.0.0',
      },
    });
    if (!result.success) {
      result.message = result.msg;
      throw new Error(JSON.stringify(result));
    }
    return result.result;
  };

  const { loading, run: submit } = useRequest(resetPassword, {
    manual: true,
    onSuccess: () => {
      message.success('密码重置成功');
      history.push('/user/login');
    },
    onError: error => message.error(error.message),
  });

  const checkConfirm = (_: StoreValue, value: string) => {
    const promise = Promise;
    if (value && value !== form.getFieldValue('password')) {
      return promise.reject('两次输入的密码不匹配!');
    }
    return promise.resolve();
  };

  return (
    <div style={{ width: '75%', backgroundColor: 'white', padding: 40 }}>
      <div
        style={{
          textAlign: 'center',
          fontSize: 18,
          fontWeight: 500,
          paddingBottom: 24,
        }}
      >
        忘记密码
      </div>
      <LoginForm form={form} onSubmit={submit}>
        <Password
          name="password"
          placeholder="请输入新密码"
          rules={[
            {
              required: true,
              message: '请输入密码！',
            },
          ]}
        />
        <Password
          name="confirmPassword"
          placeholder="请确认密码"
          rules={[
            {
              required: true,
              message: '请确认密码！',
            },
            {
              validator: checkConfirm,
            },
          ]}
        />
        <Mobile
          name="mobile"
          placeholder="手机号"
          rules={[
            {
              required: true,
              message: '请输入手机号！',
            },
            {
              pattern: /^1\d{10}$/,
              message: '手机号格式错误！',
            },
          ]}
        />
        <Captcha
          name="captcha"
          placeholder="验证码"
          countDown={120}
          getCaptchaButtonText=""
          getCaptchaSecondText="秒"
          smsType={SmsTypeEnum.修改密码}
          rules={[
            {
              required: true,
              message: '请输入验证码！',
            },
          ]}
        />
        <Submit loading={loading}>重置密码</Submit>
      </LoginForm>
      <div>
        <Link to="/user/login">去登录&gt;&gt;</Link>
      </div>
    </div>
  );
}
