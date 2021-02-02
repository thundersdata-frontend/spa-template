import { renderHook } from '@testing-library/react-hooks';
import fetch, { enableFetchMocks } from 'jest-fetch-mock';

import useHotelService from './useHotelService';

describe('useHotelService', () => {
  beforeEach(() => {
    enableFetchMocks();
  });

  test('should have hotel info after delay', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({ success: true, data: [{ apiUrl: '123', comment: 'test' }] }),
    );

    const { result, waitForNextUpdate } = renderHook(() => useHotelService());
    expect(result.current.hotelLoading).toEqual(true);

    await waitForNextUpdate();

    expect(result.current.hotelLoading).toEqual(false);
    expect(result.current.hotelInfo.length).toEqual(1);
  });
});
