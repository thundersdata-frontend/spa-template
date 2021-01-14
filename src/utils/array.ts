/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-05-18 12:00:35
 * @LastEditors: 陈杰
 * @LastEditTime: 2020-05-18 14:24:42
 */
import { orderBy } from 'lodash-es';

export type OrderType = 'desc' | 'asc';

export interface DeepOrderProps<T> {
  data: T[];
  childKey: string;
  orderKey: string;
  type: OrderType;
}

export default {
  /**
   * 递归地将带children的数组展平
   */
  deepFlatten<T>(list: T[], key = 'children') {
    const result: T[] = [];
    const flatten = (arry: T[]) =>
      arry.forEach((item: T) => {
        const newItem = { ...item };
        delete newItem[key];
        result.push(newItem);
        if (item[key] && Array.isArray(item[key])) {
          flatten(item[key]);
        }
      }, []);
    flatten(list);
    return result;
  },

  /**
   * 根据某个字段 递归排序
   */
  deepOrder<T>(props: DeepOrderProps<T>) {
    const { data = [], childKey, orderKey, type = 'asc' } = props;
    const loopOrder = (params: DeepOrderProps<T>) => {
      const { data = [], childKey, orderKey, type = 'asc' } = params;
      return orderBy(data, orderKey, type).map((item: T) => {
        const children: T[] = item[childKey] || [];
        if (children && children.length > 0) {
          item[childKey] = loopOrder({ data: children, childKey, orderKey, type });
        }
        return item;
      });
    };
    return loopOrder({ data, childKey, orderKey, type });
  },
};
