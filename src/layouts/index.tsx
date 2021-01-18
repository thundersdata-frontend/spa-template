import React from 'react';
import type { IRouteComponentProps } from 'umi';
import { UseRequestProvider } from 'ahooks';
import { message, ConfigProvider, Empty } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import { THROTTLE_INTERVAL } from '@/constant';
import useAuthService, { AuthContext } from '@/pages/auth/useAuthService';
import { validateMessages } from './validateMessages';

export default (props: IRouteComponentProps) => {
  const authService = useAuthService();

  return (
    <UseRequestProvider
      value={{
        /** 全局请求的默认配置 */
        onError: (error: Error) => {
          console.error(error);
          if (error) {
            try {
              const errorJSON = JSON.parse(error.message);
              message.error(errorJSON.message);
            } catch (err) {
              message.error(err.message);
            }
          }
        },
        throttleInterval: THROTTLE_INTERVAL,
      }}
    >
      <ConfigProvider
        locale={zhCN}
        renderEmpty={() => (
          <Empty image={require('@/assets/pic_empty.png')} description="暂无数据" />
        )}
        getPopupContainer={(trigger) => trigger.parentElement || document.body}
        form={{ validateMessages }}
      >
        <AuthContext.Provider value={authService}>{props.children}</AuthContext.Provider>
      </ConfigProvider>
    </UseRequestProvider>
  );
};
