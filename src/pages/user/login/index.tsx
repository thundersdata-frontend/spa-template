import React, { useState, useEffect } from 'react';
import { Alert, Checkbox } from 'antd';
import { Link, history, useModel } from 'umi';
import request from 'umi-request';
import LoginForm from '@/components/LoginForm';
import type { LoginParamsType } from '@/components/LoginForm/service';
import useAuth from '@/hooks/useAuth';
import { AUTH_API_URL, LOGIN_CONFIG } from '@/constant';
import { useRequest } from 'ahooks';

const { Tab, UserName, Password, Mobile, Captcha, Submit } = LoginForm;

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

export default function Login() {
  const { saveToken, clearToken } = useAuth();
  const { refresh } = useModel('@@initialState');
  const [autoLogin, setAutoLogin] = useState(true);
  const [type, setType] = useState<string>('account');

  /**
   * 确保登录之前token和全局初始化数据是清空的
   */
  useEffect(() => {
    clearToken();
  }, [clearToken]);

  /**
   * 密码登录
   * @param values
   */
  const accountLogin = async (values: LoginParamsType) => {
    const result = await request(`${AUTH_API_URL}/authz/oauth/token`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
        username: values.userName,
        password: values.password,
        scope: 'read',
        client_id: LOGIN_CONFIG.clientId,
        client_secret: LOGIN_CONFIG.secret,
        grant_type: 'password',
        appVersion: '1.0.0',
      },
    });
    if (!result.success) {
      result.message = result.msg;
      throw new Error(JSON.stringify(result));
    }
    return result.result;
  };

  /**
   * 短信登录
   * @param values
   */
  const smsLogin = async (values: LoginParamsType) => {
    const result = await request(`${AUTH_API_URL}/authz/users/smsLogin`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
        phone: values.mobile,
        code: values.captcha,
        scope: 'read',
        client_id: LOGIN_CONFIG.clientId,
        client_secret: LOGIN_CONFIG.secret,
        grant_type: 'sms',
        appVersion: '1.0.0',
      },
    });
    if (!result.success) {
      result.message = result.msg;
      throw new Error(JSON.stringify(result));
    }
    return result.result;
  };

  const loginSubmit = (values: LoginParamsType) =>
    type === 'account' ? accountLogin(values) : smsLogin(values);

  // 本地新建项目跳过登录可使用 fakeAccountLogin
  const { loading, data, run: submit } = useRequest(loginSubmit, {
    manual: true,
    onSuccess: data => {
      saveToken(data.access_token!);
      refresh();
      history.replace('/homepage');
    },
  });

  const handleSubmit = (values: LoginParamsType) => {
    submit(values);
  };

  const { status, type: loginType } = data || { status: 'ok', type: 'account' };

  return (
    <div style={{ width: '75%', backgroundColor: 'white', padding: 40 }}>
      <LoginForm activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        <Tab key="account" tab="账户密码登录">
          {status === 'error' && loginType === 'account' && !loading && (
            <LoginMessage content="账户或密码错误（admin/ant.design）" />
          )}

          <UserName
            name="userName"
            placeholder="用户名: admin or user"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <Password
            name="password"
            placeholder="密码: ant.design"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
        </Tab>
        <Tab key="mobile" tab="手机号码登录">
          {status === 'error' && loginType === 'mobile' && !loading && (
            <LoginMessage content="验证码错误" />
          )}
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
            rules={[
              {
                required: true,
                message: '请输入验证码！',
              },
            ]}
          />
        </Tab>
        <div>
          <Checkbox checked={autoLogin} onChange={e => setAutoLogin(e.target.checked)}>
            自动登录
          </Checkbox>
          <Link style={{ float: 'right' }} to="/user/forgetPassword">
            忘记密码
          </Link>
        </div>
        <Submit loading={loading}>登录</Submit>
      </LoginForm>
      <div>
        <Link to="/user/register">还没有账户？去注册&gt;&gt;</Link>
      </div>
    </div>
  );
}
