/*
 * @文件描述: 运行时配置，可以在项目运行过程中执行一些操作。
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-10-25 13:43:18
 * @LastEditors: 黄姗姗
 * @LastEditTime: 2019-12-12 15:46:29
 */
import isEmpty from 'lodash/isEmpty';
import orderBy from 'lodash/orderBy';
import { request } from 'umi';
import { MenuDataItem } from '@ant-design/pro-layout';
import { PrivilegeResource, CustomWindow } from './interfaces/common';

interface Route {
  path: string;
  component?: string;
  routes?: Route[];
}

let serverRoutes: Route[] = [];

/**
 * 运行时修改路由配置。和render配合使用，请求服务端根据相应动态更新路由。
 * 执行时机在第一次render之前，然后就再也不执行了
 * @param routes
 */
export function patchRoutes(oldRoutes: { routes: Route[] }) {
  oldRoutes.routes.forEach((route) => {
    if (route.path === '/') {
      serverRoutes.forEach((sr) => {
        const len = sr.path.split('/').length;
        if (route.routes) {
          const res = route.routes?.filter(
            (i) => i.path?.split('/').length > len,
          ).length;
          if (res < 0) {
            route.routes.splice(1, 0, sr);
          } else {
            route.routes.splice(res + 1, 0, sr);
          }
        }
      });
    }
  });
}

/**
 * 改写整个应用render到dom树里。
 * 可能场景：
 *  1. 在渲染应用之前做权限校验，不通过则跳转到登录页（单点登录场景会很有用）
 *  2. 和pathRoutes配合，在render时请求后端接口，拿到动态路由
 * @param oldRender
 */
export async function render(oldRender: Function) {
  const result = await request('/resource');
  const { code, success, data = [] } = result;
  if (code === 20000 && success) {
    const routes: PrivilegeResource[] = deepOrder({
      data,
      childKey: 'children',
      orderKey: 'orderValue',
      type: 'asc',
    });
    const privileges: string[] = [];
    const flatRoutes = deepFlatten(routes);
    flatRoutes.forEach((route) => {
      privileges.push(...route.privilegeList);
    });
    // 将menus保存为应用的菜单、将privileges保存为应用的细粒度权限
    serverRoutes = convertResourceToRoute(routes);
    const menus = convertResourceToMenu(routes);
    ((window as unknown) as CustomWindow).gMenus = menus;
    oldRender();
  } else {
    ((window as unknown) as CustomWindow).gMenus = [];
    oldRender();
  }
}

/**
 * 将后台返回的权限资源，转换成应用的菜单
 * @param resources
 */
function convertResourceToMenu(list: PrivilegeResource[]): MenuDataItem[] {
  return list.map((item) => {
    if (!isEmpty(item.children)) {
      return {
        name: item.description,
        key: `${item.apiUrl}`,
        customIcon: item.icon,
        path: item.apiUrl,
        children: convertResourceToMenu(item.children),
      };
    }
    return {
      name: item.description,
      key: `${item.apiUrl}`,
      customIcon: item.icon,
      path: item.apiUrl,
    };
  });
}

/**
 * 将后台返回的权限资源，转换成应用的路由配置
 * @param list
 */
function convertResourceToRoute(list: PrivilegeResource[]): Route[] {
  return list.map((item) => {
    if (!isEmpty(item.children)) {
      return {
        path: item.apiUrl,
        routes: convertResourceToRoute(item.children),
      };
    }
    return {
      path: item.apiUrl,
      component: require(`./pages${item.apiUrl}`).default,
    };
  });
}

function deepFlatten<T>(list: T[], key = 'children') {
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
}

/**
 * 根据某个字段 递归排序
 */
function deepOrder<T>(props: DeepOrderProps<T>) {
  const { data = [], childKey, orderKey, type = 'asc' } = props;
  const loopOrder = (params: DeepOrderProps<T>) => {
    const { data = [], childKey, orderKey, type = 'asc' } = params;
    return orderBy(data, orderKey, type).map((item: T) => {
      const children: T[] = item[childKey] || [];
      if (children && children.length > 0) {
        item[childKey] = loopOrder({
          data: children,
          childKey,
          orderKey,
          type,
        });
      }
      return item;
    });
  };
  return loopOrder({ data, childKey, orderKey, type });
}

export interface DeepOrderProps<T> {
  data: T[];
  childKey: string;
  orderKey: string;
  type: 'desc' | 'asc';
}
