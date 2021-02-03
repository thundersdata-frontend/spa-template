import React from 'react';
import { Avatar, Dropdown, Menu, Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import useSWR from 'swr';
import useHeaderService from './useHeaderService';

function CustomHeaderRight(/** props: HeaderViewProps */) {
  const { data, isValidating } = useSWR('/user/fetch');
  const { dropdownClick } = useHeaderService();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: 10 }}>
        <span>欢迎您，</span>
        {isValidating && <Spin />}
        {data && <span>{data.data?.name}</span>}
      </div>
      <Dropdown
        overlay={
          <Menu onClick={({ key }) => dropdownClick(key)}>
            <Menu.Item key="personal">个人信息</Menu.Item>
            <Menu.Item key="logout">退出登录</Menu.Item>
          </Menu>
        }
      >
        {data ? (
          <Avatar size="large" src={data.data?.avatar} />
        ) : (
          <Avatar size="large" icon={<UserOutlined />} />
        )}
      </Dropdown>
    </div>
  );
}
export default React.memo(CustomHeaderRight);
