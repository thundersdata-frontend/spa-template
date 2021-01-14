/**
 * @description 保存资源-这个接口仍然可以使用，但建议使用新的资源管理接口中/auth/resource/save
 */

import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['authorization'];

export const init = undefined;

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.post(backEndUrl + '/resource/save', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || undefined;
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
