/**
 * @description 查询ResourcesForDetails
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['authorization'];

export const init = new defs.authorization.ResourcesForDetails();

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/resource/detail', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || new defs.authorization.ResourcesForDetails();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
