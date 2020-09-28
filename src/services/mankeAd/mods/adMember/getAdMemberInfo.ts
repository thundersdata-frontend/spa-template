/**
 * @description 运营商端获取用户模块信息
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = new defs.mankeAd.AdMemberInfoDTO();

export async function fetch(params = {}) {
  const result = await request().get(backEndUrl + '/adMember/getAdMemberInfo', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeAd.AdMemberInfoDTO();
  } else {
    throw new Error();
  }
}
