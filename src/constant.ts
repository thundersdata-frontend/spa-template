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

export const THROTTLE_INTERVAL = 500;

/**
 * 认证中心
 */
export const AUTH_API_URL = 'http://api.dev.thundersdata.com';

/** 获取 验证码方式枚举 */
export enum SMS_TYPE_ENUM {
  注册 = 0,
  修改密码 = 1,
  登录 = 2,
}

/**
 * 登录配置
 */
export const LOGIN_CONFIG = Object.freeze({
  /** 应用ID */
  clientId: '',
  /** 是否是单点登录 */
  isSSO: false,
  /** 密钥 */
  secret: '',
});
