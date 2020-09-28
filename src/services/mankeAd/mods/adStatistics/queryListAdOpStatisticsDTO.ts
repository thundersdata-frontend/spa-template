/**
 * @description 运营商广告统计列表数据
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.PageRes();

export async function fetch(data = {}) {
  const result = await request().post(
    backEndUrl + '/adStatistics/queryListAdOpStatisticsDTO',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    },
  );
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeAd.PageRes();
  } else {
    throw new Error();
  }
}
