import { Settings } from '@ant-design/pro-layout';

const defaultSettings: Partial<Settings> = {
  navTheme: 'dark',
  primaryColor: '#1890ff',
  layout: 'sidemenu',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: true,
    defaultOpenAll: false,
  },
  title: 'Ant Design Pro'
};

export default defaultSettings;
