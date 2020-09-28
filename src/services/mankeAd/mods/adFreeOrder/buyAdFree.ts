/**
 * @description 创建一键收租免广告支付订单
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.CommonOrderPaymentInfo();

export async function fetch(data = {}) {
  const result = await request().post(backEndUrl + '/adFreeOrder/buyAdFree', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeAd.CommonOrderPaymentInfo();
  } else {
    throw new Error();
  }
}
