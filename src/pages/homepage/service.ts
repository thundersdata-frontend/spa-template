import { initRequest } from '@/common';

export async function fakeSubmit() {
  const request = await initRequest();
  const result = await request('/banner/insert', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (result) {
    if (result.success) {
      return result.data;
    }
    throw new Error(JSON.stringify({ message: result.message }));
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
