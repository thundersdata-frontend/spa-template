/*
 * @文件描述: 针对models内容的请求是在初始化的时候统一进行的，所以封装了该方法
 * 1、未登录情况不应该请求这些数据；
 * 2、登录后判断有菜单内容才请求，通过缓存的token判断无效；
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-06-17 15:48:22
 * @LastEditors: 廖军
 * @LastEditTime: 2020-07-01 17:45:14
 */
import { useRequest } from 'ahooks';
import type { BaseOptions, PaginatedParams } from 'ahooks/lib/useAntdTable';
import type { BaseResult, CombineService } from '@ahooksjs/use-request/lib/types';
import { useModel } from 'umi';

export default function useModelRequest<T>(
  fetchData: CombineService<T, PaginatedParams>,
  options?: BaseOptions<T>,
): BaseResult<T, PaginatedParams> {
  const { initialState } = useModel('@@initialState');
  const { menus = [] } = initialState || {};

  /** ready只会在第一次生效，现在这种写法可以有效阻断请求的发出，暂时没有发现更好的方法 */
  return (useRequest(menus.length > 0 ? fetchData : () => false, {
    refreshDeps: [menus.length],
    ...options,
  }) as unknown) as BaseResult<T, PaginatedParams>;
}
