import React from 'react';
import { useRequest } from 'ahooks';
import { fakeSubmit } from './service';
import { message, Button } from 'antd';

export default function Homepage() {

  const { run } = useRequest(fakeSubmit, {
    manual: true,
    onSuccess: () => {
      message.success('aaaaa');
    },
  })

  return (
    <div>
      <div>我是首页</div>
      <Button onClick={() => run()}>提交</Button>
    </div>
  );
}
