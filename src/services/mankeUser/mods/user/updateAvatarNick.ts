/**
 * @description 用户头像性别生日修改
 */

import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = undefined;

export async function fetch(data = {}) {
  const result = await request().post(backEndUrl + '/user/updateAvatarNick', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || undefined;
  } else {
    throw new Error();
  }
}
