/**
 * @description 当前管理员详细信息
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.ManagerInfoDetailDTO();

export async function fetch(params = {}) {
  const result = await request().get(backEndUrl + '/manager/detail', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeAd.ManagerInfoDetailDTO();
  } else {
    throw new Error();
  }
}
