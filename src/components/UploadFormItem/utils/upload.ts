import type { UploadProps } from 'antd/lib/upload';
import string from '@/utils/string';
import type { UploadFile, RcFile } from 'antd/lib/upload/interface';
import { message } from 'antd';

// 文件服务开发环境地址
export const UPLOAD_URL = 'http://object-service.dev.thundersdata.com';

/** 文件校验类型 传入 true 时使用默认值,不传或 false 禁用 */
export interface FileValidatorsProps {
  /** 限制文件大小,单位为 M,默认 10 M */
  maxSize?: number;
  /** 限制文件后缀,为可选后缀列表(支持string),默认为图片 */
  accept?: string[] | string;
  /** 限制文件个数,默认为 10 个 */
  maxCount?: number;
}

// 文件校验类型函数映射
const VALIDATOR_MAP = Object.freeze({
  maxSize: validatorFileListSizeRule,
  accept: validatorFileListSuffixRule,
  maxCount: validatorFileListCount,
});

// 最大文件个数限制
export const ATTACHMENT_MAX_FILE_COUNT = 10;

// 基础字节
export const BASE_BYTE = 1024;

// 最大文件大小限制 20M
export const ATTACHMENT_MAX_FILE_SIZE = 20 * BASE_BYTE;

// 最大图片大小限制 300 KB
export const MAX_IMAGE_SIZE = 300;

// 最大缩略图大小限制 50 KB
export const MAX_THUMBNAIL_SIZE = 50;

/** 文件类型映射 */
export const FILE_TYPE_MAP = {
  图片: ['.jpg', '.jpeg', '.gif', '.png', '.bmp', '.webp'],
  压缩包: ['.rar', '.zip'],
  文档: ['.doc', '.docx', '.pdf'],
  表格: ['.xls'],
  视频: ['.avi', '.wmv', '.mpg', '.mpeg', '.mov', '.mp4', '.rm', '.ram'],
};

/**
 * 根据fileId获取下载地址
 * @param fileId
 */
export const getDownloadUrlWithId = (fileId: number | string) => {
  const regs = /^[0-9]+$/;
  // 判断是否加密,若为已加密
  if (!regs.test(`${fileId}`)) {
    return `${UPLOAD_URL}/download/direct?fileId=${fileId}&access_token=${localStorage.getItem(
      'accessToken',
    )}`;
  }
  // 若没有加密
  return `${UPLOAD_URL}/file/download?fileId=${fileId}&access_token=${localStorage.getItem(
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
) => {
  // 文件后缀
  const fileSuffix = `.${string.getLastSubstring(file.name, '.')}`;
  const formatedAllowFileList = Array.isArray(allowFileList)
    ? allowFileList
    : allowFileList.split(',');
  return formatedAllowFileList.includes(fileSuffix);
};

export const getPublicUploadProps: () => UploadProps = () => ({
  accept: '.doc,.docx,.pdf,.rar,.zip,.jpg,.png,.bmp,.gif',
  withCredentials: false,
  action: `${UPLOAD_URL}/file/uploadToPub`,
  data: {
    access_token: localStorage.getItem('accessToken'),
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
    value.some((file) => {
      if (file.response && !file.response.success) {
        throw new Error(`上传文件失败: ${file.response.message}`);
      }
      return file;
    });
    callback();
  } catch (error) {
    callback(error);
  }
}

/** 得到文件大小的文本 */
export const getFileSizeName = (size: number | boolean): string => {
  if (typeof size === 'number') {
    return size > BASE_BYTE ? `${size / 1024} M` : `${size} KB`;
  }
  if (size) {
    return getFileSizeName(ATTACHMENT_MAX_FILE_SIZE);
  }
  return '';
};

/**
 * 对附件大小进行校验
 * @param params maxSize (KB)
 * @param {object} 返回验证rule对象
 */
export function validatorFileListSizeRule(params = { maxSize: ATTACHMENT_MAX_FILE_SIZE }) {
  const { maxSize } = params;
  return {
    validator: (_rule: unknown, values: UploadFile[], callback: (error?: string) => void) => {
      if (values && values.length) {
        const validationFailedList = values.filter((file) => file.size / BASE_BYTE > maxSize);
        if (validationFailedList.length) {
          const names = validationFailedList.map((file) => file.name).join(',');
          callback(
            `${names}，文件大小超过${
              maxSize > BASE_BYTE ? `${maxSize / 1024} M` : `${maxSize} KB`
            }`,
          );
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
          (file: UploadFile) => !isPermitFile(file, accept),
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
  const validatorList = Object.keys(params).filter((item) => !!params[item]);
  return validatorList.map((item) =>
    params[item] === true ? VALIDATOR_MAP[item]() : VALIDATOR_MAP[item]({ [item]: params[item] }),
  );
};

/**
 * 传入校验数组获得 beforeUpload 函数(如果有单独的 Upload 需要类型、大小校验可以用这个函数)
 * maxCount 最好不要在 beforeUpload 中处理，因为拿到的 fileList 只是改变的文件列表而不包含原来的
 */
export const getBeforeUpload = (validatorObj: FileValidatorsProps, showMessage?: boolean) => (
  file: RcFile,
) => {
  const errorMessageList: string[] = [];
  /** 若不符合要求阻断上传 */
  getFileValidators(validatorObj).forEach((item) => {
    item.validator('', [file], (error?: string) => {
      if (error) {
        errorMessageList.push(error);
        if (showMessage) {
          message.error(error);
        }
      }
    });
  });
  return errorMessageList.length === 0;
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
    ? files.map((file) => {
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
