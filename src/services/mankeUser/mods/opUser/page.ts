/**
 * @description 获取系统管理员列表
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = new defs.mankeUser.PageRes();

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/opUser/page', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || new defs.mankeUser.PageRes();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
