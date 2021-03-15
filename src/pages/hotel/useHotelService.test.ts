import fetch, { enableFetchMocks } from 'jest-fetch-mock';

describe('useHotelService', () => {
  beforeEach(() => {
    enableFetchMocks();
  });

  test('should have hotel info after delay', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({ success: true, data: [{ apiUrl: '123', comment: 'test' }] }),
    );
  });
});
