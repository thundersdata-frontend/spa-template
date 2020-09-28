/**
 * @description app用户随机获取预测信息
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.PredictionDetailDTO();

export async function fetch(params = {}) {
  const result = await request().get(
    backEndUrl + '/adPrediction/getAppPrediction',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    },
  );
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeAd.PredictionDetailDTO();
  } else {
    throw new Error();
  }
}
