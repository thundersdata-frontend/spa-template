import { LOGIN_CONFIG } from '../src/constant';

export default [
  {
    path: '/',
    component: '@/layouts',
    wrappers: ['@/pages/Auth/wrappers/guard'],
    routes: [
      ...(LOGIN_CONFIG.isSSO
        ? []
        : [
            {
              path: '/auth',
              component: '@/layouts/SignInLayout',
              routes: [
                { path: '/auth/login', component: './Auth/login', title: '登录' },
                { path: '/auth/register', component: './Auth/register', title: '注册' },
              ],
            },
          ]),
      {
        path: '/',
        component: '@/layouts/BasicLayout',
        wrappers: ['@/pages/Auth/wrappers/auth'],
        routes: [
          { path: '/homepage', component: './Homepage', title: '首页' },
          { path: '/', redirect: '/homepage' },
        ],
      },
      { path: '*', component: './404' },
    ],
  },
];
