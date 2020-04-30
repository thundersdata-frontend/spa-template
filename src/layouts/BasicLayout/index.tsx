import React, { useState } from 'react';
import ProLayout, {
  Settings,
  MenuDataItem,
  getMenuData,
} from '@ant-design/pro-layout';
import { IRouteComponentProps, Link, useModel } from 'umi';
import Iconfont from '@/components/Iconfont';
import CustomHeaderRight from './components/CustomHeaderRight';
import defaultSettings from './defaultSettings';
import Logo from './components/Logo';
import { ConfigProvider, Empty, Breadcrumb } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

export default function BasicLayout(props: IRouteComponentProps) {
  const [collapsed, handleMenuCollapse] = useState<boolean>(false);
  const [settings] = useState<Partial<Settings>>(defaultSettings);
  const { initialState } = useModel('@@initialState');

  const { menus = [] } = initialState as { menus: MenuDataItem[] };
  const menuDataRender = () => menus;
  const { breadcrumb } = getMenuData(
    props.route.routes!,
    { locale: true },
    () => '',
    menuDataRender,
  );

  let breadcrumbs: { name: string; link?: string }[] = [];
  const config = Object.entries(breadcrumb).find(
    ([key]) => key === props.location.pathname,
  );
  if (config) {
    const { locale = '', parentKeys = [] } = config[1];
    if (parentKeys.length > 1) {
      const names = locale?.toString().replace('menu', '首页').split('.');
      breadcrumbs = names?.map((name, index) => ({
        name,
        link: index === 0 ? parentKeys[index] : undefined,
      }));
    }
  }

  return (
    <ConfigProvider
      locale={zhCN}
      renderEmpty={() => (
        <Empty
          image={require('../../assets/pic_empty.png')}
          description="暂无数据"
        />
      )}
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
        rightContentRender={
          (/** props: HeaderViewProps */) => <CustomHeaderRight />
        }
        onMenuHeaderClick={() => props.history.push('/')}
        menuDataRender={menuDataRender}
        {...settings}
      >
        {breadcrumbs.length > 0 && (
          <Breadcrumb style={{ marginBottom: 16 }}>
            {breadcrumbs.map((item) => (
              <Breadcrumb.Item key={item.name}>
                {item.link ? (
                  <Link to={item.link}>{item.name}</Link>
                ) : (
                  <span>{item.name}</span>
                )}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        )}
        {props.children}
      </ProLayout>
      {/* <SettingDrawer settings={settings} onSettingChange={setSettings} /> */}
    </ConfigProvider>
  );
}
