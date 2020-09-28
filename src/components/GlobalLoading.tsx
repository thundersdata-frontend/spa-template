/*
 * @文件描述:  全局loading操作-用于非页面组件执行的地方，比如app.ts
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-07-08 11:37:57
 * @LastEditors: 廖军
 * @LastEditTime: 2020-07-08 11:49:23
 */

import React from 'react';
import ReactDOM from 'react-dom';
import LoadingPage from './LoadingPage';

/**
 * 加载全局loading
 */
export const showGlobalLoading = () => {
  const loadingDom = document.createElement('div');
  loadingDom.setAttribute('id', 'globalLoadingDom');
  loadingDom.style.position = 'absolute';
  loadingDom.style.top = '0';
  loadingDom.style.width = '100vw';
  loadingDom.style.height = '100vh';
  document.body.appendChild(loadingDom);
  ReactDOM.render(<LoadingPage />, loadingDom);
};

/**
 * 隐藏全局loading
 */
export const hideGlobalLoading = () => {
  const loadingDom = document.getElementById('globalLoadingDom');
  if (loadingDom) {
    document.body.removeChild(loadingDom);
  }
};
