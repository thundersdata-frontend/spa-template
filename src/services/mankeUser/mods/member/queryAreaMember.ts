/**
 * @description 查询区域会员信息
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = new defs.mankeUser.PageRes();

export async function fetch(data = {}) {
  const result = await request().post(backEndUrl + '/member/queryAreaMember', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeUser.PageRes();
  } else {
    throw new Error();
  }
}
