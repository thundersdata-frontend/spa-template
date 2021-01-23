export default {
  'POST /login/submit': {
    code: 20000,
    success: true,
    message: '登录成功',
    data: {
      accessToken: '123',
    },
  },
  'POST /register/submit': {
    code: 20000,
    success: true,
    message: '注册成功',
    data: {
      accessToken: '123',
    },
  },
  'POST /register/sms': {
    code: 20000,
    success: true,
    message: '注册短信发送成功',
    data: 0,
  },
  'GET /user/fetch': {
    code: 20000,
    message: '获取成功',
    success: true,
    data: {
      name: 'test',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    },
  },
};
