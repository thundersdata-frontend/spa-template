import { defineConfig } from 'umi';
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';
import routeConfig from './routeConfig';

export default defineConfig({
  title: 'template',
  dynamicImport: {
    loading: '@/components/Loading.tsx',
  },
  hash: true,
  outputPath: 'build',
  routes: routeConfig,
  polyfill: {
    imports: [
      'core-js/stable',
    ]
  },
  links: [{ rel: 'stylesheet', href: '//at.alicdn.com/t/font_1509107_vaarx0n4zz.css' }],
  chainWebpack(config) {
    config.plugin('dayjs').use(AntdDayjsWebpackPlugin);
  },
});
