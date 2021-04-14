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
              routes: [{ path: '/auth/login', component: './auth/login', title: '登录' }],
            },
          ]),
      {
        path: '/',
        component: '@/layouts/BasicLayout',
        wrappers: ['@/pages/auth/wrappers/auth'],
        routes: [
          { path: '/', redirect: '/homepage' },
          { path: '/homepage', component: './homepage', title: '首页' },
          { path: '/hotel/hotelInfo', component: './hotel/hotelInfo', title: '酒店基本信息' },
        ],
      },
      { path: '*', component: './404' },
    ],
  },
];
