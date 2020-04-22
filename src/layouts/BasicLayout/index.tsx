import React, { useState } from 'react';
import ProLayout, { Settings, SettingDrawer } from '@ant-design/pro-layout';
import { IRouteComponentProps, Link } from 'umi';
import { CustomWindow } from '@/interfaces/common';
import Iconfont from '@/components/Iconfont';
import { HeaderViewProps } from '@ant-design/pro-layout/lib/Header';
import CustomHeaderRight from './components/CustomHeaderRight';
import defaultSettings from './defaultSettings';

export default function BasicLayout(props: IRouteComponentProps) {
  const [collapsed, handleMenuCollapse] = useState<boolean>(false);
  const [settings, setSettings] = useState<Partial<Settings>>(defaultSettings);

  return (
    <>
      <ProLayout
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
        rightContentRender={(props: HeaderViewProps) => (
          <CustomHeaderRight {...props} />
        )}
        onMenuHeaderClick={() => props.history.push('/')}
        menuDataRender={() => ((window as unknown) as CustomWindow).gMenus}
        {...settings}
      >
        {props.children}
      </ProLayout>
      <SettingDrawer settings={settings} onSettingChange={setSettings} />
    </>
  );
}
