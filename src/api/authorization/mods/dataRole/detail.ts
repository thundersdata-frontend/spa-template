/**
 * @description 获取数据角色详情
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['authorization'];

export const init = new defs.authorization.DataRoleVO();

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/role/data/detail', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || new defs.authorization.DataRoleVO();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
