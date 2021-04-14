import React from 'react';
import type { IRouteComponentProps } from 'umi';
import { ConfigProvider, Empty, message } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { SWRConfig } from 'swr';

import useAuthService, { AuthContext } from '@/pages/auth/useAuthService';
import { validateMessages } from './validateMessages';

export default (props: IRouteComponentProps) => {
  const authService = useAuthService();

  return (
    <ConfigProvider
      locale={zhCN}
      renderEmpty={() => <Empty image={require('@/assets/pic_empty.png')} description="暂无数据" />}
      form={{ validateMessages }}
    >
      <SWRConfig
        value={{
          /** 是否开启suspense模式，默认值false */
          // suspense: false,
          /** 默认的请求方式 */
          // fetcher = window.fetch(url).then(res => res.json())
          /** 单个hooks返回的初始数据 */
          // initialData
          /** 在挂载组件时启用或禁用自动重新验证 (默认情况下，当没有设置 initialData 时，在挂载时进行重新验证，使用该 flag 强制行为) */
          // revalidateOnMount
          /** 窗口聚焦时自动重新验证 */
          // revalidateOnFocus = true
          /** 浏览器恢复网络连接时自动重新验证 */
          // revalidateOnReconnect = true
          /** 轮询间隔 (默认 disabled) */
          // refreshInterval = 0
          /** 窗口不可见时进行轮询 (如果启用了 refreshInterval) */
          // refreshWhenHidden = false
          /** 浏览器离线时轮询 */
          // refreshWhenOffline = false
          /** fetcher 有错误时重试 */
          // shouldRetryOnError = true
          /** 在该时间段内使用相同的 key 请求时只发出一个 */
          // dedupingInterval = 2000
          /** 在一段时间内只重新验证一次 */
          // focusThrottleInterval = 5000
          /** 弱网环境下 errorRetryInterval = 10000, loadingTimeout=5000 */
          // loadingTimeout = 3000
          // errorRetryInterval = 5000
          /** 错误重试的最大次数 */
          // errorRetryCount
          /** 请求加载时间过长时的回调函数 */
          // onLoadingSlow(key, config)
          /** 请求成功完成时的回调函数 */
          // onSuccess(data, key, config)
          /** 请求返回错误时的回调函数 */
          onError: err => {
            message.error(err.message);
          },
          /** 错误重试的处理函数 */
          // onErrorRetry(err, key, config, revalidate, revalidateOps)
          /** 比较函数，用来检测返回的数据何时已更改，以防止伪造的重新渲染。默认情况下使用 dequal */
          // compare(a, b)
          /** 用于检测是否暂停重新验证的函数，当返回 true 时将忽略所请求的数据和错误。默认返回 false */
          // isPaused()
        }}
      >
        <AuthContext.Provider value={authService}>{props.children}</AuthContext.Provider>
      </SWRConfig>
    </ConfigProvider>
  );
};
