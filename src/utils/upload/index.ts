/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-05-25 16:07:51
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-06-12 10:52:36
 */
import { UploadProps } from 'antd/lib/upload';
import string from '@/utils/string';
import { UploadFile } from 'antd/lib/upload/interface';
import { FileDTO } from '@/interfaces/common';

// 文件服务开发环境地址
export const UPLOAD_URL = 'http://object-service.dev.thundersdata.com';

/** 文件校验类型 传入 true 时使用默认值,不传或 false 禁用 */
export interface FileValidatorsProps {
  /** 限制文件大小,单位为 M,默认 10 M */
  maxSize?: number | boolean;
  /** 限制文件后缀,为可选后缀列表(支持string),默认为图片 */
  accept?: string[] | string | boolean;
  /** 限制文件个数,默认为 10 个 */
  maxCount?: number | boolean;
}

// 文件校验类型函数映射
const VALIDATOR_MAP = Object.freeze({
  maxSize: validatorFileListSizeRule,
  accept: validatorFileListSuffixRule,
  maxCount: validatorFileListCount,
});

// 最大文件个数限制
export const ATTACHMENT_MAX_FILE_COUNT = 10;

// 最大文件大小限制
export const ATTACHMENT_MAX_FILE_SIZE = 20;

// 基础字节
export const BASE_BYTE = 1024;

/** 文件类型映射 */
export const FILE_TYPE_MAP = {
  图片: ['.png', '.jpg', '.bmp', '.gif'],
  压缩包: ['.rar', '.zip'],
  文档: ['.doc', '.docx', '.pdf'],
  表格: ['.xls'],
};

/**
 * 根据fileId获取下载地址
 * @param fileId
 */
export const getDownloadUrlWithId = (fileId: number | string) => {
  const regs = /^[0-9]+$/;
  // 判断是否加密,若为已加密
  if (!regs.test('' + fileId)) {
    return `${UPLOAD_URL}/download/direct?fileId=${fileId}&access_token=${sessionStorage.getItem(
      'accessToken',
    )}`;
  }
  // 若没有加密
  return `${UPLOAD_URL}/file/download?fileId=${fileId}&access_token=${sessionStorage.getItem(
    'accessToken',
  )}`;
};

export const onPreview = (file: UploadFile) => {
  window.open(file.url || getDownloadUrlWithId(file.response.data.fileId), '_blank');
};

// 判断是否符合文件格式，不传默认校验type
export const isPermitFile = (
  file: UploadFile,
  allowFileList: string[] | string = FILE_TYPE_MAP['图片'],
  validateItem: string[] | string = ['type'],
) => {
  // 文件后缀
  const fileSuffix = '.' + string.getLastSubstring(file.name, '.');
  const formatedAllowFileList = Array.isArray(allowFileList)
    ? allowFileList
    : allowFileList.split(',');
  const isPermitType = formatedAllowFileList.includes(fileSuffix);
  const validateObj = {
    type: isPermitType,
  };
  // 若传入字符串单项
  if (typeof validateItem === 'string') {
    return validateObj[validateItem];
  }
  // 若传入校验类型数组
  if (Array.isArray(validateItem)) {
    for (let i = 0; i < validateItem.length; i += 1) {
      if (!validateObj[validateItem[i]]) {
        return false;
      }
    }
  }
  return true;
};

export const getPublicUploadProps: () => UploadProps = () => ({
  accept: '.doc,.docx,.pdf,.rar,.zip,.jpg,.png,.bmp,.gif',
  withCredentials: false,
  action: `${UPLOAD_URL}/file/uploadToPub`,
  data: {
    access_token: sessionStorage.getItem('accessToken'),
  },
  showUploadList: {
    showDownloadIcon: false,
    showPreviewIcon: false,
  },
  onPreview,
});

export const handleUpload = ({ fileList }: { fileList: UploadFile[] }) => {
  return fileList;
};

/**
 * 对上传类的表单项进行校验
 * @param _
 * @param value
 * @param callback
 */
export function uploadValidator(
  _: unknown,
  value: UploadFile[],
  callback: (error?: string) => void,
) {
  try {
    value &&
      value.some(file => {
        if (file.response && !file.response.success) {
          throw new Error('上传文件失败: ' + file.response.message);
        }
        return file;
      });
    callback();
  } catch (error) {
    callback(error);
  }
}

/**
 * 对附件大小进行校验
 * @param params maxSize
 * @param {object} 返回验证rule对象
 */
export function validatorFileListSizeRule(params = { maxSize: ATTACHMENT_MAX_FILE_SIZE }) {
  const { maxSize } = params;
  return {
    validator: (_rule: unknown, values: UploadFile[], callback: (error?: string) => void) => {
      if (values && values.length) {
        const validationFailedList = values.filter(
          file => file.size / BASE_BYTE / BASE_BYTE > maxSize,
        );
        if (validationFailedList.length) {
          const names = validationFailedList.map(file => file.name).join(',');
          callback(`${names}，文件大小超过${maxSize}M`);
        } else {
          callback();
        }
      } else {
        callback();
      }
    },
  };
}

/**
 * 对附件后缀进行校验
 * @param params maxSize
 * @param {object} 返回验证rule对象
 */
export function validatorFileListSuffixRule(
  params = {
    accept: FILE_TYPE_MAP['图片'],
  },
) {
  const { accept } = params;
  return {
    validator: (_: unknown, values: UploadFile[], callback: (error?: string) => void) => {
      if (values && values.length) {
        const typeValidationFailedList = values.filter(
          (file: UploadFile) => !isPermitFile(file, accept, 'type'),
        );
        if (typeValidationFailedList.length) {
          const names = typeValidationFailedList.map((file: UploadFile) => file.name).join(',');
          callback(`${names}，文件类型不符合要求`);
        } else {
          callback();
        }
      } else {
        callback();
      }
    },
  };
}

/**
 * 对附件个数进行校验
 * @param params maxCount
 * @param {object} 返回验证rule对象
 */
export function validatorFileListCount(
  params = {
    maxCount: ATTACHMENT_MAX_FILE_COUNT,
  },
) {
  const { maxCount } = params;
  return {
    validator: (_: unknown, values: UploadFile[], callback: (error?: string) => void) => {
      if (values && values.length) {
        if (values.length > maxCount) {
          callback(`文件个数超过 ${maxCount} 个!`);
        } else {
          callback();
        }
      } else {
        callback();
      }
    },
  };
}

/**
 * 获得文件校验配置数组
 * @param params
 */
export const getFileValidators = (params: FileValidatorsProps) => {
  const validatorList = Object.keys(params).filter(item => !!params[item]);
  return validatorList.map(item =>
    params[item] === true ? VALIDATOR_MAP[item]() : VALIDATOR_MAP[item]({ [item]: params[item] }),
  );
};

/**
 * 将后端返回的附件转换成上传文件需要的格式
 * @param files
 */
export function fileTransform(files?: FileDTO[]): UploadFile[] {
  return files && files.length > 0
    ? files.map(({ fileId, fileName, fileUrl, ...rest }) => ({
        ...rest,
        uid: fileId,
        status: 'done',
        size: 0,
        type: '',
        name: fileName || getDownloadUrlWithId(fileId),
        url: fileUrl,
        response: {
          success: true,
          data: {
            fileId,
            fileName: fileName || getDownloadUrlWithId(fileId),
            url: fileUrl,
          },
        },
      }))
    : [];
}

/**
 * 将上传组件里面的文件转成后端需要的FileDTO
 * @param files
 */
export function transformFile(files?: UploadFile[]): FileDTO[] {
  return files && files.length > 0
    ? files.map(file => {
        const { fileId, fileName, url } = file.response.data;
        return {
          fileId,
          fileName,
          fileUrl: url,
          type: '',
        };
      })
    : [];
}

/**
 * 获得图片文件预览地址
 * @param fileId
 * 图片地址
 */
export const getImgPreviewUrl = (fileId: string) => `${UPLOAD_URL}/file/preview?fileId=${fileId}`;
