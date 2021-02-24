import React, { useCallback, useContext } from 'react';
import useTestService from './useTestService';

import { StateContext } from '../useOrderService';
import type { Action } from '../useOrderService';
import { Button } from 'antd';

/**
 * 和之前的方式的区别在于，处理逻辑到底谁在做。之前是交给父组件做，现在是自己处理。
 * 通过这种写法，做到逻辑聚合，该自己处理的不要给别人做。自己也只关心自己需要处理的那部分业务。
 */
export default function TestItem({ index, data }: { index: number; data: number }) {
  const { setValue: parentSetter } = useContext(StateContext);

  const setParent = useCallback(
    (newData: number) => {
      parentSetter((res: Action[]) => {
        res[index].data = newData;
        return [...res];
      });
    },
    [index, parentSetter],
  );

  const testService = useTestService(setParent, data);

  return (
    <div>
      {testService.data}
      <Button onClick={() => testService.changeData(22)}>update value</Button>
    </div>
  );
}
