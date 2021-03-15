/**
 * 初始化分页数据
 */
export const initialPagination = {
  page: 1,
  pageSize: 10,
};

/**
 * 文件服务地址
 */
export const UPLOAD_URL = 'http://object-service.dev.thundersdata.com';

/**
 * 认证中心
 */
export const AUTH_API_URL = 'http://api.dev.thundersdata.com';

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
