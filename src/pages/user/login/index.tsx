import React from 'react';
import { Link } from 'umi';

export default function Login() {
  return (
    <div>
      <div>sign in page</div>
      <div><Link to="/">Go to homepage</Link></div>
      <div><Link to="/user/register">Go to register page</Link></div>
    </div>
  )
}
