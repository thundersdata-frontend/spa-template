import React from 'react';
import { Breadcrumb } from 'antd';

interface ListItem {
  path?: string;
  breadcrumbName: string;
}

export default ({ list }: { list: ListItem[] }) => (
  <Breadcrumb style={{ marginBottom: 12 }}>
    {list.map(item => (
      <Breadcrumb.Item key={item.breadcrumbName}>
        {item.path ? <a href={item.path}>{item.breadcrumbName}</a> : item.breadcrumbName}
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
);
