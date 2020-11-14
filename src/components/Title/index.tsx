import React from 'react';
import styles from './index.less';

export default ({ text }: { text: string }) => (
  <div className={styles.title}>
    <span>{text}</span>
  </div>
);
