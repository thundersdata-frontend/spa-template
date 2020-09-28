/**
 * @description 获取广告主余额
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.AccountBalanceDTO();

export async function fetch(params = {}) {
  const result = await request().get(
    backEndUrl + '/adRecharge/getAccountBalance',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    },
  );
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeAd.AccountBalanceDTO();
  } else {
    throw new Error();
  }
}
