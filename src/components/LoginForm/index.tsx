/*
 * @文件描述: 登录的表单
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-04-26 16:31:35
 * @LastEditors: 陈杰
 * @LastEditTime: 2020-04-26 20:50:14
 */
import React, { useState, useEffect } from 'react';
import type { FormInstance } from 'antd/es/form';
import LoginContext from './LoginContext';
import type { LoginItemProps } from './LoginItem';
import LoginItem from './LoginItem';
import LoginSubmit from './LoginSubmit';
import LoginTab from './LoginTab';
import { Form, Tabs } from 'antd';
import classNames from 'classnames';
import type { LoginParamsType } from './service';
import styles from './index.less';

export interface LoginProps {
  activeKey?: string;
  onTabChange?: (key: string) => void;
  style?: React.CSSProperties;
  onSubmit?: (values: LoginParamsType) => void;
  className?: string;
  form?: FormInstance;
  children: React.ReactElement<typeof LoginTab>[];
}

interface LoginType extends React.FC<LoginProps> {
  Tab: typeof LoginTab;
  Submit: typeof LoginSubmit;
  UserName: React.FunctionComponent<LoginItemProps>;
  Password: React.FunctionComponent<LoginItemProps>;
  Mobile: React.FunctionComponent<LoginItemProps>;
  Captcha: React.FunctionComponent<LoginItemProps>;
}

const LoginForm: LoginType = ({ className, activeKey, onTabChange, form, onSubmit, children }) => {
  const [tabs, setTabs] = useState<string[]>([]);
  const [active, setActive] = useState<Record<string, (string | Record<string, string>)[]>>();
  const [type, setType] = useState<string>();

  useEffect(() => {
    setType(activeKey);
  }, [activeKey]);

  const TabChildren: React.ReactComponentElement<typeof LoginTab>[] = [];
  const otherChildren: React.ReactElement<unknown>[] = [];
  React.Children.forEach(
    children,
    (child: React.ReactComponentElement<typeof LoginTab> | React.ReactElement<unknown>) => {
      if (!child) {
        return;
      }
      if ((child.type as { typeName: string }).typeName === 'LoginTab') {
        TabChildren.push(child as React.ReactComponentElement<typeof LoginTab>);
      } else {
        otherChildren.push(child);
      }
    },
  );
  return (
    <LoginContext.Provider
      value={{
        tabUtil: {
          addTab: id => {
            setTabs([...tabs, id]);
          },
          removeTab: id => {
            setTabs(tabs.filter(currentId => currentId !== id));
          },
        },
        updateActive: activeItem => {
          if (active && type) {
            if (active[type]) {
              active[type].push(activeItem);
            } else {
              active[type] = [activeItem];
            }
          }
          setActive(active);
        },
      }}
    >
      <div className={classNames(className, styles.login)}>
        <Form
          form={form}
          onFinish={values => {
            onSubmit?.(values as LoginParamsType);
          }}
        >
          {tabs.length ? (
            <React.Fragment>
              <Tabs
                className={styles.tabs}
                animated={false}
                activeKey={type}
                onChange={activeKey => {
                  setType(activeKey);
                  onTabChange?.(activeKey);
                }}
              >
                {TabChildren}
              </Tabs>
              {otherChildren}
            </React.Fragment>
          ) : (
            children
          )}
        </Form>
      </div>
    </LoginContext.Provider>
  );
};

LoginForm.Tab = LoginTab;
LoginForm.Submit = LoginSubmit;

LoginForm.UserName = LoginItem.UserName;
LoginForm.Password = LoginItem.Password;
LoginForm.Mobile = LoginItem.Mobile;
LoginForm.Captcha = LoginItem.Captcha;

export default LoginForm;
