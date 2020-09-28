/**
 * @description 会员详情
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = new defs.mankeUser.MemberDetailDTO();

export async function fetch(params = {}) {
  const result = await request().get(backEndUrl + '/member/detail', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeUser.MemberDetailDTO();
  } else {
    throw new Error();
  }
}
