import { defineConfig } from 'umi';
import routeConfig from './routeConfig';

export default defineConfig({
  title: 'template',
  dynamicImport: {
    loading: '@/components/Loading.tsx',
  },
  hash: true,
  ignoreMomentLocale: true,
  outputPath: 'build',
  routes: routeConfig,
  antd: {
    dark: false,
  },
  links: [{ rel: 'stylesheet', href: '//at.alicdn.com/t/font_1509107_vaarx0n4zz.css' }]
});
