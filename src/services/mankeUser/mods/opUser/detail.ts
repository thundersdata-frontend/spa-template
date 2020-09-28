/**
 * @description 获取系统管理员信息
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = new defs.mankeUser.OpUserDTO();

export async function fetch(params = {}) {
  const result = await request().get(backEndUrl + '/opUser/detail', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeUser.OpUserDTO();
  } else {
    throw new Error();
  }
}
