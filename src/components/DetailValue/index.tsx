/**
 * 详情展示项。可以根据type渲染不同的展示
 * type目前支持：default(默认)/file(文件)/image(图片)
 */
import React from 'react';

type DetailValueType = 'default' | 'file' | 'image';

export default ({
  value,
  type = 'default',
}: {
  value?: number | string;
  type?: DetailValueType;
}) => {
  if (type === 'default') {
    return <div>{value}</div>;
  }
  if (type === 'file') {
    return null;
  }
  if (type === 'image') {
    return null;
  }
  return null;
};
