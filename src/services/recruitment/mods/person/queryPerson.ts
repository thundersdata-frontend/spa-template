/**
 * @description 获取人才列表
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['recruitment'];

export const init = new defs.recruitment.Page();

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/person/queryPerson', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify({ message: result.message }));
    } else {
      return result.data || new defs.recruitment.Page();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
