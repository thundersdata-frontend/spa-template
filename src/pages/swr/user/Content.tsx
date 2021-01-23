import React from 'react';
import useUserService from './useUserService';

export default () => {
  const { user } = useUserService();
  return <div>age: {user.age}</div>;
};
