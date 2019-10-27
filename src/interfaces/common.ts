/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-10-23 21:12:06
 * @LastEditors: 陈杰
 * @LastEditTime: 2019-10-27 21:52:31
 */

export interface CustomWindow extends Window {
  gMenus: MenuItemConfig[];
}

export interface CustomLocation extends Location {
  query: {
    [x: string]: string;
  };
}

export interface PageMatchModel {
  isExact: boolean;
  params: object;
  path: string;
  url: string;
}

export interface PageBasicPropsModel {
  history: History;
  location: CustomLocation;
  match: PageMatchModel;
}

export interface MenuItemConfig {
  name: string;
  link?: string;
  icon?: string;
  children?: MenuItemConfig[];
}

export interface PrivilegeResource {
  apiUrl: string;
  description: string;
  icon: string;
  id: number;
  orderValue: number;
  resourceKey: string;
  type: number;
  privilegeList: string[];
  resourceBusinessValue: string;
  children: PrivilegeResource[];
}
