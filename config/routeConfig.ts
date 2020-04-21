export default [
  {
    path: '/signIn',
    component: '@/layouts/SignInLayout',
    routes: [
      { path: '/signIn', component: './signIn/signIn' },
      { path: '/signUp', component: './signIn/signUp' },
    ],
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/homepage' },
      { path: '/homepage', component: './homepage' },
      { path: '/contacts', component: './contacts' },
      { path: '*', component: './404' },
    ],
  },
];
