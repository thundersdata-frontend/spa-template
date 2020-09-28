/**
 * @description 查询个人广告主详情
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.AccountPersonDetailDTO();

export async function fetch(params = {}) {
  const result = await request().get(
    backEndUrl + '/adAccount/getPersonDetail',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    },
  );
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeAd.AccountPersonDetailDTO();
  } else {
    throw new Error();
  }
}
