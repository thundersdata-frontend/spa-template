import { atom } from 'jotai';
import { atomWithReducer } from 'jotai/utils';

const reducer = (state: number, action?: 'INCREASE' | 'DECREASE') => {
  switch (action) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    case undefined:
      return state;
  }
};

export const countAtom = atomWithReducer(0, reducer);

type UserInfo = { name: string; age: number };

export const userInfoAtom = atom<UserInfo | null>(null);

export const fetchUserInfoAtom = atom(null, async (_, set) => {
  const userInfo = await new Promise<UserInfo>(resolve => {
    setTimeout(() => {
      resolve({ name: 'damon', age: 31 });
    }, 2000);
  });
  set(userInfoAtom, userInfo);
});
