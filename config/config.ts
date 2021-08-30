import { defineConfig } from 'umi';
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';
import routeConfig from './routeConfig';

export default defineConfig({
  antd: {
    dark: false,
    compact: false,
  },
  esbuild: {},
  dynamicImportSyntax: {},
  fastRefresh: {},
  hash: true,
  history: {
    type: 'hash',
  },
  ignoreMomentLocale: true,
  mfsu: {},
  links: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    {
      rel: 'stylesheet',
      href: '//at.alicdn.com/t/font_1905159_jylqduh3ufd.css',
    },
  ],
  proxy: {},
  routes: routeConfig,
  theme: {},
  title: 'PC端开发模板',
  webpack5: {},
  chainWebpack(config) {
    config.plugin('dayjs').use(AntdDayjsWebpackPlugin);
  },
});
