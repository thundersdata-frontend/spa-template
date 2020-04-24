import React from 'react';
import { Link, Access, useAccess } from 'umi';
import { Button } from 'antd';

export default function Homepage() {
  const access = useAccess();

  return (
    <div>
      <div>
        <Link to="/contacts">contacts</Link>
      </div>
      <div>
        <Button type="primary">hello, antd</Button>
      </div>
      <div>
        <Access
          accessible={access.canRead}
          fallback={<div>对不起，您没有权限查看此内容</div>}
        >
          你能看到我，说明你具有test权限
        </Access>
      </div>
      <div>
        <Access
          accessible={access.canUpdate}
          fallback={<div>对不起，您没有权限查看此内容</div>}
        >
          你能看到我，说明你具有hahaha权限
        </Access>
      </div>
      <div>你能看到我，因为我对权限没有要求</div>
    </div>
  );
}
