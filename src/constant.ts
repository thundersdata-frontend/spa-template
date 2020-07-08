/**
 * 初始化分页数据
 */
export const initialPagination = {
  page: 1,
  pageSize: 10,
};

/**
 * 图片格式的类型
 */
export const IMAGE_TYPES = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'];

// 后端返回的code
export enum LoginFailure {
  登录过期 = 50400,
  不允许登录 = 50402,
}

/**
 * 文件服务地址
 */
export const UPLOAD_URL = 'http://object-service.dev.thundersdata.com';
