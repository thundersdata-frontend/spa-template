/*
 * @文件描述: 运行时配置，可以在项目运行过程中执行一些操作。
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-10-25 13:43:18
 * @LastEditors: 黄姗姗
 * @LastEditTime: 2019-12-12 15:46:29
 */
import isEmpty from 'lodash/isEmpty';
import { request } from 'umi';
import { MenuDataItem } from '@ant-design/pro-layout';
import arrayUtils from '@/utils/array';
import { PrivilegeResource } from './interfaces/common';

interface Route {
  path: string;
  component?: string;
  routes?: Route[];
}

let serverRoutes: Route[] = [];
let menus: MenuDataItem[] = [];
const privileges: string[] = [];

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
    const routes: PrivilegeResource[] = arrayUtils.deepOrder({
      data,
      childKey: 'children',
      orderKey: 'orderValue',
      type: 'asc',
    });
    const flatRoutes = arrayUtils.deepFlatten(routes);
    flatRoutes.forEach((route) => {
      privileges.push(...route.privilegeList);
    });
    // 将menus保存为应用的菜单、将privileges保存为应用的细粒度权限
    serverRoutes = convertResourceToRoute(routes);
    menus = convertResourceToMenu(routes);
    oldRender();
  } else {
    oldRender();
  }
}

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

/** 初始化数据 */
export async function getInitialState() {
  return new Promise(resolve => {
    resolve({
      menus,
      privileges,
    })
  })
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
