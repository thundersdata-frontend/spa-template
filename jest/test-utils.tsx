import { render } from '@testing-library/react';
import { UseRequestProvider } from 'ahooks';
import { message, ConfigProvider, Empty } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import useAuthService, { AuthContext } from '../src/pages/Auth/useAuthService';

const AllTheProviders = ({ children }) => {
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
      }}
    >
      <ConfigProvider
        locale={zhCN}
        renderEmpty={() => (
          <Empty image={require('@/assets/pic_empty.png')} description="暂无数据" />
        )}
        getPopupContainer={(trigger) => trigger.parentElement || document.body}
      >
        <AuthContext.Provider value={authService}>{children}</AuthContext.Provider>
      </ConfigProvider>
    </UseRequestProvider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
