/**
 * @description h5页面手机号短信登录
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = new defs.mankeUser.LoginAccessToken();

export async function fetch(data = {}) {
  const result = await request().post(backEndUrl + '/hSmsLogin', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeUser.LoginAccessToken();
  } else {
    throw new Error();
  }
}
