import React, { useState } from 'react';
import ProLayout from '@ant-design/pro-layout';
import type { IRouteComponentProps } from 'umi';
import { Link, useModel } from 'umi';
import Iconfont from '@/components/Iconfont';
import CustomHeaderRight from './components/CustomHeaderRight';
import Logo from './components/Logo';
import defaultSettings from './defaultSettings';
import styles from './index.module.less';

export default function BasicLayout(props: IRouteComponentProps) {
  const [collapsed, handleMenuCollapse] = useState<boolean>(false);
  const { initialState } = useModel('@@initialState');

  const { menus = [] } = initialState!;
  const menuDataRender = () => menus;

  return (
    <ProLayout
      className={styles['basic-layout']}
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
      subMenuItemRender={(menuItemProps: any, defaultDom: any) => {
        return (
          <span>
            {menuItemProps.customIcon && (
              <Iconfont name={menuItemProps.customIcon} style={{ marginRight: 10, fontSize: 17 }} />
            )}
            <span>{defaultDom}</span>
          </span>
        );
      }}
      rightContentRender={(/** props: HeaderViewProps */) => <CustomHeaderRight />}
      onMenuHeaderClick={() => props.history.push('/')}
      menuDataRender={menuDataRender}
      {...defaultSettings}
    >
      {props.children}
    </ProLayout>
  );
}
