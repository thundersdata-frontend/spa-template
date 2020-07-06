import { initRequest } from '@/common';

export async function fakeSubmit() {
  return new Promise(async (resolve, reject) => {
    const request = await initRequest();
    const result = await request('/banner/insert', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (result) {
      if (result.success) {
        resolve(result.data);
      } else {
        reject(new Error(JSON.stringify({ message: result.message })));
      }
    } else {
      reject(new Error(JSON.stringify({ message: '接口未响应' })));
    }
  });
}
