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
});
