import React from 'react';
import { Layout } from 'antd';
import { CopyrightOutlined } from '@ant-design/icons';
import type { IRouteComponentProps } from 'umi';
import styles from './index.module.less';

const { Content, Footer } = Layout;

export default function SignInLayout(props: IRouteComponentProps) {
  return (
    <Layout>
      <Content className={styles.content}>
        <div className={styles.bg} />
        <div className={styles.wrap}>
          <h1
            style={{
              textAlign: 'center',
              marginBottom: 40,
            }}
          >
            <img
              style={{
                height: '44px',
                marginRight: 16,
              }}
              alt="logo"
              src={require('@/assets/logo.png')}
            />
            雷数科技
          </h1>
          {props.children}
        </div>
      </Content>
      <Footer className={styles.footer}>
        Copyright&nbsp;
        <CopyrightOutlined />
        &nbsp;杭州雷数前端团队出品
      </Footer>
    </Layout>
  );
}
