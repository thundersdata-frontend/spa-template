/**
 * 定义系统细粒度权限的地方
 * @param initialState
 */
export default function (initialState: { privileges: string[] }) {
  const { privileges = [] } = initialState;

  return {
    canRead: privileges.includes('test'),
    canUpdate: privileges.includes('hahaha')
  };

}
