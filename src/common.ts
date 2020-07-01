import { extend, ResponseError } from 'umi-request';
import { message } from 'antd';
import { history } from 'umi';

const controller = new AbortController();
const { signal } = controller;

const codeMessage: { [key: number]: string } = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

export function errorHandler(error: ResponseError) {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    console.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  }
}

export const request = () =>
  /** 这边可对接口请求做一些统一的封装 */
  extend({
    useCache: false,
    ttl: 60000,
    credentials: 'same-origin',
    headers: {
      access_token: localStorage.getItem('accessToken')!,
    },
    errorHandler,
    signal,
  });

request().interceptors.response.use(response => {
  response
    .clone()
    .json()
    .then(res => {
      if (!res.success) {
        console.error(res.message);
        /**
         * 用户认证失败 token无效或者过期
         * 1、需要取消所有请求（防止多个请求时，其中一个响应速度太慢，导致重新登录成功后又多次回到登录页面）；
         * 2、跳转到登录页面。
         */
        if (res.code === 40001) {
          controller.abort();
          history.replace('/user/login');
        }
      }
    });
  return response;
});

/** table的默认配置 */
export const defaultTableProps = {
  onRequestError: (error: Error) => {
    console.error(error.message);
    message.error('数据加载失败');
  },
  bordered: false,
  search: true,
  pagination: {
    size: 'default',
  },
  dateFormatter: 'string',
  tableAlertRender: false,
};
