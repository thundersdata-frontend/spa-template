/**
 * @description 广告主广告信息
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.AccountAllNumDTO();

export async function fetch(params = {}) {
  const result = await request().get(backEndUrl + '/adStatistics/getAdAllNum', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeAd.AccountAllNumDTO();
  } else {
    throw new Error();
  }
}
