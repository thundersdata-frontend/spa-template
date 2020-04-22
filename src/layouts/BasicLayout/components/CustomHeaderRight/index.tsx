import React from 'react';
import { HeaderViewProps } from '@ant-design/pro-layout/lib/Header';

export default function CustomHeaderRight(props: HeaderViewProps) {
  console.log(props);
  return <div style={{ padding: '0 24px' }}>自定义头部右侧内容</div>;
}
