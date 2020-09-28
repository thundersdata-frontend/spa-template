/**
 * @description 查询会员统计信息
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = new defs.mankeUser.MemberStatisticDTO();

export async function fetch(params = {}) {
  const result = await request().get(
    backEndUrl + '/memberStatistic/getMemberStatistic',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    },
  );
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeUser.MemberStatisticDTO();
  } else {
    throw new Error();
  }
}
