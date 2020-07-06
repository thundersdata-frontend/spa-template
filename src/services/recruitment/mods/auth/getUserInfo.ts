/**
 * @description 获取当前登录用户信息
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['recruitment'];

export const init = new defs.recruitment.AuthUserInfo();

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/auth/user', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify({ message: result.message }));
    } else {
      return result.data || new defs.recruitment.AuthUserInfo();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
