import React from 'react';
import { Button } from 'antd';
import { history } from 'umi';

import img404 from '@/assets/pic_404.png';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ width: 600, textAlign: 'center' }}>
        <img alt="" src={img404} style={{ width: '100%' }} />
        <div style={{ lineHeight: 3 }}>对不起，您访问的页面不存在</div>
        <Button type="primary" onClick={() => history.push('/')}>
          返回首页
        </Button>
      </div>
    </div>
  );
};
