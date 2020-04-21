import React, { useState } from 'react';
import ProLayout, { Settings, SettingDrawer } from '@ant-design/pro-layout';
import { IRouteComponentProps, Link } from 'umi';
import defaultSettings from './defaultSettings';

export default function BasicLayout(props: IRouteComponentProps) {
  const [collapsed, handleMenuCollapse] = useState<boolean>(false);
  const [settings, setSettings] = useState<Partial<Settings>>({
    ...defaultSettings,
    fixSiderbar: true,
  });

  return (
    <>
      <ProLayout
        menuHeaderRender={(logoDom, titleDom) => (
          <Link to="/">
            {logoDom}
            {titleDom}
          </Link>
        )}
        onCollapse={handleMenuCollapse}
        menuItemRender={(menuItemProps, defaultDom) =>
          menuItemProps.isUrl ? (
            defaultDom
          ) : (
            <Link className="qixian-menuItem" to={menuItemProps.path || '/'}>
              {defaultDom}
            </Link>
          )
        }
        collapsed={collapsed}
        onMenuHeaderClick={() => props.history.push('/')}
        {...settings}
      >
        {props.children}
      </ProLayout>
      <SettingDrawer
        settings={settings}
        onSettingChange={(config) => setSettings(config)}
      />
    </>
  );
}
