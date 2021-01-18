/*
 * @文件描述: 封装 Upload FormItem 组件
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-06-11 10:22:48
 * @LastEditors: 廖军
 * @LastEditTime: 2020-11-25 17:53:23
 */
import React, { forwardRef } from 'react';
import { Form, Button, Upload, Tooltip } from 'antd';
import {
  getFileValidators,
  getPublicUploadProps,
  ATTACHMENT_MAX_FILE_COUNT,
  handleUpload,
  getFileSizeName,
  getBeforeUpload,
  ATTACHMENT_MAX_FILE_SIZE,
} from './utils/upload';
import type { InternalFieldProps } from 'rc-field-form/es/Field';
import type { UploadProps, UploadChangeParam } from 'antd/lib/upload';
import type { FormItemLabelProps } from 'antd/lib/form/FormItemLabel';
import type { FormItemInputProps } from 'antd/lib/form/FormItemInput';
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
  maxSize?: number;
  /** 限制文件个数,默认为 10 个 */
  maxCount?: number;
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
  /** 上传中根据状态切换 loading 状态 */
  setLoading?: (status: boolean) => void;
}

/**
 * 直接在自定义组件里面检测参数变化
 * @param param0
 */
interface CustomUploadProps extends UploadProps {
  maxCount: number;
  children: React.ReactNode;
}
const CustomUpload = forwardRef<UploadProps, CustomUploadProps>(
  ({ fileList = [], children, maxCount, ...rest }, ref) => {
    const uploadDisabled = fileList?.length >= maxCount;
    return (
      <Upload ref={ref} {...getPublicUploadProps()} fileList={fileList} {...rest}>
        {!uploadDisabled && (children || <Button>上传</Button>)}
      </Upload>
    );
  },
);

const UploadFormItem: React.FC<UploadFormItemProps> = (uploadItemProps) => {
  const {
    name = '',
    label = '',
    hiddenTooltip = false,
    required = false,
    requiredMessage = `'${label}' 是必填字段`,
    accept,
    maxSize = ATTACHMENT_MAX_FILE_SIZE,
    maxCount = ATTACHMENT_MAX_FILE_COUNT,
    disabled = false,
    multiple = false,
    formItemProps = {},
    uploadProps = {},
    onChange,
    children,
    setLoading,
  } = uploadItemProps;
  if (maxCount < 1) {
    throw new Error('maxCount 必须是大于0的整数');
  }
  const formattedAccept = Array.isArray(accept) ? accept.join(',') : accept;
  const validatorObj = {
    maxCount,
    maxSize,
    accept,
  };

  /** 改变上传文件调用 */
  const handleChange = async (info: UploadChangeParam) => {
    onChange?.(info);
    if (setLoading) {
      setLoading(true);

      if (!info.fileList.find((item) => item.status === 'uploading')) {
        setLoading(false);
      }
    }
  };

  /** 渲染tooltip 的 title */
  const renderLabelTitle = () => (
    <div className={styles.labelWrap}>
      {maxCount && <div>个数：最多上传 {maxCount} 个文件</div>}
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
    !hiddenTooltip && (maxSize || maxCount || accept) ? (
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
      getValueProps={(value) => {
        return { fileList: value };
      }}
      {...formItemProps}
    >
      <CustomUpload
        accept={formattedAccept}
        disabled={disabled}
        multiple={multiple}
        onChange={handleChange}
        beforeUpload={getBeforeUpload(validatorObj)}
        maxCount={maxCount}
        {...uploadProps}
      >
        {children}
      </CustomUpload>
    </Form.Item>
  );
};

export default UploadFormItem;
