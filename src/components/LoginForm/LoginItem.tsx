import { Button, Col, Input, Row, Form, message } from 'antd';
import React, { useState, useCallback, useEffect } from 'react';
import omit from 'omit.js';
import type { FormItemProps } from 'antd/es/form/FormItem';
import ItemMap from './map';
import type { LoginContextProps } from './LoginContext';
import LoginContext from './LoginContext';
import styles from './index.less';
import { AUTH_API_URL, LOGIN_CONFIG } from '@/constant';
import { SmsTypeEnum } from '@/enums';
import { useRequest } from 'ahooks';
import request from 'umi-request';
import type { Store } from 'antd/es/form/interface';

export type WrappedLoginItemProps = LoginItemProps;
export type LoginItemKeyType = keyof typeof ItemMap;
export interface LoginItemType {
  UserName: React.FC<WrappedLoginItemProps>;
  Password: React.FC<WrappedLoginItemProps>;
  Mobile: React.FC<WrappedLoginItemProps>;
  Captcha: React.FC<WrappedLoginItemProps>;
}

export interface LoginItemProps extends Partial<FormItemProps> {
  name?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  buttonText?: React.ReactNode;
  countDown?: number;
  getCaptchaButtonText?: string;
  getCaptchaSecondText?: string;
  updateActive?: LoginContextProps['updateActive'];
  type?: string;
  defaultValue?: string;
  customProps?: Record<string, unknown>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tabUtil?: LoginContextProps['tabUtil'];
  smsType?: number;
}

const FormItem = Form.Item;

const getFormItemOptions = ({
  onChange,
  defaultValue,
  customProps = {},
  rules,
}: LoginItemProps) => {
  const options: {
    rules?: LoginItemProps['rules'];
    onChange?: LoginItemProps['onChange'];
    initialValue?: LoginItemProps['defaultValue'];
  } = {
    rules: rules || (customProps.rules as LoginItemProps['rules']),
  };
  if (onChange) {
    options.onChange = onChange;
  }
  if (defaultValue) {
    options.initialValue = defaultValue;
  }
  return options;
};

const LoginItem: React.FC<LoginItemProps> = props => {
  const [count, setCount] = useState<number>(props.countDown || 0);
  const [timing, setTiming] = useState(false);
  // 这么写是为了防止restProps中 带入 onChange, defaultValue, rules props tabUtil
  const {
    onChange,
    customProps,
    defaultValue,
    rules,
    name,
    getCaptchaButtonText,
    getCaptchaSecondText,
    updateActive,
    type,
    tabUtil,
    smsType = SmsTypeEnum.登录,
    ...restProps
  } = props;

  /**
   * 获取验证码
   * http://mindoc.internal.thundersdata.com/docs/platform/platform-1atuk4sroh108
   * @param values
   */
  const fetchVerificationCode = async (values: Store) => {
    const result = await request(`${AUTH_API_URL}/authz/sms/send`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
        mobile: values.mobilePhone,
        type: values.type,
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

  /**
   * 获取验证码
   */
  const { run: sendVerificationCode } = useRequest(fetchVerificationCode, {
    manual: true,
    onSuccess: () => {
      message.success('获取验证码成功！');
      setTiming(true);
    },
  });

  const onGetCaptcha = useCallback(async (mobilePhone: string) => {
    if (!mobilePhone) {
      message.warning('请输入手机号码!');
      return;
    }
    sendVerificationCode({
      mobilePhone,
      type: smsType,
    });
  }, [sendVerificationCode, smsType]);

  useEffect(() => {
    let interval: number = 0;
    const { countDown } = props;
    if (timing) {
      interval = window.setInterval(() => {
        setCount(preSecond => {
          if (preSecond <= 1) {
            setTiming(false);
            clearInterval(interval);
            // 重置秒数
            return countDown || 60;
          }
          return preSecond - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [props, timing]);
  if (!name) {
    return null;
  }
  // get getFieldDecorator props
  const options = getFormItemOptions(props);
  const otherProps = restProps || {};

  if (type === 'Captcha') {
    const inputProps = omit(otherProps, ['countDown']);

    return (
      <FormItem shouldUpdate>
        {({ getFieldValue }) => (
          <Row gutter={8}>
            <Col span={16}>
              <FormItem name={name} {...options}>
                <Input {...customProps} {...inputProps} autoComplete="off" />
              </FormItem>
            </Col>
            <Col span={8}>
              <Button
                disabled={timing}
                className={styles.getCaptcha}
                size="large"
                onClick={() => {
                  const value = getFieldValue('mobile');
                  onGetCaptcha(value);
                }}
              >
                {timing ? `${count} 秒` : '获取验证码'}
              </Button>
            </Col>
          </Row>
        )}
      </FormItem>
    );
  }
  return (
    <FormItem name={name} {...options}>
      <Input {...customProps} {...otherProps} autoComplete="off" />
    </FormItem>
  );
};

const LoginItems: Partial<LoginItemType> = {};

Object.keys(ItemMap).forEach(key => {
  const item = ItemMap[key];
  LoginItems[key] = (props: LoginItemProps) => (
    <LoginContext.Consumer>
      {context => (
        <LoginItem
          customProps={item.props}
          rules={item.rules}
          {...props}
          type={key}
          {...context}
          updateActive={context.updateActive}
        />
      )}
    </LoginContext.Consumer>
  );
});

export default LoginItems as LoginItemType;
