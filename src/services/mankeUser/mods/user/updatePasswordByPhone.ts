/**
 * @description 根据手机号修改密码
 */

import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = false;

export async function fetch(data = {}) {
  const request = await initRequest();
  const result = await request.post(
    backEndUrl + '/user/updatePasswordByPhone',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    },
  );
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || false;
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
