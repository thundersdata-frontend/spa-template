/*
 * @文件描述: 封装 Upload FormItem 组件
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-06-11 10:22:48
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-07-09 17:38:52
 */
import React, { useState, useEffect } from 'react';
import { Form, Button, Upload } from 'antd';
import {
  getFileValidators,
  getPublicUploadProps,
  ATTACHMENT_MAX_FILE_COUNT,
  handleUpload,
  getBeforeUpload,
} from '@/utils/upload';
import { InternalFieldProps } from 'rc-field-form/es/Field';
import { UploadProps, UploadChangeParam } from 'antd/lib/upload';
import { FormItemLabelProps } from 'antd/lib/form/FormItemLabel';
import { FormItemInputProps } from 'antd/lib/form/FormItemInput';

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
  formItemProps?: InternalFieldProps & FormItemLabelProps & FormItemInputProps;
  /** upload 属性 */
  uploadProps?: UploadProps;
}

// 初始化文件长度
const INITIAL_FILE_LENGTH = 0;

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
  const maxCountNumber =
    maxCount === true ? ATTACHMENT_MAX_FILE_COUNT : maxCount;
  // 文件个数
  const [fileLength, setFileLength] = useState<number>(INITIAL_FILE_LENGTH);
  // 超出或达到最大文件个数，禁用上传
  const [uploadDisabled, setUploadDisabled] = useState<boolean>(false);
  const formatedAccept = Array.isArray(accept) ? accept.join(',') : accept;
  const validatorObj = {
    maxCount,
    maxSize,
    accept,
  }
  const fileValidatorsList = getFileValidators(validatorObj);

  /** 改变上传文件调用 */
  const handleChange = (info: UploadChangeParam) => {
    maxCountNumber && setUploadDisabled(info.fileList.length >= maxCountNumber);
    onChange && onChange(info);
  };

  useEffect(() => {
    maxCountNumber && setUploadDisabled(fileLength >= maxCountNumber);
  }, [fileLength]);


  return (
    <Form.Item
      label={label}
      name={name}
      valuePropName="fileList"
      required={required}
      rules={[
        { required },
        ...fileValidatorsList,
      ]}
      getValueFromEvent={handleUpload}
      getValueProps={value => {
        setFileLength(value?.length || INITIAL_FILE_LENGTH);
        return { fileList: value };
      }}
      {...formItemProps}
    >
      <Upload
        {...getPublicUploadProps()}
        accept={formatedAccept}
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
