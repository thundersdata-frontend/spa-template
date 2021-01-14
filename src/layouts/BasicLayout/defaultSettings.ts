/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-04-22 16:22:12
 * @LastEditors: 陈杰
 * @LastEditTime: 2020-04-26 16:49:00
 */
import type { Settings } from '@ant-design/pro-layout';

const defaultSettings: Partial<Settings> = {
  navTheme: 'dark',
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: false,
    defaultOpenAll: false,
  },
  title: '中台模板'
};

export default defaultSettings;
