/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-04-22 16:17:52
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-14 18:13:23
 */

import { LOGIN_CONFIG } from '../src/constant';

export default [
  ...(LOGIN_CONFIG.isSSO
    ? []
    : [
        {
          path: '/user',
          component: '@/layouts/SignInLayout',
          routes: [
            {
              path: '/user/login',
              component: './user/login',
              title: '登录',
            },
            {
              path: '/user/forgetPassword',
              component: './user/forgetPassword',
              title: '忘记密码',
            },
            {
              path: '/user/register',
              component: './user/register',
              title: '注册',
            },
          ],
        },
      ]),
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    wrappers: ['@/wrappers/auth', '@/wrappers/guard'],
    routes: [
      {
        path: '/homepage',
        component: './homepage',
      },
      {
        path: '/',
        redirect: '/homepage',
      },
      {
        path: '*',
        component: './404',
      },
    ],
  },
];
