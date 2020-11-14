/*
 * @文件描述: 根据pont-config.json文件获取到对应的后端请求地址
 * @公司: thundersdata
 * @作者: 黄姗姗
 * @Date: 2019-10-30 18:36:20
 * @LastEditors: 黄姗姗
 * @LastEditTime: 2020-09-28 10:14:55
 */
import pontConfig from './pont-config.json';

export default function() {
  const result: { [key: string]: string } = {};
  const mockDatasources: string[] = pontConfig.mocks.containDataSources;
  pontConfig.origins.forEach(origin => {
    const { name, originUrl } = origin;
    if (mockDatasources.includes(name)) {
      result[name] = `/${name}`;
    } else {
      result[name] = originUrl.replace(/\/v[0-9]{1,}\/api-docs/, '');
    }
  });
  return result;
}
