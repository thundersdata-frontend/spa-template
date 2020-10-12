/*
 * @文件描述: table 操作按钮渲染
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-06-08 11:36:36
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-12 10:56:12
 */

import React from 'react';
import { Divider } from 'antd';
import { TableDropdown } from '@ant-design/pro-table';
import { history } from 'umi';

export interface ButtonsType {
  name: string;
  key: string;
  onClick?: (event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  /** 路由跳转，优先级高于onClick */
  path?: string;
  hidden?: boolean;
}

export interface HandleButtonsProps {
  buttons: ButtonsType[];
  /** 允许展示的最大数量，默认3 */
  maxNumber?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default ({ buttons, maxNumber = 3, className, style }: HandleButtonsProps) => {
  const filteredButtons = buttons.filter(item => !item.hidden);
  const { length } = filteredButtons;
  const frontButtons = filteredButtons.slice(0, maxNumber);
  const restButtons = filteredButtons.slice(maxNumber, length);

  return (
    <div className={className} style={style}>
      {frontButtons.map(({ name, key, onClick, path }, index) => {
        const aDom = (
          <a key={key} onClick={path ? () => history.push(path) : onClick}>
            {name}
          </a>
        );
        if (index !== length - 1) {
          return (
            <React.Fragment key={key}>
              {aDom}
              <Divider type="vertical" />
            </React.Fragment>
          );
        }
        return aDom;
      })}
      {restButtons.length > 0 && (
        <TableDropdown
          key="dropdown"
          onSelect={async key => {
            const selectItem = restButtons.find(item => item.key === key);
            if (selectItem?.path) {
              history.push(selectItem?.path);
            } else {
              selectItem?.onClick && selectItem?.onClick();
            }
          }}
          menus={restButtons}
        />
      )}
    </div>
  );
};
