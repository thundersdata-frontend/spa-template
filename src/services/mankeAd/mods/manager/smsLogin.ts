/**
 * @description 管理员短信登录
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.LoginAccessToken();

export async function fetch(data = {}) {
  const result = await request().post(backEndUrl + '/manager/smsLogin', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeAd.LoginAccessToken();
  } else {
    throw new Error();
  }
}
