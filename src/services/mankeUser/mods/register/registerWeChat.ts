/**
 * @description 微信注册登录
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = new defs.mankeUser.WeChatLoginAccessTokenDTO();

export async function fetch(data = {}) {
  const request = await initRequest();
  const result = await request.post(backEndUrl + '/registerWeChat', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || new defs.mankeUser.WeChatLoginAccessTokenDTO();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
