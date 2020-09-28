/**
 * @description 获取运营商广告信息
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.AdAllNumDTO();

export async function fetch(params = {}) {
  const result = await request().get(backEndUrl + '/adStatistics/getAllNum', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeAd.AdAllNumDTO();
  } else {
    throw new Error();
  }
}
