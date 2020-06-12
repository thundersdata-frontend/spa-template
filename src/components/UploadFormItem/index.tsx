/*
 * @文件描述: 封装 Upload FormItem 组件
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-06-11 10:22:48
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-06-11 11:20:36
 */
import React from 'react';
import { Form, Button, Upload } from 'antd';
import {
  getFileValidators,
  getPublicUploadProps,
  handleUpload,
} from '@/utils/upload';
import { InternalFieldProps } from 'rc-field-form/es/Field';
import { UploadProps, UploadChangeParam } from 'antd/lib/upload';
import { FormItemLabelProps } from 'antd/es/form/FormItemLabel';

export interface UploadFormItemProps {
  /** formItem 的标签 */
  label?: string;
  /** formItem 的字段名 */
  name?: string;
  /** 是否必选 */
  required?: boolean;
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
  formItemProps?: InternalFieldProps & FormItemLabelProps;
  /** uplaod 属性 */
  uploadProps?: UploadProps;
}

const UploadFormItem: React.FC<UploadFormItemProps> = uploadItemProps => {
  const {
    label = '',
    name = '',
    required = false,
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

  const formatedAccept = Array.isArray(accept) ? accept.join(',') : accept;

  return (
    <Form.Item
      label={label}
      name={name}
      valuePropName="fileList"
      required={required}
      rules={[
        { required },
        ...getFileValidators({
          maxCount,
          maxSize,
          accept,
        }),
      ]}
      getValueFromEvent={handleUpload}
      {...formItemProps}
    >
      <Upload
        accept={formatedAccept}
        {...getPublicUploadProps()}
        disabled={disabled}
        multiple={multiple}
        onChange={onChange}
        {...uploadProps}
      >
        {children || <Button>上传</Button>}
      </Upload>
    </Form.Item>
  );
};

export default UploadFormItem;
