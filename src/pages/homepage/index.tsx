import React from 'react';
import { useRequest } from 'ahooks';

export default function Homepage() {
  /** mankeUser配置了mock所以走mock功能 */
  useRequest(API.mankeUser.user.getUserDetail.fetch);

  return <div>我是首页</div>;
}
