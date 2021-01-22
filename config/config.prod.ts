/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-04-26 10:26:49
 * @LastEditors: 廖军
 * @LastEditTime: 2020-07-24 16:15:33
 */
import { defineConfig } from 'umi';
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';
import SentryWebpackPlugin from '@sentry/webpack-plugin';
import routeConfig from './routeConfig';

export default defineConfig({
  dynamicImport: {
    loading: '@/components/LoadingPage/index',
  },
  hash: true,
  outputPath: 'build',
  routes: routeConfig,
  esbuild: {},
  metas: [
    { name: 'msapplication-TileColor', content: '#da532c' },
    { name: 'theme-color', content: '#ffffff' },
  ],
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },
  scripts: [
    'https://cdn.bootcdn.net/ajax/libs/react/17.0.1/umd/react.production.min.js',
    'https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js',
  ],
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
      href: '//at.alicdn.com/t/font_1509107_vaarx0n4zz.css',
    },
  ],
  inlineLimit: 10,
  chunks: ['vendors', 'umi'],
  chainWebpack(config) {
    config.plugin('dayjs').use(AntdDayjsWebpackPlugin);
    config.plugin('sentry').use(
      new SentryWebpackPlugin({
        url: 'http://60.12.241.84:29177/',
        authToken: '2e322b834f5945989d35cd4065c9c2d651b25f5d9ae84911b125487f6575a36e',
        org: 'leishu',
        project: 'spa-template',
        include: '.',
        ignore: ['node_modules'],
      }),
    );
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          automaticNameDelimiter: '.',
          name: true,
          minSize: 30000,
          minChunks: 1,
          cacheGroups: {
            vendors: {
              name: 'vendors',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]/,
              priority: -12,
            },
          },
        },
      },
    });
  },
});
