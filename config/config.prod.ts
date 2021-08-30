import { defineConfig } from 'umi';
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';
import routeConfig from './routeConfig';

export default defineConfig({
  antd: {},
  esbuild: {},
  // 配置具体含义见：https://github.com/umijs/umi-webpack-bundle-analyzer#options-for-plugin
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  dynamicImport: {
    loading: '@/components/LoadingPage/index',
  },
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },
  hash: true,
  history: {
    type: 'hash',
  },
  ignoreMomentLocale: true,
  inlineLimit: 10,
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
  scripts: [
    'https://cdn.bootcdn.net/ajax/libs/react/17.0.1/umd/react.production.min.js',
    'https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.1/umd/react-dom.production.min.js',
  ],
  outputPath: 'build',
  routes: routeConfig,
  theme: {},
  title: 'PC端开发模板',
  webpack5: {},
  chainWebpack(config) {
    config.plugin('dayjs').use(AntdDayjsWebpackPlugin);
  },
});
