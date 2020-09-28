class AccountAllNumDTO {
  /** 广告总数 */
  adAllNum = undefined;

  /** 自动下架 */
  adAutoOffNum = undefined;

  /** 待审核 */
  adCheckingNum = undefined;

  /** 未上架 */
  adFreshNum = undefined;

  /** 已上架 */
  adOnNum = undefined;

  /** 已驳回 */
  adRejectedNum = undefined;

  /** 余额 */
  balance = undefined;

  /** false：不足，true：余额充足 */
  enough = false;
}

class AccountBalanceDTO {
  /** 账户余额 */
  balance = undefined;

  /** 当月账号消费 */
  monthAmount = undefined;

  /** 当天账号消费 */
  todayAmount = undefined;
}

class AccountBanTypeDTO {
  /** 封禁类型，0：正常  1：广告封禁，禁用广告  2：广告主封禁，禁止登录，包括禁用广告  默认0 */
  banType = undefined;

  /** id */
  id = undefined;

  /** 封禁原因 */
  reason = '';
}

class AccountCompanyAddDTO {
  /** 详细地址 */
  address = '';

  /** 申请id */
  applyId = undefined;

  /** 市 */
  city = '';

  /** 营业执照 */
  companyLicenseUrl = '';

  /** 公司名称 */
  companyName = '';

  /** 联系电话 */
  contactPhone = '';

  /** 区 */
  district = '';

  /** 个人身份证号/法人身份证号 */
  idCard = '';

  /** 身份证反面 */
  idCardBackUrl = '';

  /** 身份证正面 */
  idCardFrontUrl = '';

  /** 初始密码 */
  initPassword = '';

  /** 个人简介/公司简介 */
  introduction = '';

  /** 超级管理员账号 */
  managerName = '';

  /** 个人姓名/法人姓名 */
  personName = '';

  /** 超级管理员手机 */
  phone = '';

  /** 省 */
  province = '';

  /** 联系人姓名 */
  submitName = '';

  /** 联系人手机 */
  submitPhone = '';

  /**  联系人职务 */
  submitPosition = '';

  /** 职务证明 */
  submitPositionUrl = '';
}

class AccountCompanyDetailDTO {
  /** 封禁理由 */
  adType = undefined;

  /** 详细地址 */
  address = '';

  /** 申请时间 */
  applyAt = '';

  /** 会员账号昵称 */
  applyNickName = '';

  /** 会员账号手机号 */
  applyPhone = '';

  /** 申请会员账号Id */
  applyUserId = undefined;

  /** 封禁状态 */
  banType = undefined;

  /** 市 */
  city = '';

  /** 市名称 */
  cityName = '';

  /** 营业执照 */
  companyLicenseUrl = '';

  /** 公司名称 */
  companyName = '';

  /** 联系电话 */
  contactPhone = '';

  /** 开通时间 */
  createdAt = '';

  /** 区 */
  district = '';

  /** 区名称 */
  districtName = '';

  /** 广告主Id */
  id = undefined;

  /** 个人身份证号/法人身份证号 */
  idCard = '';

  /** 身份证反面 */
  idCardBackUrl = '';

  /** 身份证正面 */
  idCardFrontUrl = '';

  /** 个人简介/公司简介 */
  introduction = '';

  /** 超级管理员账号 */
  managerName = '';

  /** 个人姓名/法人姓名 */
  personName = '';

  /** 超级管理员手机 */
  phone = '';

  /** 省 */
  province = '';

  /** 省名称 */
  provinceName = '';

  /** 封禁理由 */
  reason = '';

  /** 联系人姓名 */
  submitName = '';

  /** 联系人联系方式 */
  submitPhone = '';

  /** 联系人职务 */
  submitPosition = '';

  /** 联系人职务证明 */
  submitPositionUrl = '';
}

class AccountListDTO {
  /** 广告主名称 */
  accountName = '';

  /** 广告数量 */
  adCount = undefined;

  /** 会员账号昵称 */
  applyNickName = '';

  /** 会员账号手机号 */
  applyPhone = '';

  /** 申请会员账号Id */
  applyUserId = undefined;

  /** 账户余额 */
  balance = undefined;

  /** 封禁状态 */
  banType = undefined;

  /** 联系电话 */
  contactPhone = '';

  /** 开通时间 */
  createdAt = '';

  /** id */
  id = undefined;

  /** 超级管理员账号 */
  managerName = '';

  /** 超级管理员手机 */
  phone = '';

  /** 封禁理由 */
  reason = '';

  /** 联系人姓名 */
  submitName = '';

  /** 联系人手机号 */
  submitPhone = '';

  /** 联系人职务 */
  submitPosition = '';
}

class AccountPersonAddDTO {
  /** 详细地址 */
  address = '';

  /** 申请id */
  applyId = undefined;

  /** 市 */
  city = '';

  /** 联系电话 */
  contactPhone = '';

  /** 区 */
  district = '';

  /** 个人身份证号/法人身份证号 */
  idCard = '';

  /** 身份证反面 */
  idCardBackUrl = '';

  /** 身份证正面 */
  idCardFrontUrl = '';

  /** 初始密码 */
  initPassword = '';

  /** 个人简介/公司简介 */
  introduction = '';

  /** 超级管理员账号 */
  managerName = '';

  /** 个人姓名/法人姓名 */
  personName = '';

  /** 超级管理员手机 */
  phone = '';

  /** 省 */
  province = '';
}

class AccountPersonDetailDTO {
  /** 封禁理由 */
  adType = undefined;

  /** 详细地址 */
  address = '';

  /** 申请时间 */
  applyAt = '';

  /** 会员账号昵称 */
  applyNickName = '';

  /** 会员账号手机号 */
  applyPhone = '';

  /** 申请会员账号Id */
  applyUserId = undefined;

  /** 封禁状态 */
  banType = undefined;

  /** 市 */
  city = '';

  /** 市名称 */
  cityName = '';

  /** 联系电话 */
  contactPhone = '';

  /** 开通时间 */
  createdAt = '';

  /** 区 */
  district = '';

  /** 区名称 */
  districtName = '';

  /** 广告主Id */
  id = undefined;

  /** 个人身份证号/法人身份证号 */
  idCard = '';

  /** 身份证反面 */
  idCardBackUrl = '';

  /** 身份证正面 */
  idCardFrontUrl = '';

  /** 个人简介/公司简介 */
  introduction = '';

  /** 超级管理员账号 */
  managerName = '';

  /** 个人姓名/法人姓名 */
  personName = '';

  /** 超级管理员手机 */
  phone = '';

  /** 省 */
  province = '';

  /** 省名称 */
  provinceName = '';

  /** 封禁理由 */
  reason = '';
}

class AdAllNumDTO {
  /** 广告主数量 */
  accountAllNum = undefined;

  /** 广告主禁用 */
  accountBanNum = undefined;

  /** 广告主今日新增 */
  accountTodayAddNum = undefined;

  /** 广告总数 */
  adAllNum = undefined;

  /** 上架中 */
  adOnNum = undefined;

  /** 今日新增 */
  adTodayAddNum = undefined;

  /** 广告主账户余额总额 */
  allAccountBalance = undefined;

  /** 广告主已扣费总额 */
  allDeduction = undefined;

  /** 广告主充值总额 */
  allRecharge = undefined;
}

class AdFreeAddDTO {
  /** 商品名称 */
  commodityName = '';

  /** 有效天数 */
  days = undefined;

  /** 价格 */
  price = undefined;
}

class AdFreeDeleteDTO {
  /** 商品编号 */
  commodityCode = '';
}

class AdFreeDetailDTO {
  /** 商品id */
  commodityCode = '';

  /** 商品名称 */
  commodityName = '';

  /** 有效天数 */
  days = undefined;

  /** 价格 */
  price = undefined;

  /** 商品状态 */
  status = undefined;
}

class AdFreeOrderDetailDTO {
  /** 支付金额 */
  amount = undefined;

  /** 商品名称 */
  commodityName = '';

  /** 商品订单详情id */
  id = undefined;

  /** 用户昵称 */
  nickName = '';

  /** 订单编号 */
  orderCode = '';

  /** 支付时间 */
  payAt = '';

  /** 支付类型：1支付宝，2微信 */
  payType = undefined;

  /** 用户手机号 */
  phone = '';

  /** 用户姓名 */
  realName = '';

  /** 用户id */
  userId = undefined;
}

class AdFreePayDTO {
  /** 购买商品编号 */
  commodityCode = '';

  /** 支付类型：1支付宝，2微信 */
  payType = undefined;
}

class AdFreeStatusDTO {
  /** 商品编号 */
  commodityCode = '';

  /** 销售状态：默认1,1：已下架，0：已上架 */
  status = undefined;
}

class AdFreeUpdateDTO {
  /** 商品编号 */
  commodityCode = '';

  /** 商品名称 */
  commodityName = '';

  /** 有效天数 */
  days = undefined;

  /** 价格 */
  price = undefined;
}

class AdMemberInfoDTO {
  /** 广告主id */
  accountId = undefined;

  /** 广告主名称 */
  accountName = '';

  /** 购买一键收租总金额 */
  adFreeAmount = undefined;

  /** 用户id */
  userId = undefined;
}

class AdOpLogListDTO {
  /** 广告主Id */
  accountId = undefined;

  /** 广告主名称 */
  accountName = '';

  /** 业务模块 */
  businessModule = '';

  /** createdAt */
  createdAt = '';

  /** 日志id */
  id = undefined;

  /** loginIp */
  loginIp = '';

  /** 用户id */
  managerId = undefined;

  /** 用户名 */
  managerName = '';

  /** 姓名 */
  nickName = '';

  /** 操作资源 */
  opResources = '';

  /** 操作类型 */
  opType = '';

  /** 角色Id */
  roleId = undefined;

  /** 角色名称 */
  roleName = '';
}

class AdOpStatisticsListDTO {
  /** 广告主名称 */
  accountName = '';

  /** 投放广告名称 */
  adTitle = '';

  /** 点击次数 */
  hrefCount = undefined;

  /** 展示次数 */
  showCount = undefined;
}

class AdOpStatisticsQueryDTO {
  /** 年龄范围 */
  ageType = undefined;

  /** 起始时间 */
  beginDate = '';

  /** 城市Code列表 */
  cityList = [];

  /** 时间类型：0：按日,1：按月 */
  currentTime = undefined;

  /** 结束时间 */
  endDate = '';

  /** limit */
  limit = undefined;

  /** offset */
  offset = undefined;

  /** page */
  page = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 性别，0不限，1为男性，2为女性 */
  sex = undefined;
}

class AdPieStatisticsDTO {
  /** type */
  type = '';

  /** 数量 */
  value = undefined;
}

class AdStatisticsDTO {
  /** 日期 */
  date = '';

  /** 类别：0展示扣费，1点击扣费 */
  type = '';

  /** 数量 */
  value = undefined;
}

class AdTitleDTO {
  /** 标题 */
  adTitle = '';

  /** id */
  id = undefined;
}

class AdvertisingAddDTO {
  /** 广告链接 */
  adHref = '';

  /** 广告url */
  adImgUrl = '';

  /** 广告标题 */
  adTitle = '';

  /** 目标年龄 */
  goalAgeList = [];

  /** 投放城市列表 传空值表示不限 */
  goalCityList = [];

  /** 目标性别 */
  goalSex = undefined;
}

class AdvertisingAppQueryDTO {
  /** 年龄 */
  age = undefined;

  /** 城市Code */
  city = '';

  /** 广告Id */
  id = undefined;

  /** 性别，1为男性，2为女性 */
  sex = undefined;
}

class AdvertisingDTO {
  /** 广告点击链接 */
  adHref = '';

  /** 广告图片 */
  adImgUrl = '';

  /** 广告标题 */
  adTitle = '';

  /** 目标年龄名称 */
  ageRangeList = [];

  /** 投放城市名称 */
  cityNameList = [];

  /** 创建时间 */
  createdAt = '';

  /** 目标年龄 */
  goalAgeList = [];

  /** 投放城市 */
  goalCityList = [];

  /** 目标性别 */
  goalSex = undefined;

  /** 广告id */
  id = undefined;

  /** 驳回原因 */
  reason = '';

  /** 广告状态 0, "未上架" 1, "待审核" 2, "已上架" 3, "已驳回" 4, "已下架" 5, "自动下架" */
  state = undefined;
}

class AdvertisingOpDTO {
  /** accountName */
  accountName = '';

  /** 广告点击链接 */
  adHref = '';

  /** 广告图片 */
  adImgUrl = '';

  /** 广告标题 */
  adTitle = '';

  /** 目标年龄名称 */
  ageRangeList = [];

  /** 投放城市名称 */
  cityNameList = [];

  /** 创建时间 */
  createdAt = '';

  /** 目标年龄 */
  goalAgeList = [];

  /** 投放城市 */
  goalCityList = [];

  /** 目标性别 */
  goalSex = undefined;

  /** 广告id */
  id = undefined;

  /** 驳回原因 */
  reason = '';

  /** 广告状态 0, "未上架" 1, "待审核" 2, "已上架" 3, "已驳回" 4, "已下架" 5, "自动下架" */
  state = undefined;
}

class AdvertisingShowDTO {
  /** 广告链接 */
  adHref = '';

  /** 广告图片链接 */
  adImgUrl = '';

  /** 广告标题 */
  adTitle = '';

  /** 广告Id */
  id = undefined;
}

class AdvertisingUpdateDTO {
  /** 广告点击链接 */
  adHref = '';

  /** 广告图片 */
  adImgUrl = '';

  /** 广告标题 */
  adTitle = '';

  /** 目标年龄 */
  goalAgeList = [];

  /** 投放城市 */
  goalCityList = [];

  /** 目标性别 */
  goalSex = undefined;

  /** 广告id */
  id = undefined;
}

class ApplyCompanyAddDTO {
  /** 详细地址 */
  address = '';

  /** 市 */
  city = '';

  /** 营业执照 */
  companyLicenseUrl = '';

  /** 公司名称 */
  companyName = '';

  /** 联系电话 */
  contactPhone = '';

  /** 区 */
  district = '';

  /** 个人身份证号/法人身份证号 */
  idCard = '';

  /** 身份证反面 */
  idCardBackUrl = '';

  /** 身份证正面 */
  idCardFrontUrl = '';

  /** 个人简介/公司简介 */
  introduction = '';

  /** 个人姓名/法人姓名 */
  personName = '';

  /** 省 */
  province = '';

  /** 提交人姓名 */
  submitName = '';

  /** 提交人联系方式 */
  submitPhone = '';

  /** 提交人职务 */
  submitPosition = '';

  /** 提交人职务证明 */
  submitPositionUrl = '';
}

class ApplyCompanyDetailDTO {
  /** 详细地址 */
  address = '';

  /** 会员账号昵称 */
  applyNickName = '';

  /** 会员账号手机号 */
  applyPhone = '';

  /** 申请会员账号Id */
  applyUserId = undefined;

  /** 审批时间 */
  approveAt = '';

  /** 审批用户姓名 */
  approveOpNickName = '';

  /** 审批id */
  approveOpUserId = undefined;

  /** 审批用户名 */
  approveOpUserName = '';

  /** 0：申请中  1：已通过状态  2：已驳回状态，3是已开通账号 */
  approveStatus = undefined;

  /** 市 */
  city = '';

  /** 市名称 */
  cityName = '';

  /** 营业执照 */
  companyLicenseUrl = '';

  /** 公司名称 */
  companyName = '';

  /** 联系电话 */
  contactPhone = '';

  /** 申请时间 */
  createdAt = '';

  /** 区 */
  district = '';

  /** 区名称 */
  districtName = '';

  /** 广告主申请Id */
  id = undefined;

  /** 个人身份证号/法人身份证号 */
  idCard = '';

  /** 身份证反面 */
  idCardBackUrl = '';

  /** 身份证正面 */
  idCardFrontUrl = '';

  /** 个人简介/公司简介 */
  introduction = '';

  /** 个人姓名/法人姓名 */
  personName = '';

  /** 省 */
  province = '';

  /** 省名称 */
  provinceName = '';

  /** 驳回原因 */
  reason = '';

  /** 提交人姓名 */
  submitName = '';

  /** 提交人联系方式 */
  submitPhone = '';

  /** 提交人职务 */
  submitPosition = '';

  /** 提交人职务证明 */
  submitPositionUrl = '';
}

class ApplyListDTO {
  /** 会员账号昵称 */
  applyNickName = '';

  /** 会员账号手机号 */
  applyPhone = '';

  /** 申请会员账号Id */
  applyUserId = undefined;

  /** 申请状态 */
  approveStatus = undefined;

  /** 公司名称 */
  companyName = '';

  /** 联系电话 */
  contactPhone = '';

  /** 申请时间 */
  createdAt = '';

  /** id */
  id = undefined;

  /** 个人姓名/手机号 */
  personName = '';

  /** 驳回理由 */
  reason = '';

  /** 备注 */
  remark = '';

  /** 提交人姓名 */
  submitName = '';

  /** 提交人联系方式 */
  submitPhone = '';

  /** 提交人职务 */
  submitPosition = '';
}

class ApplyPersonAddDTO {
  /** 详细地址 */
  address = '';

  /** 市 */
  city = '';

  /** 联系电话 */
  contactPhone = '';

  /** 区 */
  district = '';

  /** 个人身份证号/法人身份证号 */
  idCard = '';

  /** 身份证反面 */
  idCardBackUrl = '';

  /** 身份证正面 */
  idCardFrontUrl = '';

  /** 个人简介/公司简介 */
  introduction = '';

  /** 个人姓名/法人姓名 */
  personName = '';

  /** 省 */
  province = '';
}

class ApplyPersonDetailDTO {
  /** 详细地址 */
  address = '';

  /** 会员账号昵称 */
  applyNickName = '';

  /** 会员账号手机号 */
  applyPhone = '';

  /** 申请会员账号Id */
  applyUserId = undefined;

  /** 审批时间 */
  approveAt = '';

  /** 审批用户姓名 */
  approveOpNickName = '';

  /** 审批id */
  approveOpUserId = undefined;

  /** 审批用户名 */
  approveOpUserName = '';

  /** 0：申请中  1：已通过状态  2：已驳回状态，3是已开通账号 */
  approveStatus = undefined;

  /** 市 */
  city = '';

  /** 市名称 */
  cityName = '';

  /** 联系电话 */
  contactPhone = '';

  /** 申请时间 */
  createdAt = '';

  /** 区 */
  district = '';

  /** 区名称 */
  districtName = '';

  /** 广告主申请Id */
  id = undefined;

  /** 个人身份证号/法人身份证号 */
  idCard = '';

  /** 身份证反面 */
  idCardBackUrl = '';

  /** 身份证正面 */
  idCardFrontUrl = '';

  /** 个人简介/公司简介 */
  introduction = '';

  /** 个人姓名/法人姓名 */
  personName = '';

  /** 省 */
  province = '';

  /** 省名称 */
  provinceName = '';

  /** 驳回原因 */
  reason = '';
}

class ApplyRemarkDTO {
  /** id */
  id = undefined;

  /** 备注 */
  remark = '';
}

class ApplyReturnDTO {
  /** 申请状态 */
  approveStatus = undefined;

  /** 密码 */
  initPassword = '';

  /** 用户名 */
  managerName = '';

  /** 驳回理由 */
  reason = '';

  /** 登录网址 */
  url = '';
}

class ApplyStatusDTO {
  /** 状态 */
  approveStatus = undefined;

  /** id */
  id = undefined;

  /** 驳回原因 */
  reason = '';
}

class AreaAdListDTO {
  /** 广告主名称 */
  accountName = '';

  /** 广告主类别 */
  adType = undefined;

  /** 详细地址 */
  address = '';

  /** 市 */
  city = '';

  /** 区 */
  district = '';

  /** id */
  id = undefined;

  /** 省 */
  province = '';

  /** 联系人姓名 */
  submitName = '';

  /** 联系人手机号 */
  submitPhone = '';

  /** 联系人职务 */
  submitPosition = '';
}

class AreaAdNumDTO {
  /** cityAdMap */
  cityAdMap = undefined;

  /** districtAdMap */
  districtAdMap = undefined;
}

class AreaAdQueryDTO {
  /** 广告主名称 */
  accountName = '';

  /** 广告主类型 */
  adType = undefined;

  /** 市 */
  city = '';

  /** 区 */
  district = '';

  /** limit */
  limit = undefined;

  /** offset */
  offset = undefined;

  /** page */
  page = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 省 */
  province = '';
}

class CommonOrderPaymentInfo {
  /** body */
  body = '';

  /** orderPayType */
  orderPayType = undefined;

  /** outTradeNo */
  outTradeNo = '';

  /** paymentType */
  paymentType = undefined;

  /** redirectUrl */
  redirectUrl = '';

  /** status */
  status = undefined;

  /** statusCN */
  statusCN = '';
}

class DeductionListDTO {
  /** 广告主 */
  accountName = '';

  /** 广告 */
  adName = '';

  /** 年龄 */
  age = undefined;

  /** 展示城市 */
  city = '';

  /** 扣费id */
  id = '';

  /** 会员昵称 */
  nickName = '';

  /** 会员手机号 */
  phone = '';

  /** 性别 */
  sex = undefined;

  /** 扣费时间 */
  time = '';

  /** 扣费类型 */
  type = undefined;

  /** 扣费金额 */
  value = undefined;
}

class DisableEnable {
  /** 0正常，1禁用 */
  banType = undefined;

  /** 用户id */
  userId = undefined;
}

class LoginAccessToken {
  /** accessToken */
  accessToken = '';

  /** cellPhone */
  cellPhone = '';

  /** expiresIn */
  expiresIn = undefined;

  /** refreshToken */
  refreshToken = '';

  /** tokenType */
  tokenType = '';

  /** userId */
  userId = undefined;

  /** username */
  username = '';
}

class ManagerAddDTO {
  /** 初始密码 */
  initPassword = '';

  /** 用户名 */
  managerName = '';

  /** 姓名 */
  name = '';

  /** 手机号 */
  phone = '';

  /** 角色 */
  roleId = undefined;

  /** 性别 男1 女2 */
  sex = undefined;
}

class ManagerInfoDetailDTO {
  /** 账户Id */
  accountId = undefined;

  /** 广告主名称 */
  accountName = '';

  /** 0：个人广告主  1：企业广告主 */
  adType = undefined;

  /** 详细地址 */
  address = '';

  /** 状态 */
  banType = undefined;

  /** 市 */
  city = '';

  /** 公司名称 */
  companyName = '';

  /** 广告主联系方式 */
  contactPhone = '';

  /** 开通时间 */
  createdAt = '';

  /** 个人简介 */
  introduction = '';

  /** 用户名 */
  managerName = '';

  /** 姓名 */
  nickName = '';

  /** 手机号 */
  phone = '';

  /** 省 */
  province = '';

  /** 角色id */
  roleId = undefined;

  /** 角色 */
  roleName = '';
}

class ManagerListDTO {
  /** 封禁 */
  banType = undefined;

  /** 最近登录时间 */
  createdAt = '';

  /** 管理员id */
  managerId = undefined;

  /** 用户名 */
  managerName = '';

  /** 姓名 */
  nickName = '';

  /** 手机号 */
  phone = '';

  /** 角色id */
  roleId = undefined;

  /** 角色名称 */
  roleName = '';

  /** 性别 */
  sex = undefined;
}

class ManagerLogDTO {
  /** 业务模块 */
  businessModule = '';

  /** 操作时间 */
  createdAt = '';

  /** ip地址 */
  loginIp = '';

  /** 操作内容 */
  opContent = '';

  /** 角色 */
  role = '';

  /** 角色id */
  roleId = undefined;

  /** 管理员用户名/姓名 */
  userInfo = '';
}

class ManagerLoginDTO {
  /** 验证码 */
  code = '';

  /** 密码 */
  password = '';

  /** 手机号 */
  phone = '';

  /** 用户名 */
  username = '';
}

class ManagerUpdateDTO {
  /** 管理员ID */
  managerId = undefined;

  /** 用户名 */
  managerName = '';

  /** 姓名 */
  name = '';

  /** 手机号 */
  phone = '';

  /** 角色 */
  roleId = undefined;

  /** 性别 */
  sex = undefined;
}

class MessageListDTO {
  /** 内容 */
  content = '';

  /** 发送时间 */
  createdAt = '';

  /** 消息Id */
  id = '';

  /** 是否已读，0是为读，1是已读 */
  isRead = undefined;

  /** 标题 */
  title = '';
}

class MessageReadDTO {
  /** 消息Id */
  id = undefined;
}

class OrderCallbackDTO {
  /** 订单号 */
  orderCode = '';

  /** 订单状态 */
  orderStatus = undefined;

  /** 交易号 */
  outTradeNo = '';

  /** 支付状态 */
  payStatus = undefined;
}

class PageRes {
  /** limit */
  limit = undefined;

  /** list */
  list = [];

  /** offset */
  offset = undefined;

  /** page */
  page = undefined;

  /** pageSize */
  pageSize = undefined;

  /** total */
  total = undefined;
}

class PredictionAddDTO {
  /** 预测基数 */
  baseNum = undefined;

  /** 人物形象名称 */
  imgUrl = '';

  /** 人物形象名称 */
  name = '';

  /** 预测年限 */
  years = undefined;
}

class PredictionDeleteDTO {
  /** 预测id */
  id = undefined;
}

class PredictionDetailDTO {
  /** 预测基数 */
  baseNum = undefined;

  /** 预测id */
  id = undefined;

  /** 人物形象名称 */
  imgUrl = '';

  /** 人物形象名称 */
  name = '';

  /** 预测年限 */
  years = undefined;
}

class PredictionUpdateDTO {
  /** 预测基数 */
  baseNum = undefined;

  /** 预测id */
  id = undefined;

  /** 人物形象名称 */
  imgUrl = '';

  /** 人物形象名称 */
  name = '';

  /** 预测年限 */
  years = undefined;
}

class RechargeAccountListDTO {
  /** 支付金额 */
  amount = undefined;

  /** 充值时间 */
  createdAt = '';

  /** 充值Id */
  id = undefined;

  /** 支付类型 */
  payType = undefined;
}

class RechargeOpListDTO {
  /** 广告主名称 */
  accountName = '';

  /** 支付金额 */
  amount = undefined;

  /** 充值时间 */
  createdAt = '';

  /** 充值Id */
  id = undefined;

  /** 支付类型 */
  payType = undefined;
}

class RechargePayDTO {
  /** 支付金额 */
  amount = undefined;

  /** 支付类型：1支付宝，2微信 */
  payType = undefined;
}

class SendSmsDTO {
  /** 手机号 */
  phone = '';

  /** 发送短信类型 */
  type = undefined;
}

class UserResetPassword {
  /** 验证码 */
  code = '';

  /** 新密码 */
  newPassword = '';

  /** 手机号 */
  phone = '';
}

export const mankeAd = {
  AccountAllNumDTO,
  AccountBalanceDTO,
  AccountBanTypeDTO,
  AccountCompanyAddDTO,
  AccountCompanyDetailDTO,
  AccountListDTO,
  AccountPersonAddDTO,
  AccountPersonDetailDTO,
  AdAllNumDTO,
  AdFreeAddDTO,
  AdFreeDeleteDTO,
  AdFreeDetailDTO,
  AdFreeOrderDetailDTO,
  AdFreePayDTO,
  AdFreeStatusDTO,
  AdFreeUpdateDTO,
  AdMemberInfoDTO,
  AdOpLogListDTO,
  AdOpStatisticsListDTO,
  AdOpStatisticsQueryDTO,
  AdPieStatisticsDTO,
  AdStatisticsDTO,
  AdTitleDTO,
  AdvertisingAddDTO,
  AdvertisingAppQueryDTO,
  AdvertisingDTO,
  AdvertisingOpDTO,
  AdvertisingShowDTO,
  AdvertisingUpdateDTO,
  ApplyCompanyAddDTO,
  ApplyCompanyDetailDTO,
  ApplyListDTO,
  ApplyPersonAddDTO,
  ApplyPersonDetailDTO,
  ApplyRemarkDTO,
  ApplyReturnDTO,
  ApplyStatusDTO,
  AreaAdListDTO,
  AreaAdNumDTO,
  AreaAdQueryDTO,
  CommonOrderPaymentInfo,
  DeductionListDTO,
  DisableEnable,
  LoginAccessToken,
  ManagerAddDTO,
  ManagerInfoDetailDTO,
  ManagerListDTO,
  ManagerLogDTO,
  ManagerLoginDTO,
  ManagerUpdateDTO,
  MessageListDTO,
  MessageReadDTO,
  OrderCallbackDTO,
  PageRes,
  PredictionAddDTO,
  PredictionDeleteDTO,
  PredictionDetailDTO,
  PredictionUpdateDTO,
  RechargeAccountListDTO,
  RechargeOpListDTO,
  RechargePayDTO,
  SendSmsDTO,
  UserResetPassword,
};
