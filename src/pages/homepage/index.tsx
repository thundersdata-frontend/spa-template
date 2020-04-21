import React from 'react';
import { Link } from 'umi';
import { Button } from 'antd';

export default function Homepage() {
  return (
    <div>
      <Link to="/contacts">contacts</Link>
      <Button type="primary">hello, dark antd</Button>
    </div>
  );
}
