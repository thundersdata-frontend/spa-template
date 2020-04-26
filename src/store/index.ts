/*
 * @文件描述: 
 * @公司: thundersdata
 * @作者: 黄姗姗
 * @Date: 2020-04-24 14:10:15
 * @LastEditors: 黄姗姗
 * @LastEditTime: 2020-04-24 14:17:24
 */
import { createStore } from '@ice/store';

import home from './models/home';

const store = createStore({
  home
});

export default store;