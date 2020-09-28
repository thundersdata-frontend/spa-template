/**
 * @description 获取当前用户升级条件
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = new defs.mankeUser.LevelUpDTO();

export async function fetch(params = {}) {
  const result = await request().get(
    backEndUrl + '/relation/upLevelCondition',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    },
  );
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || new defs.mankeUser.LevelUpDTO();
  } else {
    throw new Error();
  }
}
