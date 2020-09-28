/**
 * @description 运营平台查询广告详情
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.AdvertisingOpDTO();

export async function fetch(params = {}) {
  const result = await request().get(backEndUrl + '/ad/queryOpAdDetail', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeAd.AdvertisingOpDTO();
  } else {
    throw new Error();
  }
}
