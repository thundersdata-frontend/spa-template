export default [
  {
    path: '/user',
    component: '@/layouts/SignInLayout',
    routes: [
      { path: '/user/login', component: './user/login', title: '登录' },
      { path: '/user/register', component: './user/register', title: '注册' },
    ],
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/homepage' },
      { path: '*', component: './404' },
    ],
  },
];
