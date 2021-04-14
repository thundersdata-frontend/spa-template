import React, { useState } from 'react';
import ProLayout, { MenuDataItem } from '@ant-design/pro-layout';
import type { IRouteComponentProps } from 'umi';
import { Link, useModel } from 'umi';
import Iconfont from '@/components/Iconfont';
import CustomHeaderRight from './components/CustomHeaderRight';
import Logo from './components/Logo';
import defaultSettings from './defaultSettings';
import styles from './index.module.less';

const iconMap = {
  iconyunyingguanli: <Iconfont name="iconyunyingguanli" style={{ marginRight: 10 }} />,
  icongongsi: <Iconfont name="icongongsi" style={{ marginRight: 10 }} />,
};
export default function BasicLayout(props: IRouteComponentProps) {
  const [collapsed, handleMenuCollapse] = useState<boolean>(false);
  const { initialState } = useModel('@@initialState');

  const { menus = [] } = initialState!;

  const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
    menus.map(({ icon, children, ...item }) => ({
      ...item,
      icon: icon && iconMap[icon as string],
      children: children && loopMenuItem(children),
    }));

  return (
    <ProLayout
      className={styles['basic-layout']}
      logo={<Logo />}
      collapsed={collapsed}
      onCollapse={handleMenuCollapse}
      menuDataRender={() => loopMenuItem(menus)}
      menuItemRender={(menuItemProps, defaultDom) => {
        return <Link to={menuItemProps.path || '/'}>{defaultDom}</Link>;
      }}
      rightContentRender={(/** props: HeaderViewProps */) => <CustomHeaderRight />}
      onMenuHeaderClick={() => props.history.push('/')}
      {...defaultSettings}
    >
      {props.children}
    </ProLayout>
  );
}
