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
          {
            path: '/hotel',
            component: './hotel',
            routes: [
              { path: '/hotel/hotelInfo', component: './hotel/HotelInfo', title: '酒店基本信息' },
              {
                path: '/hotel/hotelOtherInfo',
                component: './hotel/HotelOtherInfo',
                title: '酒店其他信息',
              },
            ],
          },
          {
            path: '/order',
            component: './order',
            routes: [{ path: '/order/order', component: './order/Order', title: '订单' }],
          },
          { path: '/swr/user', component: './swr/user', title: '用户' },
        ],
      },
      { path: '*', component: './404' },
    ],
  },
];
