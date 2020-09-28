/**
 * @description app端查询代理人状态
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = new defs.mankeUser.ProxyApplyAppStatusDTO();

export async function fetch(params = {}) {
  const result = await request().get(backEndUrl + '/proxyApply/getAppStatus', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeUser.ProxyApplyAppStatusDTO();
  } else {
    throw new Error();
  }
}
