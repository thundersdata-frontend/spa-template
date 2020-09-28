/**
 * @description 广告主查询展示饼状图图数据
 */

import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = [];

export async function fetch(params = {}) {
  const result = await request().get(
    backEndUrl + '/adStatistics/queryAdShowPieStatisticsDTO',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    },
  );
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || [];
  } else {
    throw new Error();
  }
}
