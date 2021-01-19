import { LOGIN_CONFIG } from '../src/constant';

export default [
  {
    path: '/',
    component: '@/layouts',
    wrappers: ['@/pages/auth/wrappers/guard'],
    routes: [
      ...(LOGIN_CONFIG.isSSO
        ? []
        : [
            {
              path: '/auth',
              component: '@/layouts/SignInLayout',
              routes: [
                { path: '/auth/login', component: './auth/login', title: '登录' },
                { path: '/auth/register', component: './auth/register', title: '注册' },
              ],
            },
          ]),
      {
        path: '/',
        component: '@/layouts/BasicLayout',
        wrappers: ['@/pages/auth/wrappers/auth'],
        routes: [
          { path: '/homepage', component: './Homepage', title: '首页' },
          { path: '/hotel/hotel', component: './Hotel/Hotel', title: '酒店' },
          { path: '/hotel/order', component: './Hotel/Order', title: '酒店' },
          { path: '/', redirect: '/homepage' },
        ],
      },
      { path: '*', component: './404' },
    ],
  },
];
