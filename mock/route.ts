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
        name: 'hotel',
        apiUrl: '/hotel',
        description: '酒店',
        children: [
          {
            name: 'hotelInfo',
            apiUrl: '/hotel/hotelInfo',
            description: '酒店基本信息',
          },
          {
            name: 'hotelOtherInfo',
            apiUrl: '/hotel/hotelOtherInfo',
            description: '酒店其他信息',
          },
        ],
      },
      {
        name: 'hotelOrder',
        apiUrl: '/order/order',
        description: '酒店订单',
      },
    ],
    code: 20000,
    message: '成功',
  },
};
