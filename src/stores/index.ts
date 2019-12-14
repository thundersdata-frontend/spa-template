/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-09-29 15:18:10
 * @LastEditors: 陈杰
 * @LastEditTime: 2019-12-14 19:23:15
 */
import IceStore from '@ice/store';
import logger from '@ice/store-logger';
import baseStore from './base';
import { Middleware } from '@ice/store/lib/types';

const iceStore = new IceStore();
const middleware: Middleware[] = [];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}
iceStore.applyMiddleware(middleware);

const stores = iceStore.registerStores({
  baseStore,
});
export default stores;
