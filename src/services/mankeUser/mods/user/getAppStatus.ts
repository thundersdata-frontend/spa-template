/**
 * @description App端获取人工审核状态
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = new defs.mankeUser.ManualResultAppDTO();

export async function fetch(params = {}) {
  const result = await request().get(backEndUrl + '/user/getAppStatus', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeUser.ManualResultAppDTO();
  } else {
    throw new Error();
  }
}
