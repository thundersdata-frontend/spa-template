/*
 * @文件描述: 注册的表单
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-04-26 16:31:35
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-10-21 09:52:50
 */
import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Input, Row, Select, message } from 'antd';
import type { Store } from 'antd/es/form/interface';
import { Link, history } from 'umi';
import type { StateType } from './service';
import { fakeRegister } from './service';
import styles from './index.less';
import { useRequest } from 'ahooks';

const FormItem = Form.Item;
const { Option } = Select;
const InputGroup = Input.Group;

export default function RegisterForm() {
  const [count, setCount]: [number, any] = useState(0);
  const [prefix, setPrefix]: [string, any] = useState('86');
  let interval: number | undefined;
  const [form] = Form.useForm();

  useEffect(
    () => () => {
      clearInterval(interval);
    },
    [interval],
  );

  const onGetCaptcha = () => {
    let counts = 59;
    setCount(counts);
    interval = window.setInterval(() => {
      counts -= 1;
      setCount(counts);
      if (counts === 0) {
        clearInterval(interval);
      }
    }, 1000);
  };

  const { loading: submitting, run: register } = useRequest<StateType>(fakeRegister, {
    manual: true,
    onSuccess: (data, params) => {
      if (data.status === 'ok') {
        message.success('注册成功！');
        history.push({
          pathname: '/user/register-result',
          state: {
            account: params.email,
          },
        });
      }
    },
  });
  const onFinish = (values: Store) => {
    register(values);
  };

  const changePrefix = (value: string) => {
    setPrefix(value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.title}>新用户注册</div>
      <Form form={form} name="UserRegister" onFinish={onFinish}>
        <FormItem
          name="mail"
          rules={[
            {
              required: true,
              message: '请输入邮箱地址!',
            },
            {
              type: 'email',
              message: '邮箱地址格式错误!',
            },
          ]}
        >
          <Input size="large" placeholder="邮箱" autoComplete="off" />
        </FormItem>
        <FormItem
          name="password"
          className={
            form.getFieldValue('password') &&
            form.getFieldValue('password').length > 0 &&
            styles.password
          }
          rules={[
            { required: true, message: '请输入密码' },
            { min: 6, message: '密码最少为6位' },
          ]}
        >
          <Input
            size="large"
            type="password"
            placeholder="至少6位密码，区分大小写"
            autoComplete="off"
          />
        </FormItem>
        <FormItem
          name="confirm"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: '请输入确认密码',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('两次输入的密码不一致'));
              },
            }),
          ]}
        >
          <Input size="large" type="password" placeholder="确认密码" autoComplete="off" />
        </FormItem>
        <InputGroup compact>
          <Select size="large" value={prefix} onChange={changePrefix} style={{ width: '20%' }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
          </Select>
          <FormItem
            style={{ width: '80%' }}
            name="mobile"
            rules={[
              {
                required: true,
                message: '请输入手机号!',
              },
              {
                pattern: /^\d{11}$/,
                message: '手机号格式错误!',
              },
            ]}
          >
            <Input size="large" placeholder="手机号" autoComplete="off" />
          </FormItem>
        </InputGroup>
        <Row gutter={8}>
          <Col span={16}>
            <FormItem
              name="captcha"
              rules={[
                {
                  required: true,
                  message: '请输入验证码!',
                },
              ]}
            >
              <Input size="large" placeholder="验证码" autoComplete="off" />
            </FormItem>
          </Col>
          <Col span={8}>
            <Button
              size="large"
              disabled={!!count}
              className={styles.getCaptcha}
              onClick={onGetCaptcha}
            >
              {count ? `${count} s` : '获取验证码'}
            </Button>
          </Col>
        </Row>
        <FormItem>
          <Button
            size="large"
            loading={submitting}
            className={styles.submit}
            type="primary"
            htmlType="submit"
          >
            <span>注册</span>
          </Button>
        </FormItem>
      </Form>
      <div>
        <Link to="/user/login">
          <span>已有账户？去登录&gt;&gt;</span>
        </Link>
      </div>
    </div>
  );
}
