import useSWR from 'swr';

export default function useUserService() {
  const { data, isValidating, error } = useSWR(`/fetch/user`);

  const user = data && data.success ? data.data : {};

  return { user, loading: isValidating, error };
}
