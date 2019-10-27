import React, { useState, useEffect, useRef } from 'react';
import Link from 'umi/link';
import { Layout, Menu, Icon } from 'antd';
import { PageBasicPropsModel } from '@/interfaces/common';
import stores from '@/stores';
import { BaseStore } from '@/interfaces/base.store';
import { isEmpty } from 'lodash';
import { MenuItemConfig, CustomWindow } from '@/interfaces/common';
import styles from './index.module.less';

const { Sider } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

export default function Aside(props: PageBasicPropsModel) {
  const [collapsed, setCollapsed] = React.useState(false);
  const [selectedKeys, setSelectedKeys] = useState();
  const [openedKeys, setOpenedKeys] = useState();
  const openedKeysRef = useRef([]);

  // 读取store里面的menu
  const baseStore = stores.useStore('baseStore') as BaseStore;
  const { menus } = baseStore;
  const menuList = menus.concat(((window as unknown) as CustomWindow).gMenus);

  // 根据location的地址，自动选中和打开对应的菜单
  useEffect(() => {
    const { pathname } = props.location;
    setSelectedKeys([pathname]);
    setOpenedKeys(['/' + pathname.split('/')[1]]);
  }, [props.location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);

  const handleCollapse = () => {
    if (collapsed) {
      setOpenedKeys(openedKeysRef.current);
      setCollapsed(false);
    } else {
      openedKeysRef.current = openedKeys;
      setOpenedKeys([]);
      setCollapsed(true);
    }
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={handleCollapse} width={256}>
      <div className={styles.logo}>logo</div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys}
        openKeys={openedKeys}
        onSelect={({ key }) => {
          setSelectedKeys([key]);
        }}
        onOpenChange={openKeys => {
          setOpenedKeys([openKeys.pop()]);
        }}
      >
        {menuList.map(item => {
          if (item.children && !isEmpty(item.children)) {
            return (
              <SubMenu
                key={item.link}
                title={
                  <span>
                    <Icon type="pie-chart" />
                    <span>{item.name}</span>
                  </span>
                }
              >
                {item.children.map(ele => (
                  <MenuItem key={ele.link}>
                    {ele.link ? <LinkItem {...ele} /> : <NormalItem {...ele} />}
                  </MenuItem>
                ))}
              </SubMenu>
            );
          }
          return (
            <MenuItem key={item.link}>
              {item.link ? <LinkItem {...item} /> : <NormalItem {...item} />}
            </MenuItem>
          );
        })}
      </Menu>
    </Sider>
  );
}
const LinkItem = (menuItem: MenuItemConfig) => (
  <>
    <Icon type="pie-chart" />
    <Link to={menuItem.link || ''}>
      <span className={styles.title}>{menuItem.name}</span>
    </Link>
  </>
);

const NormalItem = (menuItem: MenuItemConfig) => (
  <>
    <Icon type="pie-chart" />
    <span className={styles.title}>{menuItem.name}</span>
  </>
);
