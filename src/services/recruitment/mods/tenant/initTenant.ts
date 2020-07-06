/**
 * @description 初始化租户信息
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['recruitment'];

export const init = new defs.recruitment.DeferredResult();

export async function fetch(data = {}) {
  const request = await initRequest();
  const result = await request.post(backEndUrl + '/tenant/init', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify({ message: result.message }));
    } else {
      return result.data || new defs.recruitment.DeferredResult();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
