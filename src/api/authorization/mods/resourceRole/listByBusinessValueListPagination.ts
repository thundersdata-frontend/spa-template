/**
 * @description 根据业务拓展字段查询角色(带分页)
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['authorization'];

export const init = new defs.authorization.PagingEntity();

export async function fetch(data = {}) {
  const request = await initRequest();
  const result = await request.post(
    backEndUrl + '/role/resource/listByBusinessValueListPagination',
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
      return result.data || new defs.authorization.PagingEntity();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
