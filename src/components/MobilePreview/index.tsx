/*
 * @文件描述: 富文本编辑的手机端预览-效果参考antd mobile
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-07-08 14:09:40
 * @LastEditors: 廖军
 * @LastEditTime: 2020-07-08 15:46:08
 */

import React from 'react';
import xss from '@/utils/xss';
import classnames from 'classnames';
import styles from './index.module.less';

export default ({
  htmlText,
  title = '手机预览',
  className,
  style = {},
}: {
  htmlText: string;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div style={style} className={classnames(styles.mobile, className)}>
      <div className={styles.header}>
        <img
          width="373px"
          alt="presentation"
          src="https://os.alipayobjects.com/rmsportal/VfVHYcSUxreetec.png"
          style={{ margin: '0 2px' }}
        />
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.content}>
        <div
          dangerouslySetInnerHTML={{
            __html: xss(htmlText),
          }}
        />
      </div>
    </div>
  );
};
