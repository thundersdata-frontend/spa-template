/**
 * @description app端获取用户申请合伙人状态
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = new defs.mankeUser.CityPartnerAppStatusDTO();

export async function fetch(params = {}) {
  const result = await request().get(
    backEndUrl + '/cityPartnerApply/getAppStatus',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    },
  );
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeUser.CityPartnerAppStatusDTO();
  } else {
    throw new Error();
  }
}
