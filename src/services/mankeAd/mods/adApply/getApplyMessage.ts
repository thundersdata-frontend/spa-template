/**
 * @description 查看App用户申请信息
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.ApplyReturnDTO();

export async function fetch(params = {}) {
  const result = await request().get(backEndUrl + '/adApply/getApplyMessage', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeAd.ApplyReturnDTO();
  } else {
    throw new Error();
  }
}
