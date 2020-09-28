/**
 * @description 好友详情列表
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = new defs.mankeUser.FriendDetailDTO();

export async function fetch(data = {}) {
  const result = await request().post(backEndUrl + '/relation/detail', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeUser.FriendDetailDTO();
  } else {
    throw new Error();
  }
}
