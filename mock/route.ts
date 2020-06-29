export default {
  '/resource': {
    success: true,
    data: [
      {
        name: 'homepage',
        apiUrl: '/homepage',
        description: '首页',
      },
      {
        name: 'system',
        apiUrl: '/system',
        description: '系统用户管理',
        children: [{
          name: 'dept',
          apiUrl: '/dept',
          description: '部门管理',
        }, {
          name: 'person',
          apiUrl: '/person',
          description: '人员管理',
          children: [{
            name: 'internal',
            apiUrl: '/internal',
            description: '内部人员',
          }, {
            name: 'external',
            apiUrl: '/external',
            description: '外部人员',
          }]
        }]
      },
      {
        name: 'list',
        apiUrl: '/list',
        description: '黑白名单',
        children: [{
          name: 'black',
          apiUrl: '/black',
          description: '黑名单',
        }, {
          name: 'white',
          apiUrl: '/white',
          description: '白名单',
        }]
      },
    ],
    code: 20000,
    message: '成功',
  },
};
