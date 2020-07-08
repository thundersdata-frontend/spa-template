/*
 * @文件描述: 运行时配置，可以在项目运行过程中执行一些操作。
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-10-25 13:43:18
 * @LastEditors: 廖军
 * @LastEditTime: 2020-07-08 16:35:12
 */
import { request } from 'umi';
import { MenuDataItem } from '@ant-design/pro-layout';
import arrayUtils from '@/utils/array';
import { isEmpty } from 'lodash-es';
import { PrivilegeResource } from './interfaces/common';
import { showGlobalLoading, hideGlobalLoading } from './components/GlobalLoading';

/** 初始化数据 */
export async function getInitialState() {
  let menus: MenuDataItem[] = [];
  const privileges: string[] = [];
  const userInfo = {};

  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    try {
      showGlobalLoading();
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
        flatRoutes.forEach(route => {
          route.privilegeList && privileges.push(...route.privilegeList);
        });
        menus = convertResourceToMenu(routes);
        // TODO：这里请求userInfo的数据
      }
      hideGlobalLoading();
    } catch (error) {
      console.error(error);
      hideGlobalLoading();
    }
  }
  return {
    menus,
    privileges,
    userInfo,
  };
}

/**
 * 将后台返回的权限资源，转换成应用的菜单
 * @param resources
 */
function convertResourceToMenu(list: PrivilegeResource[]): MenuDataItem[] {
  return list.map(item => {
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
// function convertResourceToRoute(list: PrivilegeResource[]): Route[] {
//   return list.map(item => {
//     if (!isEmpty(item.children)) {
//       return {
//         path: item.apiUrl,
//         routes: convertResourceToRoute(item.children),
//       };
//     }
//     const DynamicComponent = dynamic({
//       loader: async () => {
//         // 这里的注释 webpackChunkName 可以指导 webpack 将该组件 HugeA 以这个名字单独拆出去
//         const { default: Component } = await import(
//           /* webpackChunkName: "[request]" */ `./pages${item.apiUrl}`
//         );
//         return Component;
//       },
//     });

//     return {
//       path: item.apiUrl,
//       component: DynamicComponent,
//       title: item.description,
//     };
//   });
// }
