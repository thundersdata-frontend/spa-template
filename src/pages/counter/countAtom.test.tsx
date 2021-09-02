import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useAtom, Provider } from 'jotai';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';

import { countAtom, fetchUserInfoAtom, userInfoAtom } from './countAtom';

describe('countAtom', () => {
  test('should increment counter', () => {
    // 借助Provider，实现同一个atom在不同的Provider下互不影响的效果
    const wrapper = ({ children }: { children?: React.ReactNode }) => <Provider>{children}</Provider>;
    const { result } = renderHook(() => useAtom(countAtom), { wrapper });

    act(() => {
      result.current[1]('INCREASE');
    });

    expect(result.current[0]).toBe(1);
  });

  test('should increment counter', () => {
    const wrapper = ({ children }: { children?: React.ReactNode }) => <Provider>{children}</Provider>;
    const { result } = renderHook(() => useAtom(countAtom), { wrapper });

    act(() => {
      result.current[1]('DECREASE');
    });

    expect(result.current[0]).toBe(-1);
  });

  test('should get user info after 2000ms delay', async () => {
    const wrapper = ({ children }: { children?: React.ReactNode }) => <Provider>{children}</Provider>;
    const { result, waitForNextUpdate } = renderHook(
      () => ({
        fetch: useUpdateAtom(fetchUserInfoAtom),
        value: useAtomValue(userInfoAtom),
      }),
      { wrapper },
    );

    result.current.fetch();

    await waitForNextUpdate({ timeout: 3000 });

    expect(result.current.value).not.toBeNull();
    // node版本必须要跟typescript的target匹配，https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping
    expect(result.current.value?.name).toBe('damon');
  });
});
