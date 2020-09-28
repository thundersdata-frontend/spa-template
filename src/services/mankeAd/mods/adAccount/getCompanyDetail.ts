/**
 * @description 查询企业广告主详情
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.AccountCompanyDetailDTO();

export async function fetch(params = {}) {
  const result = await request().get(
    backEndUrl + '/adAccount/getCompanyDetail',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    },
  );
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeAd.AccountCompanyDetailDTO();
  } else {
    throw new Error();
  }
}
