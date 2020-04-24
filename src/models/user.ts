import { useRequest } from 'umi';

/**
 * 获取登录用户拥有的资源
 */
export default () => {
  const { data, run: fetchData } = useRequest('/resource');

  return {
    data,
    fetchData,
  };
}
