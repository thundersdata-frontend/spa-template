import type { Settings } from '@ant-design/pro-layout';

const defaultSettings: Partial<Settings> & { disableMobile?: boolean } = {
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
  disableMobile: false,
  title: '中台模板',
};

export default defaultSettings;
