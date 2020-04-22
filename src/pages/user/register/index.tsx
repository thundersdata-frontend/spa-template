import React from 'react';
import { Link } from 'umi';

export default function Register() {
  return (
    <div>
      <div>register page</div>
      <div><Link to="/">Go to homepage</Link></div>
      <div><Link to="/user/login">Go to login page</Link></div>
    </div>
  )
}
