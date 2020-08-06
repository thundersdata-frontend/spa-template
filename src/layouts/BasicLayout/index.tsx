import React, { useState } from 'react';
import ProLayout, { Settings, MenuDataItem, SettingDrawer } from '@ant-design/pro-layout';
import { IRouteComponentProps, Link, useModel } from 'umi';
import Iconfont from '@/components/Iconfont';
import { ConfigProvider, Empty, message } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { UseRequestProvider } from 'ahooks';
import CustomHeaderRight from './components/CustomHeaderRight';
import defaultSettings from './defaultSettings';
import Logo from './components/Logo';
import { validateMessages } from './validateMessages';
import { THROTTLE_INTERVAL } from '@/constant';

export default function BasicLayout(props: IRouteComponentProps) {
  const [collapsed, handleMenuCollapse] = useState<boolean>(false);
  const [settings, setSettings] = useState<Partial<Settings>>(defaultSettings);
  const { initialState } = useModel('@@initialState');

  const { menus = [] } = initialState as { menus: MenuDataItem[] };
  const menuDataRender = () => menus;

  return (
    <UseRequestProvider
      value={{
        /** 全局请求的默认配置 */
        onError: (error: Error) => {
          try {
            if (error) {
              const errorJSON = JSON.parse(error.message);
              message.error(errorJSON.message);
            }
          } catch (err) {
            console.error(err.message);
          }
        },
        throttleInterval: THROTTLE_INTERVAL,
      }}
    >
      <ConfigProvider
        locale={zhCN}
        renderEmpty={() => (
          <Empty image={require('../../assets/pic_empty.png')} description="暂无数据" />
        )}
        getPopupContainer={trigger => trigger.parentElement || document.body}
        form={{ validateMessages }}
      >
        <ProLayout
          logo={<Logo />}
          collapsed={collapsed}
          onCollapse={handleMenuCollapse}
          menuHeaderRender={(logoDom, titleDom) => (
            <Link to="/">
              {logoDom}
              {titleDom}
            </Link>
          )}
          menuItemRender={(menuItemProps, defaultDom) => {
            return (
              <Link to={menuItemProps.path || '/'}>
                <span>
                  {menuItemProps.customIcon && (
                    <Iconfont
                      name={menuItemProps.customIcon}
                      style={{ marginRight: 10, fontSize: 17 }}
                    />
                  )}
                </span>
                <span>{defaultDom}</span>
              </Link>
            );
          }}
          subMenuItemRender={(menuItemProps, defaultDom) => {
            return (
              <span>
                {menuItemProps.customIcon && (
                  <Iconfont
                    name={menuItemProps.customIcon}
                    style={{ marginRight: 10, fontSize: 17 }}
                  />
                )}
                <span>{defaultDom}</span>
              </span>
            );
          }}
          rightContentRender={(/** props: HeaderViewProps */) => <CustomHeaderRight />}
          onMenuHeaderClick={() => props.history.push('/')}
          menuDataRender={menuDataRender}
          disableMobile
          {...settings}
        >
          {props.children}
        </ProLayout>
        <SettingDrawer settings={settings} onSettingChange={setSettings} />
      </ConfigProvider>
    </UseRequestProvider>
  );
}
