export default [
  {
    path: '/user',
    component: '@/layouts/SignInLayout',
    routes: [
      { path: '/user/login', component: './user/login' },
      { path: '/user/register', component: './user/register' },
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
