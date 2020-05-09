/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-04-22 16:17:52
 * @LastEditors: 陈杰
 * @LastEditTime: 2020-05-09 18:42:31
 */
import { defineConfig } from 'umi';
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';

export default defineConfig({
  chainWebpack(config) {
    config.plugin('dayjs').use(AntdDayjsWebpackPlugin);
    // config.merge({
    //   optimization: {
    //     minimize: true,
    //     splitChunks: {
    //       chunks: 'all',
    //       minSize: 30000,
    //       minChunks: 3,
    //       automaticNameDelimiter: '.',
    //       cacheGroups: {
    //         vendor: {
    //           name: 'vendors',
    //           test({ resource }: unknown) {
    //             return /[\\/]node_modules[\\/]/.test(resource);
    //           },
    //           priority: 10,
    //         }
    //       },
    //     },
    //   }
    // });
  },
});
