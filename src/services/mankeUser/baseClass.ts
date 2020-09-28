class AddDTOToTheBlackList {
  /** codes */
  codes = [];

  /** filterType */
  filterType = undefined;
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

class AreaHotelListDTO {
  /** 详细地址 */
  address = '';

  /** 市 */
  city = '';

  /** 区 */
  district = '';

  /** 酒店名称 */
  hotelName = '';

  /** 酒店星级 */
  hotelStar = '';

  /** id */
  id = undefined;

  /** 省 */
  province = '';

  /** 联系人姓名 */
  submitterName = '';

  /** 联系人手机号 */
  submitterPhone = '';
}

class AreaMemberListDTO {
  /** 活跃状态，0非活跃，1活跃 */
  activeStatus = undefined;

  /** 天使vip等级：0不是天使，1是天使 */
  angelVip = undefined;

  /** 居住地：市 */
  city = '';

  /** 居住地：区 */
  district = '';

  /** 会员角色：0注册会员，1正式会员 */
  memberType = undefined;

  /** 会员昵称 */
  nickName = '';

  /** 会员手机号 */
  phone = '';

  /** 居住地：省 */
  province = '';

  /** 会员姓名 */
  realName = '';

  /** 算力 */
  totalHashRate = undefined;

  /** 漫克 */
  totalMaq = undefined;

  /** 会员id */
  userId = undefined;

  /** 会员等级 */
  userLevel = undefined;
}

class AreaMemberQueryDTO {
  /** 活跃状态，0非活跃，1活跃 */
  activeStatus = undefined;

  /** 天使vip等级：0不是天使，1是天使 */
  angelVip = undefined;

  /** 居住地：市 */
  city = '';

  /** 居住地：区 */
  district = '';

  /** limit */
  limit = undefined;

  /** 会员角色：0注册会员，1正式会员 */
  memberType = undefined;

  /** offset */
  offset = undefined;

  /** page */
  page = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 居住地：省 */
  province = '';

  /** 会员id */
  userId = undefined;

  /** 会员等级 */
  userLevel = undefined;
}

class AvatarNickUpdateDTO {
  /** 头像 */
  avatarUrl = '';

  /** 用户生日，yyyy-MM-dd */
  birthday = '';

  /** 性别：1男，2女 */
  sex = undefined;
}

class BlackListUpdateDTO {
  /** 拉黑/删除好友ID */
  friendUserId = undefined;

  /** 删除还是拉黑, 删除为1，拉黑为0 */
  type = undefined;
}

class CardCertificationDTO {
  /** 市 */
  city = '';

  /** 区 */
  district = '';

  /** 身份证号 */
  idCard = '';

  /** 省 */
  province = '';

  /** 真实姓名 */
  realName = '';

  /** 短信验证码code，三要素认证时不能为空 */
  verifyCode = '';
}

class CityPartnerAppStatusDTO {
  /** 合作城市 */
  joinCity = '';

  /** 合作区 */
  joinDistrict = '';

  /** 合同到期日期 */
  joinEndAt = '';

  /** 合作类型：0地级合伙人，1县级合伙人 */
  joinType = undefined;

  /** 驳回原因 */
  reason = '';

  /** null没有申请记录,0待审批、1已通过正常状态、2已驳回，3封停，4合作期限已到期 */
  status = undefined;
}

class CityPartnerApplyAddDTO {
  /** 地级合作城市 */
  joinCity = '';

  /** 县级合作城市 */
  joinDistrict = '';

  /** 合作类型：0地级合伙人，1县级合伙人 */
  joinType = undefined;

  /** 姓名 */
  name = '';

  /** 手机号 */
  phone = '';
}

class CityPartnerApplyListDTO {
  /** 申请合作城市 */
  address = '';

  /** 是否天使vip */
  angelVip = false;

  /** 审批时间 */
  approveAt = '';

  /** 审批管理员 */
  approveOpUserId = undefined;

  /** 0待审批、1已通过正常状态、2已驳回 */
  approveStatus = undefined;

  /** 申请时间 */
  createdAt = '';

  /** id */
  id = undefined;

  /** 申请合作城市 */
  joinCity = '';

  /** 申请合作区 */
  joinDistrict = '';

  /** 到期时间 */
  joinEndAt = '';

  /** 申请合作人姓名 */
  joinName = '';

  /** 申请合作手机号 */
  joinPhone = '';

  /** 申请合作类型 */
  joinType = undefined;

  /** 用户昵称 */
  nickName = '';

  /** 审批管理员昵称 */
  opNickName = '';

  /** 审批管理员用户名 */
  opUserName = '';

  /** 用户手机号 */
  phone = '';

  /** 用户姓名 */
  realName = '';

  /** 驳回原因 */
  reason = '';

  /** 备注 */
  remark = '';

  /** 算力 */
  totalHashRate = undefined;

  /** 漫克 */
  totalMaq = undefined;

  /** 用户id */
  userId = undefined;

  /** 用户等级 */
  userLevel = undefined;
}

class CityPartnerLevelAppListDTO {
  /** 申请合作城市地址 */
  address = '';

  /** 头像 */
  avatarUrl = '';

  /** id */
  id = undefined;

  /** 申请合作城市 */
  joinCity = '';

  /** 申请合作区 */
  joinDistrict = '';

  /** 申请合作人姓名 */
  joinName = '';

  /** 申请合作手机号 */
  joinPhone = '';

  /** 申请合作类型 */
  joinType = undefined;

  /** 用户昵称 */
  nickName = '';

  /** 用户id */
  userId = undefined;
}

class CityPartnerLevelListDTO {
  /** 申请合作城市地址 */
  address = '';

  /** 头像 */
  avatarUrl = '';

  /** id */
  id = undefined;

  /** 申请合作城市 */
  joinCity = '';

  /** 申请合作区 */
  joinDistrict = '';

  /** 申请合作结束时间 */
  joinEndAt = '';

  /** 申请合作人姓名 */
  joinName = '';

  /** 申请合作手机号 */
  joinPhone = '';

  /** 申请合作开始时间 */
  joinStartAt = '';

  /** 申请合作类型 */
  joinType = undefined;

  /** 用户昵称 */
  nickName = '';

  /** 用户手机号 */
  phone = '';

  /** 用户姓名 */
  realName = '';

  /** 封停原因 */
  reason = '';

  /** 备注 */
  remark = '';

  /** 0待审批、1已通过正常状态、2已驳回，3封停，4合作期限已到期 */
  status = undefined;

  /** 用户id */
  userId = undefined;
}

class CityPartnerListDTO {
  /** 广告数量 */
  adNum = undefined;

  /** 申请合作城市地址 */
  address = '';

  /** 头像 */
  avatarUrl = '';

  /** 下级数量 */
  downLevel = undefined;

  /** 酒店数量 */
  hotelNum = undefined;

  /** id */
  id = undefined;

  /** 申请合作城市 */
  joinCity = '';

  /** 申请合作区 */
  joinDistrict = '';

  /** 申请合作结束时间 */
  joinEndAt = '';

  /** 申请合作人姓名 */
  joinName = '';

  /** 申请合作手机号 */
  joinPhone = '';

  /** 申请合作开始时间 */
  joinStartAt = '';

  /** 申请合作类型 */
  joinType = undefined;

  /** 会员数量 */
  memberNum = undefined;

  /** 用户昵称 */
  nickName = '';

  /** 用户手机号 */
  phone = '';

  /** 用户姓名 */
  realName = '';

  /** 封停原因 */
  reason = '';

  /** 备注 */
  remark = '';

  /** 0待审批、1已通过正常状态、2已驳回，3封停，4合作期限已到期 */
  status = undefined;

  /** 上级数量 */
  upLevel = undefined;

  /** 用户id */
  userId = undefined;
}

class CityPartnerRemarkDTO {
  /** id */
  id = undefined;

  /** 备注 */
  remark = '';
}

class CityPartnerStatisticDTO {
  /** 申请总数 */
  applyNum = undefined;

  /** 正常合伙人总数 */
  cityPartnerNum = undefined;

  /** 今日申请 */
  todayApplyNum = undefined;

  /** 今日通过 */
  todayThroughNum = undefined;
}

class CityPartnerStatusApplyDTO {
  /** 申请状态 0待审批、1已通过正常状态、2已驳回 */
  approveStatus = undefined;

  /** id */
  id = undefined;

  /** 合同到期时间 */
  joinEndAt = '';

  /** 驳回原因 */
  reason = '';
}

class CityPartnerStatusDTO {
  /** id */
  id = undefined;

  /** 封停原因 */
  reason = '';

  /** 合伙人状态：0正常，1封停，2过期 */
  status = undefined;
}

class CityPartnerUpdateJoinCityDTO {
  /** id */
  id = undefined;

  /** 合作城市 */
  joinCity = '';

  /** 合作区 */
  joinDistrict = '';

  /** 合作到期时间 */
  joinEndAt = '';

  /** 合作类型 */
  joinType = undefined;

  /** userId */
  userId = undefined;
}

class CloseAccountDTO {
  /** 申请日期 */
  applyDate = '';

  /** id */
  id = undefined;

  /** 昵称 */
  nickName = '';

  /** 手机号 */
  phone = '';

  /** 备注 */
  remark = '';

  /** 状态 */
  status = undefined;

  /** 状态描述 */
  statusDesc = '';

  /** 用户Id */
  userId = undefined;
}

class CloseAccountEnumDTO {
  /** code */
  code = undefined;

  /** 内容 */
  value = '';
}

class CloseAccountRemarkDTO {
  /** id */
  id = undefined;

  /** 备注 */
  remark = '';
}

class CloseAccountStatusDTO {
  /** id */
  id = undefined;

  /** 状态 */
  status = undefined;
}

class DeptDTO {
  /** 子部门 */
  children = [];

  /** 部门名 */
  departmentName = '';

  /** 部门描述 */
  description = '';

  /** 部门id */
  id = undefined;

  /** 父部门code */
  parentId = undefined;
}

class DeptDeleteDTO {
  /** 部门名 */
  id = undefined;
}

class DisableEnable {
  /** 0正常，1禁用 */
  banType = undefined;

  /** 用户id */
  userId = undefined;
}

class FaceCertificationDTO {
  /** 市 */
  city = '';

  /** 手机认证失败返回的message信息 */
  code = '';

  /** 区 */
  district = '';

  /** 身份证号 */
  idCard = '';

  /** 省 */
  province = '';

  /** 真实姓名 */
  realName = '';

  /** SDK上传给业务服务端的token，唯一标记一次活体检测，人脸识别需要用到的 */
  token = '';

  /** 短信验证码code，三要素认证时不能为空 */
  verifyCode = '';
}

class FilterListDTO {
  /** 设备号或手机号 */
  code = '';

  /** id */
  id = undefined;

  /** 黑白名单类型，1:消费黑名单,2:IP黑名单,3:设备白名单,4:消费白名单 */
  type = undefined;
}

class FriendDetailDTO {
  /** 所有算力 */
  allHashrate = undefined;

  /** 天使vip等级 */
  angelLevel = undefined;

  /** avatarUrl */
  avatarUrl = '';

  /** 是否封禁 */
  banType = undefined;

  /** 认证时间 */
  certificationAt = '';

  /** 注册时间 */
  createdAt = '';

  /** 算力 */
  hashrate = undefined;

  /** 他的推荐人 */
  invitedUser = '';

  /** 是否认证 */
  isAuth = undefined;

  /** 是否推荐人 */
  isRefence = undefined;

  /** 最后登录时间 */
  loginAt = '';

  /** 会员ID */
  memberId = '';

  /** 会员类型 0注册会员，1正式会员 */
  memberType = undefined;

  /** nickName */
  nickName = '';

  /** phone */
  phone = '';

  /** 用户Id */
  userId = undefined;

  /** 荣誉等级 */
  userLevel = undefined;
}

class FriendListDTO {
  /** 活跃度：0非活跃会员，1活跃会员 */
  activeStatus = undefined;

  /** 是否天使vip */
  angelVip = false;

  /** 头像 */
  avatarUrl = '';

  /** 封禁类型，封禁类型，0解禁，1仅封禁漫克，2封禁登录和漫克 */
  banType = undefined;

  /** 成为好友时间 */
  createdAt = '';

  /** 好友角色：0注册会员，1正式会员 */
  memberType = undefined;

  /** 昵称 */
  nickName = '';

  /** 手机号 */
  phone = '';

  /** 真实姓名 */
  realName = '';

  /** 手机号 */
  userId = undefined;

  /** 荣誉等级 */
  userLevel = undefined;
}

class FriendQueryDTO {
  /** limit */
  limit = undefined;

  /** offset */
  offset = undefined;

  /** page */
  page = undefined;

  /** pageSize */
  pageSize = undefined;

  /** 0获取可抽捐好友 1好友列表 2获取黑名单 */
  type = undefined;
}

class InvitationBindingDTO {
  /** 邀请码 */
  invitedCode = '';

  /** 手机号 */
  phone = '';
}

class InviteResultDTO {
  /** 当前用户邀请码 */
  invitedCode = '';
}

class InvitedRelationDTO {
  /** 头像 */
  avatarUrl = '';

  /** 算力 */
  hashRate = undefined;

  /** 邀请用户Id */
  invitedUserId = undefined;

  /** 用户昵称 */
  nickName = '';

  /** 手机号 */
  phone = '';

  /** 用户真实名称 */
  realName = '';

  /** 总漫克 */
  totalMaq = undefined;

  /** 用户Id */
  userId = undefined;
}

class LevelUpDTO {
  /** 邀请好友的等级 */
  level = '';

  /** 下一等级 */
  nextLevel = '';

  /** 升级百分比 */
  percentage = undefined;

  /** 升级需要人数 */
  requiredNum = undefined;
}

class LogDTO {
  /** 业务模块 */
  businessModule = '';

  /** clientId */
  clientId = '';

  /** 操作时间 */
  createdAt = '';

  /** 设备号 */
  deviceNo = '';

  /** 设备系统 */
  deviceSystem = '';

  /** groupId */
  groupId = '';

  /** 日志id */
  id = undefined;

  /** 操作地点 */
  loginCity = '';

  /** 操作ip */
  loginIp = '';

  /** 操作人昵称 */
  nickName = '';

  /** 部门id */
  opDepartmentId = undefined;

  /** 部门名 */
  opDepartmentName = '';

  /** 操作资源 */
  opResources = '';

  /** 操作类型 */
  opType = '';

  /** 角色id */
  roleId = undefined;

  /** 角色名 */
  roleName = '';

  /** 操作人id */
  userId = undefined;

  /** 操作人username */
  userName = '';
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

class LoginDTO {
  /** 验证码 */
  code = '';

  /** 密码 */
  password = '';

  /** 手机号 */
  phone = '';

  /** 用户名 */
  username = '';
}

class LoginLogDTO {
  /** 设备号 */
  deviceNo = '';

  /** 设备操作系统 */
  deviceSystem = '';

  /** id */
  id = undefined;

  /** 登录时间 */
  loginAt = '';

  /** 登录城市 */
  loginCity = '';

  /** 登录ip */
  loginIp = '';

  /** 登录方式，1密码登录，2手机登录，3微信登录 */
  loginType = '';

  /** 会员账号 */
  memberId = '';

  /** 昵称 */
  nickName = '';

  /** 手机号 */
  phone = '';

  /** userId */
  userId = undefined;

  /** 用户名 */
  userName = '';

  /** 微信号 */
  wechatId = '';
}

class ManualAuthDetailResultDTO {
  /** 认证时间 */
  authAt = '';

  /** 认证管理员 */
  authBy = '';

  /** 提交时间 */
  createdAt = '';

  /** 身份证 */
  idCard = '';

  /** 身份证反面 */
  idPicBack = '';

  /** 身份证正面 */
  idPicFront = '';

  /** 会员姓名 */
  memberName = '';

  /** 会员昵称 */
  nickName = '';

  /** 手机 */
  phone = '';

  /** 认证状态 1待认证，2已认证，3已驳回 */
  state = undefined;
}

class ManualAuthPageDTO {
  /** 提交时间 */
  createdAt = '';

  /** 人工审核id */
  id = undefined;

  /** 身份证 */
  idCard = '';

  /** 身份证反面 */
  idPicBack = '';

  /** 身份证正面 */
  idPicFront = '';

  /** 提交姓名 */
  name = '';

  /** 会员昵称 */
  nickName = '';

  /** 手机 */
  phone = '';

  /** 驳回原因 */
  rejectReason = '';

  /** 认证状态 1待认证，2已认证，3已驳回 */
  state = undefined;

  /** 会员id */
  userId = undefined;
}

class ManualCertificationDTO {
  /** 市 */
  city = '';

  /** 区 */
  district = '';

  /** 身份证号 */
  idCard = '';

  /** 身份证反面 */
  idPicBack = '';

  /** 身份证正面 */
  idPicFront = '';

  /** 省 */
  province = '';

  /** 真实姓名 */
  realName = '';

  /** 短信验证码code，三要素认证时不能为空 */
  verifyCode = '';
}

class ManualResultAppDTO {
  /** 驳回原因 */
  rejectReason = '';

  /** 认证状态，1待认证，2已认证，3已驳回，为null尚未认证 */
  state = undefined;
}

class MemberBanDTO {
  /** 封禁原因 */
  banReason = '';

  /** 封禁类型，0未封禁会员，1漫克封禁会员，2账号封禁会员 */
  banType = undefined;

  /** 用户Id */
  userId = undefined;
}

class MemberByNickNameDTO {
  /** 用户昵称 */
  nickName = '';

  /** 用户手机号 */
  phone = '';

  /** 用户id */
  userId = undefined;
}

class MemberDTO {
  /** 活跃度 */
  activeStatus = undefined;

  /** 是否天使vip */
  angelVip = false;

  /** 头像 */
  avatarUrl = '';

  /** 封禁原因 */
  banReason = '';

  /** 封禁类型，封禁类型，0解禁，1仅封禁漫克，2封禁登录和漫克 */
  banType = undefined;

  /** 是否绑定微信，0未绑定，1绑定 */
  bindWechat = undefined;

  /** 三要素是否认证，0未认证，1已认证 */
  cardCertification = undefined;

  /** 零钱包漫克 */
  coinMaq = undefined;

  /** 注册时间 */
  createdAt = '';

  /** 设备号 */
  deviceNo = '';

  /** 设备操作系统 */
  deviceSystem = '';

  /** 人脸是否认证，0未认证，1已认证 */
  faceCertification = undefined;

  /** 长久算力 */
  hashrateLongTerm = undefined;

  /** 临时算力 */
  hashrateTemp = undefined;

  /** id */
  id = undefined;

  /** 最后登录时间 */
  lastLoginAt = '';

  /** 最后访问时间 */
  lastViewAt = '';

  /** 链上漫克 */
  lineMaq = undefined;

  /** 登录城市 */
  loginCity = '';

  /** 登录ip */
  loginIp = '';

  /** 人工是否认证，0未认证，1已认证 */
  manualCertification = undefined;

  /** 会员ID */
  memberId = '';

  /** 会员类型 */
  memberType = undefined;

  /** 用户昵称 */
  nickName = '';

  /** 手机号 */
  phone = '';

  /** 是否代理 */
  proxyUser = false;

  /** 用户真实名称 */
  realName = '';

  /** 用户最近收租时间 */
  recentlyRentAt = '';

  /** 注册时间 */
  registerAt = '';

  /** 备注 */
  remark = '';

  /** 商城漫克 */
  shoppingMaq = undefined;

  /** 总漫克 */
  totalMaq = undefined;

  /** 是否允许添加自己为好友 */
  unallowedState = undefined;

  /** 用户Id */
  userId = undefined;

  /** 荣誉等级 */
  userLevel = undefined;

  /** 微信号 */
  wechatId = '';
}

class MemberDetailDTO {
  /** 活跃状态，0不活跃，1活跃 */
  activeStatus = undefined;

  /** 头像 */
  avatarUrl = '';

  /** 封禁类型 */
  banType = undefined;

  /** 是否绑定微信，0未绑定，1绑定 */
  bindWechat = undefined;

  /** 三要素是否认证，0未认证，1已认证 */
  cardCertification = undefined;

  /** 市 */
  city = '';

  /** 注册时间 */
  createdAt = '';

  /** 区 */
  district = '';

  /** 人脸是否认证，0未认证，1已认证 */
  faceCertification = undefined;

  /** 邀请用户id */
  invitedUserId = undefined;

  /** 最后登录时间 */
  lastLoginAt = '';

  /** 人工是否认证，0未认证，1已认证 */
  manualCertification = undefined;

  /** 会员ID */
  memberId = '';

  /** 会员类型，注册会员 = 1,正式会员 = 2, */
  memberType = undefined;

  /** 用户昵称 */
  nickName = '';

  /** 手机号 */
  phone = '';

  /** 省 */
  province = '';

  /** 用户真实名称 */
  realName = '';

  /** 注册方式，1手机，2微信 */
  registerBy = undefined;

  /** 注册城市 */
  registerCity = '';

  /** 注册设备号 */
  registerDeviceCode = '';

  /** 注册ip */
  registerIp = '';

  /** 注册手机号 */
  registerPhone = '';

  /** 注册微信号 */
  registerWechatId = '';

  /** 备注 */
  remark = '';

  /** 是否允许添加自己为好友 */
  unallowedState = undefined;

  /** 用户Id */
  userId = undefined;

  /** 荣誉等级 */
  userLevel = undefined;

  /** 微信号 */
  wechatId = '';
}

class MemberGrowthTrendDTO {
  /** 当前会员总数 */
  day = '';

  /** 会员总数 */
  num = undefined;
}

class MemberRemarkDTO {
  /** 备注 */
  remark = '';

  /** userId */
  userId = undefined;
}

class MemberStatisticDTO {
  /** 当前活跃会员数 */
  currentActiveNum = undefined;

  /** 当前VIP天使会员数 */
  currentAngleVipNum = undefined;

  /** 当前正式会员数 */
  currentFormalNum = undefined;

  /** 当前会员总数 */
  currentNum = undefined;

  /** 当前在线会员数 */
  onLineNum = undefined;

  /** 今日新增会员 */
  todayAddNum = undefined;
}

class MyFriendDTO {
  /** avatarUrl */
  avatarUrl = '';

  /** 是否封禁 */
  banType = undefined;

  /** 好友数量 */
  friendsNum = undefined;

  /** 算力 */
  hashrate = undefined;

  /** 是否认证 */
  isAuth = undefined;

  /** 是否是推荐人 */
  isReference = undefined;

  /** 会员编号 */
  memberId = '';

  /** 昵称 */
  nickName = '';

  /** 用户Id */
  userId = undefined;

  /** 荣誉等级 */
  userLevel = undefined;
}

class NickNameUpdateDTO {
  /** 用户昵称 */
  nickName = '';
}

class OpUserDTO {
  /** 账号类型，0普通账号，1领导账号 */
  accountType = undefined;

  /** 封禁类型，0正常，1禁用 */
  banType = undefined;

  /** 创建时间 */
  createdAt = '';

  /** 创建人id */
  createdUserId = undefined;

  /** 创建人姓名 */
  createdUserName = '';

  /** id */
  id = undefined;

  /** 最近登录时间 */
  lastLoginAt = '';

  /** 昵称 */
  nickName = '';

  /** 部门id */
  opDepartmentId = undefined;

  /** 部门名称 */
  opDepartmentName = '';

  /** 初始密码 */
  password = '';

  /** 手机号 */
  phone = '';

  /** 重复密码 */
  rePassword = '';

  /** 角色id */
  roleId = undefined;

  /** 角色名称 */
  roleName = '';

  /** 性别，1男，2女 */
  sex = undefined;

  /** 更新人id */
  updatedUserId = undefined;

  /** 更新人姓名 */
  updatedUserName = '';

  /** 认证中心用户id */
  userId = undefined;

  /** 用户名 */
  userName = '';
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

class ProxyApplyAppStatusDTO {
  /** 开通等级 */
  openLevel = undefined;

  /** 原因 */
  reason = '';

  /** 状态：0申请中，1通过，正常状态，2被驳回，3封停，4当前等级低于代理等级 */
  status = undefined;
}

class ProxyApplyListDTO {
  /** 是否天使vip */
  angelVip = false;

  /** 审批时间 */
  approveAt = '';

  /** 审批管理员 */
  approveOpUserId = undefined;

  /** 0待审批、1已通过正常状态、2已驳回 */
  approveStatus = undefined;

  /** 申请时间 */
  createdAt = '';

  /** id */
  id = undefined;

  /** 用户昵称 */
  nickName = '';

  /** 审批管理员昵称 */
  opNickName = '';

  /** 审批管理员用户名 */
  opUserName = '';

  /** 用户手机号 */
  phone = '';

  /** 用户姓名 */
  realName = '';

  /** 驳回原因 */
  reason = '';

  /** 算力 */
  totalHashRate = undefined;

  /** 漫克 */
  totalMaq = undefined;

  /** 用户id */
  userId = undefined;

  /** 用户等级 */
  userLevel = undefined;
}

class ProxyApplyStatusListDTO {
  /** 状态 */
  approveStatus = undefined;

  /** id */
  idList = [];

  /** 驳回原因 */
  reason = '';
}

class ProxyChildrenAppDTO {
  /** 用户头像 */
  avatarUrl = '';

  /** 用户昵称 */
  nickName = '';

  /** 用户id */
  userId = undefined;

  /** 用户等级 */
  userLevel = undefined;
}

class ProxyParentAppDTO {
  /** 用户头像 */
  avatarUrl = '';

  /** 用户昵称 */
  nickName = '';

  /** 代理类别：0代理，1谢师 */
  proxyUserType = undefined;

  /** 用户id */
  userId = undefined;

  /** 用户等级 */
  userLevel = undefined;
}

class ProxyParentDTO {
  /** 用户头像 */
  avatarUrl = '';

  /** 用户邀请id */
  invitedUserId = undefined;

  /** 用户昵称 */
  nickName = '';

  /** 用户手机号 */
  phone = '';

  /** 代理类别：0代理，1谢师 */
  proxyUserType = undefined;

  /** 用户姓名 */
  realName = '';

  /** 用户id */
  userId = undefined;

  /** 用户等级 */
  userLevel = undefined;
}

class ProxyTeamDTO {
  /** 用户头像 */
  avatarUrl = '';

  /** 用户邀请id */
  invitedUserId = undefined;

  /** 用户昵称 */
  nickName = '';

  /** 用户手机号 */
  phone = '';

  /** 是否是代理 */
  proxyUser = false;

  /** 代理费用：0代理，1谢师 */
  proxyUserType = undefined;

  /** 用户姓名 */
  realName = '';

  /** 用户id */
  userId = undefined;

  /** 用户等级 */
  userLevel = undefined;
}

class ProxyUserListDTO {
  /** 是否天使vip */
  angelVip = false;

  /** id */
  id = undefined;

  /** 用户昵称 */
  nickName = '';

  /** 用户手机号 */
  phone = '';

  /** 用户姓名 */
  realName = '';

  /** 封停原因 */
  reason = '';

  /** 备注 */
  remark = '';

  /** 0正常、1已封停、2降级 */
  status = undefined;

  /** 算力 */
  totalHashRate = undefined;

  /** 漫克 */
  totalMaq = undefined;

  /** 用户id */
  userId = undefined;

  /** 用户等级 */
  userLevel = undefined;
}

class ProxyUserRemarkDTO {
  /** ID */
  id = undefined;

  /** 备注 */
  remark = '';
}

class ProxyUserStatusDTO {
  /** 封停原因 */
  reason = '';

  /** 0正常、1已封停、2降级 */
  status = undefined;

  /** 用户ID */
  userId = undefined;
}

class ReceiverAddDTO {
  /** 详细地址 */
  address = '';

  /** 市 */
  city = '';

  /** 区 */
  district = '';

  /** 是否默认收获地址,1:是默认收货地址，0不是 */
  isDefault = undefined;

  /** 省 */
  province = '';

  /** 收货人名称 */
  receiverName = '';

  /** 收货人手机号 */
  receiverPhone = '';
}

class ReceiverDTO {
  /** 详细地址 */
  address = '';

  /** 市 */
  city = '';

  /** 市名称 */
  cityName = '';

  /** 区 */
  district = '';

  /** 区名称 */
  districtName = '';

  /** 收货地址Id */
  id = undefined;

  /** 是否默认收获地址,1:是默认收货地址，0不是 */
  isDefault = undefined;

  /** 省 */
  province = '';

  /** 省名称 */
  provinceName = '';

  /** 收货人名称 */
  receiverName = '';

  /** 收货人手机号 */
  receiverPhone = '';
}

class ReceiverDeleteDTO {
  /** 收货地址Id */
  idList = [];
}

class ReceiverUpdateDTO {
  /** 详细地址 */
  address = '';

  /** 市 */
  city = '';

  /** 区 */
  district = '';

  /** 收货地址Id */
  id = undefined;

  /** 是否默认收获地址,1:是默认收货地址，0不是 */
  isDefault = undefined;

  /** 省 */
  province = '';

  /** 收货人名称 */
  receiverName = '';

  /** 收货人手机号 */
  receiverPhone = '';
}

class RegisterPhoneDTO {
  /** 手机号 */
  phone = '';
}

class RegisterTokenInfo {
  /** accessToken */
  accessToken = '';

  /** cellPhone */
  cellPhone = '';

  /** expiresIn */
  expiresIn = undefined;

  /** id */
  id = undefined;

  /** refreshToken */
  refreshToken = '';

  /** tokenType */
  tokenType = '';

  /** userId */
  userId = undefined;

  /** username */
  username = '';
}

class RegisterUserDTO {
  /** 邀请码 */
  invitedCode = '';

  /** 密码 */
  password = '';

  /** 手机号 */
  phone = '';

  /** 验证码 */
  verificationCode = '';
}

class RentSoundDTO {
  /** 收租音效，0关闭，1开启 */
  rentSound = undefined;
}

class SendSmsDTO {
  /** 手机号 */
  phone = '';

  /** 发送短信类型 */
  type = undefined;
}

class StateDTO {
  /** 状态，0：可以搜索到自己，1：不能搜索到自己 */
  state = undefined;
}

class UpdatePasswordByPhoneDTO {
  /** 新密码 */
  newPassword = '';

  /** 手机号 */
  phone = '';

  /** 验证码 */
  verificationCode = '';
}

class UpdatePhoneDTO {
  /** 新手机号 */
  newPhone = '';

  /** 新验证码 */
  newVerificationCode = '';

  /** 旧手机号 */
  oldPhone = '';

  /** 旧验证码 */
  oldVerificationCode = '';
}

class UserDTO {
  /** 天使等级 */
  angelLevel = undefined;

  /** 头像 */
  avatarUrl = '';

  /** 是否绑定微信，0未绑定，1绑定 */
  bindWechat = undefined;

  /** 年龄 */
  birthday = '';

  /** 身份证号是否已经实名认证，1是已经实名认证 */
  cardCertification = undefined;

  /** 市 */
  city = '';

  /** 区 */
  district = '';

  /** 人脸是否已经实名认证，1是已经实名认证 */
  faceCertification = undefined;

  /** 邀请码 */
  invitedCode = undefined;

  /** 人工是否已经实名认证，1是已经实名认证 */
  manualCertification = undefined;

  /** 认证状态，1待认证，2已认证，3已驳回，为null尚未认证 */
  manualState = undefined;

  /** 会员ID */
  memberId = '';

  /** 用户昵称 */
  nickName = '';

  /** 手机号 */
  phone = '';

  /** 省 */
  province = '';

  /** 用户真实名称 */
  realName = '';

  /** 是否添加收货地址，true已经添加 */
  receiver = false;

  /** 驳回原因 */
  rejectReason = '';

  /** 收租音效，0关闭，1开启，默认0 */
  rentSound = undefined;

  /** 性别:1为男，2为女 */
  sex = undefined;

  /** 是否允许添加自己为好友 */
  unallowedState = undefined;

  /** 用户Id */
  userId = undefined;

  /** 荣誉等级 */
  userLevel = undefined;

  /** 荣誉等级 */
  userLevelDesc = '';
}

class UserLivingDTO {
  /** 市 */
  city = '';

  /** 区 */
  district = '';

  /** 省 */
  province = '';
}

class UserResetPassword {
  /** 验证码 */
  code = '';

  /** 新密码 */
  newPassword = '';

  /** 手机号 */
  phone = '';

  /** 确认密码 */
  reNewPassword = '';

  /** 用户id */
  userId = undefined;
}

class ValidFriendDTO {
  /** 好友id */
  friendUserId = undefined;
}

class WeChatBindDTO {
  /** 微信code */
  weChatCode = '';
}

class WeChatLoginAccessTokenDTO {
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

class WeChatLoginDTO {
  /** 微信code */
  weChatCode = '';
}

class WeChatRegisterDTO {
  /** 手机号 */
  phone = '';

  /** 验证码 */
  verificationCode = '';

  /** 微信code */
  weChatCode = '';
}

export const mankeUser = {
  AddDTOToTheBlackList,
  AreaAdListDTO,
  AreaHotelListDTO,
  AreaMemberListDTO,
  AreaMemberQueryDTO,
  AvatarNickUpdateDTO,
  BlackListUpdateDTO,
  CardCertificationDTO,
  CityPartnerAppStatusDTO,
  CityPartnerApplyAddDTO,
  CityPartnerApplyListDTO,
  CityPartnerLevelAppListDTO,
  CityPartnerLevelListDTO,
  CityPartnerListDTO,
  CityPartnerRemarkDTO,
  CityPartnerStatisticDTO,
  CityPartnerStatusApplyDTO,
  CityPartnerStatusDTO,
  CityPartnerUpdateJoinCityDTO,
  CloseAccountDTO,
  CloseAccountEnumDTO,
  CloseAccountRemarkDTO,
  CloseAccountStatusDTO,
  DeptDTO,
  DeptDeleteDTO,
  DisableEnable,
  FaceCertificationDTO,
  FilterListDTO,
  FriendDetailDTO,
  FriendListDTO,
  FriendQueryDTO,
  InvitationBindingDTO,
  InviteResultDTO,
  InvitedRelationDTO,
  LevelUpDTO,
  LogDTO,
  LoginAccessToken,
  LoginDTO,
  LoginLogDTO,
  ManualAuthDetailResultDTO,
  ManualAuthPageDTO,
  ManualCertificationDTO,
  ManualResultAppDTO,
  MemberBanDTO,
  MemberByNickNameDTO,
  MemberDTO,
  MemberDetailDTO,
  MemberGrowthTrendDTO,
  MemberRemarkDTO,
  MemberStatisticDTO,
  MyFriendDTO,
  NickNameUpdateDTO,
  OpUserDTO,
  PageRes,
  ProxyApplyAppStatusDTO,
  ProxyApplyListDTO,
  ProxyApplyStatusListDTO,
  ProxyChildrenAppDTO,
  ProxyParentAppDTO,
  ProxyParentDTO,
  ProxyTeamDTO,
  ProxyUserListDTO,
  ProxyUserRemarkDTO,
  ProxyUserStatusDTO,
  ReceiverAddDTO,
  ReceiverDTO,
  ReceiverDeleteDTO,
  ReceiverUpdateDTO,
  RegisterPhoneDTO,
  RegisterTokenInfo,
  RegisterUserDTO,
  RentSoundDTO,
  SendSmsDTO,
  StateDTO,
  UpdatePasswordByPhoneDTO,
  UpdatePhoneDTO,
  UserDTO,
  UserLivingDTO,
  UserResetPassword,
  ValidFriendDTO,
  WeChatBindDTO,
  WeChatLoginAccessTokenDTO,
  WeChatLoginDTO,
  WeChatRegisterDTO,
};
