/**
 * @description 运营端查询合伙人列表
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = new defs.mankeUser.PageRes();

export async function fetch(params = {}) {
  const result = await request().get(backEndUrl + '/cityPartner/queryList', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeUser.PageRes();
  } else {
    throw new Error();
  }
}
