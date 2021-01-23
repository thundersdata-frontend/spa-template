import React from 'react';
import { Spin } from 'antd';
import useUserService from './useUserService';

export default function Avatar() {
  const { user, loading, error } = useUserService();
  if (loading) return <Spin />;
  if (error) return <div>error</div>;
  return <div>name: {user.name}</div>;
}
