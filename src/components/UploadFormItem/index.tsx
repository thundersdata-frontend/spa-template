/*
 * @文件描述: 封装 Upload FormItem 组件
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-06-11 10:22:48
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-08-10 10:58:49
 */
import React, { useState, useEffect } from 'react';
import { Form, Button, Upload, Tooltip } from 'antd';
import {
  getFileValidators,
  getPublicUploadProps,
  ATTACHMENT_MAX_FILE_COUNT,
  handleUpload,
  getFileSizeName,
  getBeforeUpload,
} from '@/utils/upload';
import { InternalFieldProps } from 'rc-field-form/es/Field';
import { UploadProps, UploadChangeParam } from 'antd/lib/upload';
import { FormItemLabelProps } from 'antd/lib/form/FormItemLabel';
import { FormItemInputProps } from 'antd/lib/form/FormItemInput';
import { QuestionCircleOutlined } from '@ant-design/icons';
import styles from './index.module.less';

export interface UploadFormItemProps {
  /** formItem 的字段名 */
  name?: string;
  /** formItem 的标签 */
  label?: string;
  /** 是否隐藏 label 的 tooltip 提示 */
  hiddenTooltip?: boolean;
  /** 是否必选 */
  required?: boolean;
  /** 必选报错提示信息 */
  requiredMessage?: string;
  /** 限制文件后缀,为可选后缀列表(支持string),传入 true 默认为图片 */
  accept?: string | string[];
  /** 限制文件大小,单位为 M,默认 10 M */
  maxSize?: number | boolean;
  /** 限制文件个数,默认为 10 个 */
  maxCount?: number | boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否支持多个上传 */
  multiple?: boolean;
  /** 改变事件 */
  onChange?: (info: UploadChangeParam) => void;
  /** formItem 属性 */
  formItemProps?: InternalFieldProps & FormItemLabelProps & FormItemInputProps;
  /** upload 属性 */
  uploadProps?: UploadProps;
}

// 初始化文件长度
const INITIAL_FILE_LENGTH = 0;

const UploadFormItem: React.FC<UploadFormItemProps> = uploadItemProps => {
  const {
    name = '',
    label = '',
    hiddenTooltip = false,
    required = false,
    requiredMessage = `'${label}' 是必填字段`,
    accept,
    maxSize = false,
    maxCount = false,
    disabled = false,
    multiple = false,
    formItemProps = {},
    uploadProps = {},
    onChange,
    children,
  } = uploadItemProps;
  const maxCountNumber = maxCount === true ? ATTACHMENT_MAX_FILE_COUNT : maxCount;
  // 文件个数
  const [fileLength, setFileLength] = useState<number>(INITIAL_FILE_LENGTH);
  // 超出或达到最大文件个数，禁用上传
  const [uploadDisabled, setUploadDisabled] = useState<boolean>(false);
  const formattedAccept = Array.isArray(accept) ? accept.join(',') : accept;
  const validatorObj = {
    maxCount,
    maxSize,
    accept,
  };

  /** 改变上传文件调用 */
  const handleChange = (info: UploadChangeParam) => {
    maxCountNumber && setUploadDisabled(info.fileList.length >= maxCountNumber);
    onChange && onChange(info);
  };

  useEffect(() => {
    maxCountNumber && setUploadDisabled(fileLength >= maxCountNumber);
  }, [fileLength]);

  /** 渲染tooltip 的 title */
  const renderLabelTitle = () => (
    <div className={styles.labelWrap}>
      {maxCountNumber && <div>个数：最多上传 {maxCountNumber} 个文件</div>}
      {maxSize && <div>大小：文件大小限制 {getFileSizeName(maxSize)}</div>}
      {accept && (
        <div>
          可接受的文件格式：<div>{accept}</div>
        </div>
      )}
    </div>
  );

  /** 渲染表单 label（带 tooltip） */
  const renderLabel = () =>
    !hiddenTooltip && (maxSize || maxCountNumber || accept) ? (
      <div>
        <span>{label}&nbsp;</span>
        <Tooltip placement="topLeft" title={renderLabelTitle()}>
          <QuestionCircleOutlined />
        </Tooltip>
      </div>
    ) : (
      <span>{label}</span>
    );

  return (
    <Form.Item
      label={renderLabel()}
      name={name}
      className={styles.uploadItemWrap}
      valuePropName="fileList"
      required={required}
      rules={[{ required, message: requiredMessage }, ...getFileValidators(validatorObj)]}
      getValueFromEvent={handleUpload}
      getValueProps={value => {
        setFileLength(value?.length || INITIAL_FILE_LENGTH);
        return { fileList: value };
      }}
      {...formItemProps}
    >
      <Upload
        {...getPublicUploadProps()}
        accept={formattedAccept}
        disabled={disabled}
        multiple={multiple}
        onChange={handleChange}
        beforeUpload={getBeforeUpload(validatorObj)}
        {...uploadProps}
      >
        {!uploadDisabled && (children || <Button>上传</Button>)}
      </Upload>
    </Form.Item>
  );
};

export default UploadFormItem;
