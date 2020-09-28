/**
 * @description 查询区域广告主数量
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.AreaAdNumDTO();

export async function fetch(params = {}) {
  const result = await request().get(backEndUrl + '/adAccount/getAreaAdNum', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeAd.AreaAdNumDTO();
  } else {
    throw new Error();
  }
}
