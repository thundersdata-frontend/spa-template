/**
 * @description 获取企业申请广告主申请详情
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.ApplyCompanyDetailDTO();

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/adApply/getCompanyDetail', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || new defs.mankeAd.ApplyCompanyDetailDTO();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
