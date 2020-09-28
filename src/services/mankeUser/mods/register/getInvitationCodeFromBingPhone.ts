/**
 * @description 根据手机号获取已绑定的邀请码
 */

import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = '';

export async function fetch(params = {}) {
  const result = await request().get(backEndUrl + '/getInvitationCode', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || '';
  } else {
    throw new Error();
  }
}
