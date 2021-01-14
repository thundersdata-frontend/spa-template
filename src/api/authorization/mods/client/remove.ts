/**
 * @description delete
 */

import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['authorization'];

export const init = undefined;

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.delete(backEndUrl + '/client/delete', {
    headers: {
      'Content-Type': 'application/json',
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
