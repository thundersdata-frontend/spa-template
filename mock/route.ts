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
        name: 'hotelInfo',
        apiUrl: '/hotel/hotel',
        description: '酒店信息',
      },
      {
        name: 'hotelOrder',
        apiUrl: '/hotel/order',
        description: '酒店订单',
      },
    ],
    code: 20000,
    message: '成功',
  },
};
