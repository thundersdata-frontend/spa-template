/**
 * @description 获取广告信息，展示扣费
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.AdvertisingShowDTO();

export async function fetch(data = {}) {
  const result = await request().post(backEndUrl + '/put/getAdvertising', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeAd.AdvertisingShowDTO();
  } else {
    throw new Error();
  }
}
