/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-04-22 16:17:52
 * @LastEditors: 陈杰
 * @LastEditTime: 2020-05-20 10:51:38
 */
export default [
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
        path: '/user/register',
        component: './user/register',
        title: '注册',
      },
    ],
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    wrappers: ['@/wrappers/auth', '@/wrappers/guard'],
    routes: [
      {
        path: '/modal',
        routes: [
          { path: '/modal/form', component: './modal/form' },
          { path: '/modal/detail', component: './modal/detail' },
        ],
      },
      {
        path: '/contacts',
        component: './contacts',
      },
      {
        path: '/form',
        routes: [
          {
            path: '/form/short',
            component: './form/short',
          },
          {
            path: '/form/long',
            component: './form/long',
          },
        ],
      },
      {
        path: '/approval',
        routes: [
          {
            path: '/approval/process/list',
            component: './approval/process/list',
          },
          {
            path: '/approval/seal/list',
            component: './approval/seal/list',
          },
        ],
      },
      {
        path: '/detail',
        component: './detail',
      },
      {
        path: '/table',
        component: './table',
      },
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
