/**
 * @description 获取人才目录详情
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['recruitment'];

export const init = new defs.recruitment.TreeListDTO();

export async function fetch(params = {}) {
  return new Promise(async (resolve, reject) => {
    try {
      const request = await initRequest();
      const result = await request.post(
        backEndUrl + '/personPool/getPersonPoolDetail',
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          params,
        },
      );
      if (result) {
        if (result.success) {
          resolve(result.data);
        } else {
          reject(new Error(JSON.stringify({ message: result.message })));
        }
      } else {
        reject(new Error(JSON.stringify({ message: '接口未响应' })));
      }
    } catch (error) {
      reject(error);
    }
  });
}
