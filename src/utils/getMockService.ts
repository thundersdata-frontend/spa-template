/**
 * 获得虚拟的服务数据
 *
 * @export
 * @template T
 * @param {(T | undefined)} [initialData=undefined]
 * @returns
 */
export function getMockService<T>(_: (...args: any) => T, initialData: T | undefined = undefined) {
  return initialData as T;
}
