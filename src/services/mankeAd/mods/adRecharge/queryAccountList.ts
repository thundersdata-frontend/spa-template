/**
 * @description 广告主查询充值记录
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.PageRes();

export async function fetch(params = {}) {
  const result = await request().get(
    backEndUrl + '/adRecharge/queryAccountList',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    },
  );
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeAd.PageRes();
  } else {
    throw new Error();
  }
}
