import React, { useState } from 'react';
import ProLayout, { Settings, SettingDrawer, MenuDataItem } from '@ant-design/pro-layout';
import { IRouteComponentProps, Link, useModel } from 'umi';
import Iconfont from '@/components/Iconfont';
import CustomHeaderRight from './components/CustomHeaderRight';
import defaultSettings from './defaultSettings';

export default function BasicLayout(props: IRouteComponentProps) {
  const [collapsed, handleMenuCollapse] = useState<boolean>(false);
  const [settings, setSettings] = useState<Partial<Settings>>(defaultSettings);
  const { initialState } = useModel('@@initialState');

  const { menus = []} = initialState as { menus: MenuDataItem[] };
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
        rightContentRender={(/** props: HeaderViewProps */) => (
          <CustomHeaderRight />
        )}
        onMenuHeaderClick={() => props.history.push('/')}
        menuDataRender={() => menus}
        {...settings}
      >
        {props.children}
      </ProLayout>
      <SettingDrawer settings={settings} onSettingChange={setSettings} />
    </>
  );
}
