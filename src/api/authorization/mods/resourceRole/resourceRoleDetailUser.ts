/**
 * @description 获取ResourceRole详情包含对应用户
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['authorization'];

export const init = new defs.authorization.ResourcePageObject();

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/role/resource/detail/user', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || new defs.authorization.ResourcePageObject();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
