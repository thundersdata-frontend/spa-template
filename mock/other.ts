export default {
  'POST /account': {
    code: 20000,
    success: true,
    data: {
      accessToken: '123',
    },
  },
  '/detail': {
    code: 20000,
    data: {
      attachments: [
        {
          fileName: '补充通知(1)(1).docx',
          fileUrl:
            'http://docditor.test.thundersdata.com/OnlineEditors-1.0/EditorServlet?mode=view&fileId=17905',
          fileId: 17905,
        },
        {
          fileName: 'leiji.xlsx',
          fileUrl:
            'http://docditor.test.thundersdata.com/OnlineEditors-1.0/EditorServlet?mode=view&fileId=17906',
          fileId: 17906,
        },
        {
          fileName: 'original.gif',
          fileUrl: 'http://object-service-fn.test.thundersdata.com/file/preview?fileId=17907',
          fileId: 17907,
        },
        {
          fileName: '0GrKT8X.png',
          fileUrl: 'http://object-service-fn.test.thundersdata.com/file/preview?fileId=17908',
          fileId: 17908,
        },
        {
          fileName: '561590133970_.pic.jpg',
          fileUrl: 'http://object-service-fn.test.thundersdata.com/file/preview?fileId=17909',
          fileId: 17909,
        },
        {
          fileName: 'IMG_4256.jpeg',
          fileUrl: 'http://object-service-fn.test.thundersdata.com/file/download?fileId=17910',
          fileId: 17910,
        },
      ],
    },
    message: '成功',
    success: true,
  },
};
