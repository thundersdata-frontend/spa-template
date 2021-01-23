import React from 'react';
import { Layout } from 'antd';
import { CopyrightOutlined } from '@ant-design/icons';
import type { IRouteComponentProps } from 'umi';
import styles from './index.module.less';

const { Header, Content, Footer } = Layout;

export default function SignInLayout(props: IRouteComponentProps) {
  return (
    <Layout
      style={{
        backgroundImage: `url(${require('./assets/login_bg.png')})`,
      }}
    >
      <Header className={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <img src={require('./assets/sign_logo.png')} alt="雷数科技" />
        </div>
      </Header>
      <Content className={styles.content}>
        <div style={{ flex: 1 }}>
          <img src={require('./assets/login_left.png')} alt="" style={{ width: '100%' }} />
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {props.children}
        </div>
      </Content>
      <Footer>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Copyright&nbsp;
          <CopyrightOutlined />
          &nbsp;杭州雷数前端团队出品
        </div>
      </Footer>
    </Layout>
  );
}
