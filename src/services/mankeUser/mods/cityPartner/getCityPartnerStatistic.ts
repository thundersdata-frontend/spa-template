/**
 * @description 运营端城市合伙人统计
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = new defs.mankeUser.CityPartnerStatisticDTO();

export async function fetch(params = {}) {
  const result = await request().get(
    backEndUrl + '/cityPartner/getCityPartnerStatistic',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    },
  );
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeUser.CityPartnerStatisticDTO();
  } else {
    throw new Error();
  }
}
