import React from 'react';
import Loading from '../Loading';
import { hideGlobalLoading } from '../GlobalLoading';

export default () => {
  /**
   * 分为3个阶段
   * 1、app.ts 文件，初始化获取资源菜单、用户数据，会显示全局LoadingPage；
   * 2、上一部完成，但layout资源没有加载完成，会继续出现全局loading（这个loading是config里面的配置）；
   * 3、为了使显示效果的连贯与统一，没有加载到layout时使用LoadingPage效果，否则隐藏LoadingPage，展示普通Loading。
   */
  if (document.getElementsByClassName('ant-layout').length > 0) {
    hideGlobalLoading();
    return <Loading />;
  }
  return (
    <div
      style={{
        backgroundImage: `url(${require('./assets/loading-bg.jpg')})`,
        backgroundSize: '100% 100%',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <img src={require('./assets/sign_logo.png')} alt="LOGO" />
        <div
          style={{
            fontSize: 40,
            padding: 16,
            fontWeight: 300,
            marginBottom: 16,
          }}
        />
        <img src={require('./assets/loading.gif')} alt="loading" />
      </div>
    </div>
  );
};
