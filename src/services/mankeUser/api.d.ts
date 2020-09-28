type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

interface AjaxResponse<T> {
  code: number;
  data: T;
  message: string;
  success: boolean;
}

declare namespace defs {
  export namespace mankeUser {
    export class AddDTOToTheBlackList {
      /** codes */
      codes?: Array<string>;

      /** filterType */
      filterType?: number;
    }

    export class AreaAdListDTO {
      /** 广告主名称 */
      accountName?: string;

      /** 广告主类别 */
      adType?: number;

      /** 详细地址 */
      address?: string;

      /** 市 */
      city?: string;

      /** 区 */
      district?: string;

      /** id */
      id?: number;

      /** 省 */
      province?: string;

      /** 联系人姓名 */
      submitName?: string;

      /** 联系人手机号 */
      submitPhone?: string;

      /** 联系人职务 */
      submitPosition?: string;
    }

    export class AreaHotelListDTO {
      /** 详细地址 */
      address?: string;

      /** 市 */
      city?: string;

      /** 区 */
      district?: string;

      /** 酒店名称 */
      hotelName?: string;

      /** 酒店星级 */
      hotelStar?: string;

      /** id */
      id?: number;

      /** 省 */
      province?: string;

      /** 联系人姓名 */
      submitterName?: string;

      /** 联系人手机号 */
      submitterPhone?: string;
    }

    export class AreaMemberListDTO {
      /** 活跃状态，0非活跃，1活跃 */
      activeStatus?: number;

      /** 天使vip等级：0不是天使，1是天使 */
      angelVip?: number;

      /** 居住地：市 */
      city?: string;

      /** 居住地：区 */
      district?: string;

      /** 会员角色：0注册会员，1正式会员 */
      memberType?: number;

      /** 会员昵称 */
      nickName?: string;

      /** 会员手机号 */
      phone?: string;

      /** 居住地：省 */
      province?: string;

      /** 会员姓名 */
      realName?: string;

      /** 算力 */
      totalHashRate?: number;

      /** 漫克 */
      totalMaq?: number;

      /** 会员id */
      userId?: number;

      /** 会员等级 */
      userLevel?: number;
    }

    export class AreaMemberQueryDTO {
      /** 活跃状态，0非活跃，1活跃 */
      activeStatus?: number;

      /** 天使vip等级：0不是天使，1是天使 */
      angelVip?: number;

      /** 居住地：市 */
      city?: string;

      /** 居住地：区 */
      district?: string;

      /** limit */
      limit?: number;

      /** 会员角色：0注册会员，1正式会员 */
      memberType?: number;

      /** offset */
      offset?: number;

      /** page */
      page?: number;

      /** pageSize */
      pageSize?: number;

      /** 居住地：省 */
      province?: string;

      /** 会员id */
      userId?: number;

      /** 会员等级 */
      userLevel?: number;
    }

    export class AvatarNickUpdateDTO {
      /** 头像 */
      avatarUrl?: string;

      /** 用户生日，yyyy-MM-dd */
      birthday?: string;

      /** 性别：1男，2女 */
      sex?: number;
    }

    export class BlackListUpdateDTO {
      /** 拉黑/删除好友ID */
      friendUserId?: number;

      /** 删除还是拉黑, 删除为1，拉黑为0 */
      type?: number;
    }

    export class CardCertificationDTO {
      /** 市 */
      city?: string;

      /** 区 */
      district?: string;

      /** 身份证号 */
      idCard: string;

      /** 省 */
      province?: string;

      /** 真实姓名 */
      realName: string;

      /** 短信验证码code，三要素认证时不能为空 */
      verifyCode?: string;
    }

    export class CityPartnerAppStatusDTO {
      /** 合作城市 */
      joinCity?: string;

      /** 合作区 */
      joinDistrict?: string;

      /** 合同到期日期 */
      joinEndAt?: string;

      /** 合作类型：0地级合伙人，1县级合伙人 */
      joinType?: number;

      /** 驳回原因 */
      reason?: string;

      /** null没有申请记录,0待审批、1已通过正常状态、2已驳回，3封停，4合作期限已到期 */
      status?: number;
    }

    export class CityPartnerApplyAddDTO {
      /** 地级合作城市 */
      joinCity: string;

      /** 县级合作城市 */
      joinDistrict?: string;

      /** 合作类型：0地级合伙人，1县级合伙人 */
      joinType: number;

      /** 姓名 */
      name: string;

      /** 手机号 */
      phone: string;
    }

    export class CityPartnerApplyListDTO {
      /** 申请合作城市 */
      address?: string;

      /** 是否天使vip */
      angelVip?: boolean;

      /** 审批时间 */
      approveAt?: string;

      /** 审批管理员 */
      approveOpUserId?: number;

      /** 0待审批、1已通过正常状态、2已驳回 */
      approveStatus?: number;

      /** 申请时间 */
      createdAt?: string;

      /** id */
      id?: number;

      /** 申请合作城市 */
      joinCity?: string;

      /** 申请合作区 */
      joinDistrict?: string;

      /** 到期时间 */
      joinEndAt?: string;

      /** 申请合作人姓名 */
      joinName?: string;

      /** 申请合作手机号 */
      joinPhone?: string;

      /** 申请合作类型 */
      joinType?: number;

      /** 用户昵称 */
      nickName?: string;

      /** 审批管理员昵称 */
      opNickName?: string;

      /** 审批管理员用户名 */
      opUserName?: string;

      /** 用户手机号 */
      phone?: string;

      /** 用户姓名 */
      realName?: string;

      /** 驳回原因 */
      reason?: string;

      /** 备注 */
      remark?: string;

      /** 算力 */
      totalHashRate?: number;

      /** 漫克 */
      totalMaq?: number;

      /** 用户id */
      userId?: number;

      /** 用户等级 */
      userLevel?: number;
    }

    export class CityPartnerLevelAppListDTO {
      /** 申请合作城市地址 */
      address?: string;

      /** 头像 */
      avatarUrl?: string;

      /** id */
      id?: number;

      /** 申请合作城市 */
      joinCity?: string;

      /** 申请合作区 */
      joinDistrict?: string;

      /** 申请合作人姓名 */
      joinName?: string;

      /** 申请合作手机号 */
      joinPhone?: string;

      /** 申请合作类型 */
      joinType?: number;

      /** 用户昵称 */
      nickName?: string;

      /** 用户id */
      userId?: number;
    }

    export class CityPartnerLevelListDTO {
      /** 申请合作城市地址 */
      address?: string;

      /** 头像 */
      avatarUrl?: string;

      /** id */
      id?: number;

      /** 申请合作城市 */
      joinCity?: string;

      /** 申请合作区 */
      joinDistrict?: string;

      /** 申请合作结束时间 */
      joinEndAt?: string;

      /** 申请合作人姓名 */
      joinName?: string;

      /** 申请合作手机号 */
      joinPhone?: string;

      /** 申请合作开始时间 */
      joinStartAt?: string;

      /** 申请合作类型 */
      joinType?: number;

      /** 用户昵称 */
      nickName?: string;

      /** 用户手机号 */
      phone?: string;

      /** 用户姓名 */
      realName?: string;

      /** 封停原因 */
      reason?: string;

      /** 备注 */
      remark?: string;

      /** 0待审批、1已通过正常状态、2已驳回，3封停，4合作期限已到期 */
      status?: number;

      /** 用户id */
      userId?: number;
    }

    export class CityPartnerListDTO {
      /** 广告数量 */
      adNum?: number;

      /** 申请合作城市地址 */
      address?: string;

      /** 头像 */
      avatarUrl?: string;

      /** 下级数量 */
      downLevel?: number;

      /** 酒店数量 */
      hotelNum?: number;

      /** id */
      id?: number;

      /** 申请合作城市 */
      joinCity?: string;

      /** 申请合作区 */
      joinDistrict?: string;

      /** 申请合作结束时间 */
      joinEndAt?: string;

      /** 申请合作人姓名 */
      joinName?: string;

      /** 申请合作手机号 */
      joinPhone?: string;

      /** 申请合作开始时间 */
      joinStartAt?: string;

      /** 申请合作类型 */
      joinType?: number;

      /** 会员数量 */
      memberNum?: number;

      /** 用户昵称 */
      nickName?: string;

      /** 用户手机号 */
      phone?: string;

      /** 用户姓名 */
      realName?: string;

      /** 封停原因 */
      reason?: string;

      /** 备注 */
      remark?: string;

      /** 0待审批、1已通过正常状态、2已驳回，3封停，4合作期限已到期 */
      status?: number;

      /** 上级数量 */
      upLevel?: number;

      /** 用户id */
      userId?: number;
    }

    export class CityPartnerRemarkDTO {
      /** id */
      id?: number;

      /** 备注 */
      remark?: string;
    }

    export class CityPartnerStatisticDTO {
      /** 申请总数 */
      applyNum?: number;

      /** 正常合伙人总数 */
      cityPartnerNum?: number;

      /** 今日申请 */
      todayApplyNum?: number;

      /** 今日通过 */
      todayThroughNum?: number;
    }

    export class CityPartnerStatusApplyDTO {
      /** 申请状态 0待审批、1已通过正常状态、2已驳回 */
      approveStatus?: number;

      /** id */
      id?: number;

      /** 合同到期时间 */
      joinEndAt?: string;

      /** 驳回原因 */
      reason?: string;
    }

    export class CityPartnerStatusDTO {
      /** id */
      id?: number;

      /** 封停原因 */
      reason?: string;

      /** 合伙人状态：0正常，1封停，2过期 */
      status?: number;
    }

    export class CityPartnerUpdateJoinCityDTO {
      /** id */
      id?: number;

      /** 合作城市 */
      joinCity?: string;

      /** 合作区 */
      joinDistrict?: string;

      /** 合作到期时间 */
      joinEndAt?: string;

      /** 合作类型 */
      joinType?: number;

      /** userId */
      userId?: number;
    }

    export class CloseAccountDTO {
      /** 申请日期 */
      applyDate?: string;

      /** id */
      id?: number;

      /** 昵称 */
      nickName?: string;

      /** 手机号 */
      phone?: string;

      /** 备注 */
      remark?: string;

      /** 状态 */
      status?: number;

      /** 状态描述 */
      statusDesc?: string;

      /** 用户Id */
      userId?: number;
    }

    export class CloseAccountEnumDTO {
      /** code */
      code?: number;

      /** 内容 */
      value?: string;
    }

    export class CloseAccountRemarkDTO {
      /** id */
      id?: number;

      /** 备注 */
      remark?: string;
    }

    export class CloseAccountStatusDTO {
      /** id */
      id?: number;

      /** 状态 */
      status?: number;
    }

    export class DeptDTO {
      /** 子部门 */
      children?: Array<defs.mankeUser.DeptDTO>;

      /** 部门名 */
      departmentName?: string;

      /** 部门描述 */
      description?: string;

      /** 部门id */
      id?: number;

      /** 父部门code */
      parentId?: number;
    }

    export class DeptDeleteDTO {
      /** 部门名 */
      id?: number;
    }

    export class DisableEnable {
      /** 0正常，1禁用 */
      banType?: number;

      /** 用户id */
      userId?: number;
    }

    export class FaceCertificationDTO {
      /** 市 */
      city?: string;

      /** 手机认证失败返回的message信息 */
      code?: string;

      /** 区 */
      district?: string;

      /** 身份证号 */
      idCard: string;

      /** 省 */
      province?: string;

      /** 真实姓名 */
      realName: string;

      /** SDK上传给业务服务端的token，唯一标记一次活体检测，人脸识别需要用到的 */
      token?: string;

      /** 短信验证码code，三要素认证时不能为空 */
      verifyCode?: string;
    }

    export class FilterListDTO {
      /** 设备号或手机号 */
      code?: string;

      /** id */
      id?: number;

      /** 黑白名单类型，1:消费黑名单,2:IP黑名单,3:设备白名单,4:消费白名单 */
      type?: number;
    }

    export class FriendDetailDTO {
      /** 所有算力 */
      allHashrate?: number;

      /** 天使vip等级 */
      angelLevel?: number;

      /** avatarUrl */
      avatarUrl?: string;

      /** 是否封禁 */
      banType?: number;

      /** 认证时间 */
      certificationAt?: string;

      /** 注册时间 */
      createdAt?: string;

      /** 算力 */
      hashrate?: number;

      /** 他的推荐人 */
      invitedUser?: string;

      /** 是否认证 */
      isAuth?: number;

      /** 是否推荐人 */
      isRefence?: number;

      /** 最后登录时间 */
      loginAt?: string;

      /** 会员ID */
      memberId?: string;

      /** 会员类型 0注册会员，1正式会员 */
      memberType?: number;

      /** nickName */
      nickName?: string;

      /** phone */
      phone?: string;

      /** 用户Id */
      userId?: number;

      /** 荣誉等级 */
      userLevel?: number;
    }

    export class FriendListDTO {
      /** 活跃度：0非活跃会员，1活跃会员 */
      activeStatus?: number;

      /** 是否天使vip */
      angelVip?: boolean;

      /** 头像 */
      avatarUrl?: string;

      /** 封禁类型，封禁类型，0解禁，1仅封禁漫克，2封禁登录和漫克 */
      banType?: number;

      /** 成为好友时间 */
      createdAt?: string;

      /** 好友角色：0注册会员，1正式会员 */
      memberType?: number;

      /** 昵称 */
      nickName?: string;

      /** 手机号 */
      phone?: string;

      /** 真实姓名 */
      realName?: string;

      /** 手机号 */
      userId?: number;

      /** 荣誉等级 */
      userLevel?: number;
    }

    export class FriendQueryDTO {
      /** limit */
      limit?: number;

      /** offset */
      offset?: number;

      /** page */
      page?: number;

      /** pageSize */
      pageSize?: number;

      /** 0获取可抽捐好友 1好友列表 2获取黑名单 */
      type?: number;
    }

    export class InvitationBindingDTO {
      /** 邀请码 */
      invitedCode: string;

      /** 手机号 */
      phone: string;
    }

    export class InviteResultDTO {
      /** 当前用户邀请码 */
      invitedCode?: string;
    }

    export class InvitedRelationDTO {
      /** 头像 */
      avatarUrl?: string;

      /** 算力 */
      hashRate?: number;

      /** 邀请用户Id */
      invitedUserId?: number;

      /** 用户昵称 */
      nickName?: string;

      /** 手机号 */
      phone?: string;

      /** 用户真实名称 */
      realName?: string;

      /** 总漫克 */
      totalMaq?: number;

      /** 用户Id */
      userId?: number;
    }

    export class LevelUpDTO {
      /** 邀请好友的等级 */
      level?: string;

      /** 下一等级 */
      nextLevel?: string;

      /** 升级百分比 */
      percentage?: number;

      /** 升级需要人数 */
      requiredNum?: number;
    }

    export class LogDTO {
      /** 业务模块 */
      businessModule?: string;

      /** clientId */
      clientId?: string;

      /** 操作时间 */
      createdAt?: string;

      /** 设备号 */
      deviceNo?: string;

      /** 设备系统 */
      deviceSystem?: string;

      /** groupId */
      groupId?: string;

      /** 日志id */
      id?: number;

      /** 操作地点 */
      loginCity?: string;

      /** 操作ip */
      loginIp?: string;

      /** 操作人昵称 */
      nickName?: string;

      /** 部门id */
      opDepartmentId?: number;

      /** 部门名 */
      opDepartmentName?: string;

      /** 操作资源 */
      opResources?: string;

      /** 操作类型 */
      opType?: string;

      /** 角色id */
      roleId?: number;

      /** 角色名 */
      roleName?: string;

      /** 操作人id */
      userId?: number;

      /** 操作人username */
      userName?: string;
    }

    export class LoginAccessToken {
      /** accessToken */
      accessToken?: string;

      /** cellPhone */
      cellPhone?: string;

      /** expiresIn */
      expiresIn?: number;

      /** refreshToken */
      refreshToken?: string;

      /** tokenType */
      tokenType?: string;

      /** userId */
      userId?: number;

      /** username */
      username?: string;
    }

    export class LoginDTO {
      /** 验证码 */
      code?: string;

      /** 密码 */
      password?: string;

      /** 手机号 */
      phone?: string;

      /** 用户名 */
      username?: string;
    }

    export class LoginLogDTO {
      /** 设备号 */
      deviceNo?: string;

      /** 设备操作系统 */
      deviceSystem?: string;

      /** id */
      id?: number;

      /** 登录时间 */
      loginAt?: string;

      /** 登录城市 */
      loginCity?: string;

      /** 登录ip */
      loginIp?: string;

      /** 登录方式，1密码登录，2手机登录，3微信登录 */
      loginType?: string;

      /** 会员账号 */
      memberId?: string;

      /** 昵称 */
      nickName?: string;

      /** 手机号 */
      phone?: string;

      /** userId */
      userId?: number;

      /** 用户名 */
      userName?: string;

      /** 微信号 */
      wechatId?: string;
    }

    export class ManualAuthDetailResultDTO {
      /** 认证时间 */
      authAt?: string;

      /** 认证管理员 */
      authBy?: string;

      /** 提交时间 */
      createdAt?: string;

      /** 身份证 */
      idCard?: string;

      /** 身份证反面 */
      idPicBack?: string;

      /** 身份证正面 */
      idPicFront?: string;

      /** 会员姓名 */
      memberName?: string;

      /** 会员昵称 */
      nickName?: string;

      /** 手机 */
      phone?: string;

      /** 认证状态 1待认证，2已认证，3已驳回 */
      state?: number;
    }

    export class ManualAuthPageDTO {
      /** 提交时间 */
      createdAt?: string;

      /** 人工审核id */
      id?: number;

      /** 身份证 */
      idCard?: string;

      /** 身份证反面 */
      idPicBack?: string;

      /** 身份证正面 */
      idPicFront?: string;

      /** 提交姓名 */
      name?: string;

      /** 会员昵称 */
      nickName?: string;

      /** 手机 */
      phone?: string;

      /** 驳回原因 */
      rejectReason?: string;

      /** 认证状态 1待认证，2已认证，3已驳回 */
      state?: number;

      /** 会员id */
      userId?: number;
    }

    export class ManualCertificationDTO {
      /** 市 */
      city?: string;

      /** 区 */
      district?: string;

      /** 身份证号 */
      idCard: string;

      /** 身份证反面 */
      idPicBack?: string;

      /** 身份证正面 */
      idPicFront?: string;

      /** 省 */
      province?: string;

      /** 真实姓名 */
      realName: string;

      /** 短信验证码code，三要素认证时不能为空 */
      verifyCode?: string;
    }

    export class ManualResultAppDTO {
      /** 驳回原因 */
      rejectReason?: string;

      /** 认证状态，1待认证，2已认证，3已驳回，为null尚未认证 */
      state?: number;
    }

    export class MemberBanDTO {
      /** 封禁原因 */
      banReason?: string;

      /** 封禁类型，0未封禁会员，1漫克封禁会员，2账号封禁会员 */
      banType?: number;

      /** 用户Id */
      userId?: number;
    }

    export class MemberByNickNameDTO {
      /** 用户昵称 */
      nickName?: string;

      /** 用户手机号 */
      phone?: string;

      /** 用户id */
      userId?: number;
    }

    export class MemberDTO {
      /** 活跃度 */
      activeStatus?: number;

      /** 是否天使vip */
      angelVip?: boolean;

      /** 头像 */
      avatarUrl?: string;

      /** 封禁原因 */
      banReason?: string;

      /** 封禁类型，封禁类型，0解禁，1仅封禁漫克，2封禁登录和漫克 */
      banType?: number;

      /** 是否绑定微信，0未绑定，1绑定 */
      bindWechat?: number;

      /** 三要素是否认证，0未认证，1已认证 */
      cardCertification?: number;

      /** 零钱包漫克 */
      coinMaq?: number;

      /** 注册时间 */
      createdAt?: string;

      /** 设备号 */
      deviceNo?: string;

      /** 设备操作系统 */
      deviceSystem?: string;

      /** 人脸是否认证，0未认证，1已认证 */
      faceCertification?: number;

      /** 长久算力 */
      hashrateLongTerm?: number;

      /** 临时算力 */
      hashrateTemp?: number;

      /** id */
      id?: number;

      /** 最后登录时间 */
      lastLoginAt?: string;

      /** 最后访问时间 */
      lastViewAt?: string;

      /** 链上漫克 */
      lineMaq?: number;

      /** 登录城市 */
      loginCity?: string;

      /** 登录ip */
      loginIp?: string;

      /** 人工是否认证，0未认证，1已认证 */
      manualCertification?: number;

      /** 会员ID */
      memberId?: string;

      /** 会员类型 */
      memberType?: number;

      /** 用户昵称 */
      nickName?: string;

      /** 手机号 */
      phone?: string;

      /** 是否代理 */
      proxyUser?: boolean;

      /** 用户真实名称 */
      realName?: string;

      /** 用户最近收租时间 */
      recentlyRentAt?: string;

      /** 注册时间 */
      registerAt?: string;

      /** 备注 */
      remark?: string;

      /** 商城漫克 */
      shoppingMaq?: number;

      /** 总漫克 */
      totalMaq?: number;

      /** 是否允许添加自己为好友 */
      unallowedState?: number;

      /** 用户Id */
      userId?: number;

      /** 荣誉等级 */
      userLevel?: number;

      /** 微信号 */
      wechatId?: string;
    }

    export class MemberDetailDTO {
      /** 活跃状态，0不活跃，1活跃 */
      activeStatus?: number;

      /** 头像 */
      avatarUrl?: string;

      /** 封禁类型 */
      banType?: number;

      /** 是否绑定微信，0未绑定，1绑定 */
      bindWechat?: number;

      /** 三要素是否认证，0未认证，1已认证 */
      cardCertification?: number;

      /** 市 */
      city?: string;

      /** 注册时间 */
      createdAt?: string;

      /** 区 */
      district?: string;

      /** 人脸是否认证，0未认证，1已认证 */
      faceCertification?: number;

      /** 邀请用户id */
      invitedUserId?: number;

      /** 最后登录时间 */
      lastLoginAt?: string;

      /** 人工是否认证，0未认证，1已认证 */
      manualCertification?: number;

      /** 会员ID */
      memberId?: string;

      /** 会员类型，注册会员 = 1,正式会员 = 2, */
      memberType?: number;

      /** 用户昵称 */
      nickName?: string;

      /** 手机号 */
      phone?: string;

      /** 省 */
      province?: string;

      /** 用户真实名称 */
      realName?: string;

      /** 注册方式，1手机，2微信 */
      registerBy?: number;

      /** 注册城市 */
      registerCity?: string;

      /** 注册设备号 */
      registerDeviceCode?: string;

      /** 注册ip */
      registerIp?: string;

      /** 注册手机号 */
      registerPhone?: string;

      /** 注册微信号 */
      registerWechatId?: string;

      /** 备注 */
      remark?: string;

      /** 是否允许添加自己为好友 */
      unallowedState?: number;

      /** 用户Id */
      userId?: number;

      /** 荣誉等级 */
      userLevel?: number;

      /** 微信号 */
      wechatId?: string;
    }

    export class MemberGrowthTrendDTO {
      /** 当前会员总数 */
      day?: string;

      /** 会员总数 */
      num?: number;
    }

    export class MemberRemarkDTO {
      /** 备注 */
      remark?: string;

      /** userId */
      userId?: number;
    }

    export class MemberStatisticDTO {
      /** 当前活跃会员数 */
      currentActiveNum?: number;

      /** 当前VIP天使会员数 */
      currentAngleVipNum?: number;

      /** 当前正式会员数 */
      currentFormalNum?: number;

      /** 当前会员总数 */
      currentNum?: number;

      /** 当前在线会员数 */
      onLineNum?: number;

      /** 今日新增会员 */
      todayAddNum?: number;
    }

    export class MyFriendDTO {
      /** avatarUrl */
      avatarUrl?: string;

      /** 是否封禁 */
      banType?: number;

      /** 好友数量 */
      friendsNum?: number;

      /** 算力 */
      hashrate?: number;

      /** 是否认证 */
      isAuth?: number;

      /** 是否是推荐人 */
      isReference?: number;

      /** 会员编号 */
      memberId?: string;

      /** 昵称 */
      nickName?: string;

      /** 用户Id */
      userId?: number;

      /** 荣誉等级 */
      userLevel?: number;
    }

    export class NickNameUpdateDTO {
      /** 用户昵称 */
      nickName?: string;
    }

    export class OpUserDTO {
      /** 账号类型，0普通账号，1领导账号 */
      accountType?: number;

      /** 封禁类型，0正常，1禁用 */
      banType?: number;

      /** 创建时间 */
      createdAt?: string;

      /** 创建人id */
      createdUserId?: number;

      /** 创建人姓名 */
      createdUserName?: string;

      /** id */
      id?: number;

      /** 最近登录时间 */
      lastLoginAt?: string;

      /** 昵称 */
      nickName?: string;

      /** 部门id */
      opDepartmentId?: number;

      /** 部门名称 */
      opDepartmentName?: string;

      /** 初始密码 */
      password?: string;

      /** 手机号 */
      phone?: string;

      /** 重复密码 */
      rePassword?: string;

      /** 角色id */
      roleId?: number;

      /** 角色名称 */
      roleName?: string;

      /** 性别，1男，2女 */
      sex?: number;

      /** 更新人id */
      updatedUserId?: number;

      /** 更新人姓名 */
      updatedUserName?: string;

      /** 认证中心用户id */
      userId?: number;

      /** 用户名 */
      userName?: string;
    }

    export class PageRes<T0 = any> {
      /** limit */
      limit?: number;

      /** list */
      list?: Array<T0>;

      /** offset */
      offset?: number;

      /** page */
      page?: number;

      /** pageSize */
      pageSize?: number;

      /** total */
      total?: number;
    }

    export class ProxyApplyAppStatusDTO {
      /** 开通等级 */
      openLevel?: number;

      /** 原因 */
      reason?: string;

      /** 状态：0申请中，1通过，正常状态，2被驳回，3封停，4当前等级低于代理等级 */
      status?: number;
    }

    export class ProxyApplyListDTO {
      /** 是否天使vip */
      angelVip?: boolean;

      /** 审批时间 */
      approveAt?: string;

      /** 审批管理员 */
      approveOpUserId?: number;

      /** 0待审批、1已通过正常状态、2已驳回 */
      approveStatus?: number;

      /** 申请时间 */
      createdAt?: string;

      /** id */
      id?: number;

      /** 用户昵称 */
      nickName?: string;

      /** 审批管理员昵称 */
      opNickName?: string;

      /** 审批管理员用户名 */
      opUserName?: string;

      /** 用户手机号 */
      phone?: string;

      /** 用户姓名 */
      realName?: string;

      /** 驳回原因 */
      reason?: string;

      /** 算力 */
      totalHashRate?: number;

      /** 漫克 */
      totalMaq?: number;

      /** 用户id */
      userId?: number;

      /** 用户等级 */
      userLevel?: number;
    }

    export class ProxyApplyStatusListDTO {
      /** 状态 */
      approveStatus?: number;

      /** id */
      idList?: Array<number>;

      /** 驳回原因 */
      reason?: string;
    }

    export class ProxyChildrenAppDTO {
      /** 用户头像 */
      avatarUrl?: string;

      /** 用户昵称 */
      nickName?: string;

      /** 用户id */
      userId?: number;

      /** 用户等级 */
      userLevel?: number;
    }

    export class ProxyParentAppDTO {
      /** 用户头像 */
      avatarUrl?: string;

      /** 用户昵称 */
      nickName?: string;

      /** 代理类别：0代理，1谢师 */
      proxyUserType?: number;

      /** 用户id */
      userId?: number;

      /** 用户等级 */
      userLevel?: number;
    }

    export class ProxyParentDTO {
      /** 用户头像 */
      avatarUrl?: string;

      /** 用户邀请id */
      invitedUserId?: number;

      /** 用户昵称 */
      nickName?: string;

      /** 用户手机号 */
      phone?: string;

      /** 代理类别：0代理，1谢师 */
      proxyUserType?: number;

      /** 用户姓名 */
      realName?: string;

      /** 用户id */
      userId?: number;

      /** 用户等级 */
      userLevel?: number;
    }

    export class ProxyTeamDTO {
      /** 用户头像 */
      avatarUrl?: string;

      /** 用户邀请id */
      invitedUserId?: number;

      /** 用户昵称 */
      nickName?: string;

      /** 用户手机号 */
      phone?: string;

      /** 是否是代理 */
      proxyUser?: boolean;

      /** 代理费用：0代理，1谢师 */
      proxyUserType?: number;

      /** 用户姓名 */
      realName?: string;

      /** 用户id */
      userId?: number;

      /** 用户等级 */
      userLevel?: number;
    }

    export class ProxyUserListDTO {
      /** 是否天使vip */
      angelVip?: boolean;

      /** id */
      id?: number;

      /** 用户昵称 */
      nickName?: string;

      /** 用户手机号 */
      phone?: string;

      /** 用户姓名 */
      realName?: string;

      /** 封停原因 */
      reason?: string;

      /** 备注 */
      remark?: string;

      /** 0正常、1已封停、2降级 */
      status?: number;

      /** 算力 */
      totalHashRate?: number;

      /** 漫克 */
      totalMaq?: number;

      /** 用户id */
      userId?: number;

      /** 用户等级 */
      userLevel?: number;
    }

    export class ProxyUserRemarkDTO {
      /** ID */
      id?: number;

      /** 备注 */
      remark?: string;
    }

    export class ProxyUserStatusDTO {
      /** 封停原因 */
      reason?: string;

      /** 0正常、1已封停、2降级 */
      status?: number;

      /** 用户ID */
      userId?: number;
    }

    export class ReceiverAddDTO {
      /** 详细地址 */
      address: string;

      /** 市 */
      city: string;

      /** 区 */
      district: string;

      /** 是否默认收获地址,1:是默认收货地址，0不是 */
      isDefault: number;

      /** 省 */
      province: string;

      /** 收货人名称 */
      receiverName: string;

      /** 收货人手机号 */
      receiverPhone: string;
    }

    export class ReceiverDTO {
      /** 详细地址 */
      address: string;

      /** 市 */
      city: string;

      /** 市名称 */
      cityName: string;

      /** 区 */
      district: string;

      /** 区名称 */
      districtName: string;

      /** 收货地址Id */
      id: number;

      /** 是否默认收获地址,1:是默认收货地址，0不是 */
      isDefault: number;

      /** 省 */
      province: string;

      /** 省名称 */
      provinceName: string;

      /** 收货人名称 */
      receiverName: string;

      /** 收货人手机号 */
      receiverPhone: string;
    }

    export class ReceiverDeleteDTO {
      /** 收货地址Id */
      idList: Array<number>;
    }

    export class ReceiverUpdateDTO {
      /** 详细地址 */
      address: string;

      /** 市 */
      city: string;

      /** 区 */
      district: string;

      /** 收货地址Id */
      id: number;

      /** 是否默认收获地址,1:是默认收货地址，0不是 */
      isDefault: number;

      /** 省 */
      province: string;

      /** 收货人名称 */
      receiverName: string;

      /** 收货人手机号 */
      receiverPhone: string;
    }

    export class RegisterPhoneDTO {
      /** 手机号 */
      phone: string;
    }

    export class RegisterTokenInfo {
      /** accessToken */
      accessToken?: string;

      /** cellPhone */
      cellPhone?: string;

      /** expiresIn */
      expiresIn?: number;

      /** id */
      id?: number;

      /** refreshToken */
      refreshToken?: string;

      /** tokenType */
      tokenType?: string;

      /** userId */
      userId?: number;

      /** username */
      username?: string;
    }

    export class RegisterUserDTO {
      /** 邀请码 */
      invitedCode?: string;

      /** 密码 */
      password: string;

      /** 手机号 */
      phone: string;

      /** 验证码 */
      verificationCode: string;
    }

    export class RentSoundDTO {
      /** 收租音效，0关闭，1开启 */
      rentSound?: number;
    }

    export class SendSmsDTO {
      /** 手机号 */
      phone: string;

      /** 发送短信类型 */
      type: number;
    }

    export class StateDTO {
      /** 状态，0：可以搜索到自己，1：不能搜索到自己 */
      state?: number;
    }

    export class UpdatePasswordByPhoneDTO {
      /** 新密码 */
      newPassword?: string;

      /** 手机号 */
      phone?: string;

      /** 验证码 */
      verificationCode?: string;
    }

    export class UpdatePhoneDTO {
      /** 新手机号 */
      newPhone?: string;

      /** 新验证码 */
      newVerificationCode?: string;

      /** 旧手机号 */
      oldPhone?: string;

      /** 旧验证码 */
      oldVerificationCode?: string;
    }

    export class UserDTO {
      /** 天使等级 */
      angelLevel?: number;

      /** 头像 */
      avatarUrl?: string;

      /** 是否绑定微信，0未绑定，1绑定 */
      bindWechat?: number;

      /** 年龄 */
      birthday?: string;

      /** 身份证号是否已经实名认证，1是已经实名认证 */
      cardCertification?: number;

      /** 市 */
      city?: string;

      /** 区 */
      district?: string;

      /** 人脸是否已经实名认证，1是已经实名认证 */
      faceCertification?: number;

      /** 邀请码 */
      invitedCode?: number;

      /** 人工是否已经实名认证，1是已经实名认证 */
      manualCertification?: number;

      /** 认证状态，1待认证，2已认证，3已驳回，为null尚未认证 */
      manualState?: number;

      /** 会员ID */
      memberId?: string;

      /** 用户昵称 */
      nickName?: string;

      /** 手机号 */
      phone?: string;

      /** 省 */
      province?: string;

      /** 用户真实名称 */
      realName?: string;

      /** 是否添加收货地址，true已经添加 */
      receiver?: boolean;

      /** 驳回原因 */
      rejectReason?: string;

      /** 收租音效，0关闭，1开启，默认0 */
      rentSound?: number;

      /** 性别:1为男，2为女 */
      sex?: number;

      /** 是否允许添加自己为好友 */
      unallowedState?: number;

      /** 用户Id */
      userId?: number;

      /** 荣誉等级 */
      userLevel?: number;

      /** 荣誉等级 */
      userLevelDesc?: string;
    }

    export class UserLivingDTO {
      /** 市 */
      city?: string;

      /** 区 */
      district?: string;

      /** 省 */
      province?: string;
    }

    export class UserResetPassword {
      /** 验证码 */
      code?: string;

      /** 新密码 */
      newPassword?: string;

      /** 手机号 */
      phone?: string;

      /** 确认密码 */
      reNewPassword?: string;

      /** 用户id */
      userId?: number;
    }

    export class ValidFriendDTO {
      /** 好友id */
      friendUserId?: number;
    }

    export class WeChatBindDTO {
      /** 微信code */
      weChatCode?: string;
    }

    export class WeChatLoginAccessTokenDTO {
      /** accessToken */
      accessToken?: string;

      /** cellPhone */
      cellPhone?: string;

      /** expiresIn */
      expiresIn?: number;

      /** refreshToken */
      refreshToken?: string;

      /** tokenType */
      tokenType?: string;

      /** userId */
      userId?: number;

      /** username */
      username?: string;
    }

    export class WeChatLoginDTO {
      /** 微信code */
      weChatCode?: string;
    }

    export class WeChatRegisterDTO {
      /** 手机号 */
      phone: string;

      /** 验证码 */
      verificationCode: string;

      /** 微信code */
      weChatCode?: string;
    }
  }
}

declare namespace API {
  export namespace mankeUser {
    /**
     * 合伙人模块相关接口
     */
    export namespace cityPartner {
      /**
       * 运营端区域查询上下级信息
       * /cityPartner/cityPartnerLevelList
       */
      export namespace cityPartnerLevelList {
        export class Params {
          /** 申请人信息 */
          applyInfo?: string;
          /** 合作城市 */
          joinCity?: string;
          /** 合作区 */
          joinDistrict?: string;
          /** 合作类型：0地级，1县级 */
          joinType?: number;
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 申请状态 0待审批、1已通过正常状态、2已驳回，合伙人状态：0正常，1封停，2过期 */
          status?: number;
          /** 会员账号 */
          userId?: number;
        }

        export type Response = defs.mankeUser.PageRes<
          defs.mankeUser.CityPartnerLevelListDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 运营端城市合伙人统计
       * /cityPartner/getCityPartnerStatistic
       */
      export namespace getCityPartnerStatistic {
        export class Params {}

        export type Response = defs.mankeUser.CityPartnerStatisticDTO;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * app端查询区域广告主信息
       * /cityPartner/queryAppAreaAd
       */
      export namespace queryAppAreaAd {
        export class Params {
          /** 广告主名称 */
          accountName?: string;
          /** 广告主类型 */
          adType?: number;
          /** 市 */
          city?: string;
          /** 区 */
          district?: string;
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 省 */
          province?: string;
        }

        export type Response = defs.mankeUser.PageRes<
          defs.mankeUser.AreaAdListDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * app端查询区域酒店信息
       * /cityPartner/queryAppAreaHotel
       */
      export namespace queryAppAreaHotel {
        export class Params {
          /** 市 */
          city?: string;
          /** 区 */
          district?: string;
          /** 酒店名称 */
          hotelName?: string;
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 省 */
          province?: string;
        }

        export type Response = defs.mankeUser.PageRes<
          defs.mankeUser.AreaHotelListDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * app端查询上下级信息
       * /cityPartner/queryAppLevel
       */
      export namespace queryAppLevel {
        export class Params {
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
        }

        export type Response = defs.mankeUser.PageRes<
          defs.mankeUser.CityPartnerLevelAppListDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 运营端查询合伙人列表
       * /cityPartner/queryList
       */
      export namespace queryList {
        export class Params {
          /** 申请人信息 */
          applyInfo?: string;
          /** 合作城市 */
          joinCity?: string;
          /** 合作区 */
          joinDistrict?: string;
          /** 合作类型：0地级，1县级 */
          joinType?: number;
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 申请状态 0待审批、1已通过正常状态、2已驳回，合伙人状态：0正常，1封停，2过期 */
          status?: number;
          /** 会员账号 */
          userId?: number;
        }

        export type Response = defs.mankeUser.PageRes<
          defs.mankeUser.CityPartnerListDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 更换合作类型和合作城市，合作期限
       * /cityPartner/updateJoinCity
       */
      export namespace updateJoinCity {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.CityPartnerUpdateJoinCityDTO,
        ): Promise<Response>;
      }

      /**
       * 运营端更新备注
       * /cityPartner/updateRemark
       */
      export namespace updateRemark {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.CityPartnerRemarkDTO,
        ): Promise<Response>;
      }

      /**
       * 运营端合伙人更新状态
       * /cityPartner/updateStatus
       */
      export namespace updateStatus {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.CityPartnerStatusDTO,
        ): Promise<Response>;
      }
    }

    /**
     * 合伙人申请模块相关接口
     */
    export namespace cityPartnerApply {
      /**
       * app端申请合伙人
       * /cityPartnerApply/add
       */
      export namespace add {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.CityPartnerApplyAddDTO,
        ): Promise<Response>;
      }

      /**
       * app端获取用户申请合伙人状态
       * /cityPartnerApply/getAppStatus
       */
      export namespace getAppStatus {
        export class Params {}

        export type Response = defs.mankeUser.CityPartnerAppStatusDTO;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 运营端查询合伙人申请列表
       * /cityPartnerApply/queryList
       */
      export namespace queryList {
        export class Params {
          /** 申请人信息 */
          applyInfo?: string;
          /** 合作城市 */
          joinCity?: string;
          /** 合作区 */
          joinDistrict?: string;
          /** 合作类型：0地级，1县级 */
          joinType?: number;
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 申请状态 0待审批、1已通过正常状态、2已驳回，合伙人状态：0正常，1封停，2过期 */
          status?: number;
          /** 会员账号 */
          userId?: number;
        }

        export type Response = defs.mankeUser.PageRes<
          defs.mankeUser.CityPartnerApplyListDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 运营端更新审批备注
       * /cityPartnerApply/updateApplyRemark
       */
      export namespace updateApplyRemark {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.CityPartnerRemarkDTO,
        ): Promise<Response>;
      }

      /**
       * 运营端合伙人更新审批状态
       * /cityPartnerApply/updateApplyStatus
       */
      export namespace updateApplyStatus {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.CityPartnerStatusApplyDTO,
        ): Promise<Response>;
      }
    }

    /**
     * 用户注销相关接口
     */
    export namespace closeAccountApply {
      /**
       * 获取用户注销状态
       * /closeAccount/getEnums
       */
      export namespace getEnums {
        export class Params {}

        export type Response = Array<defs.mankeUser.CloseAccountEnumDTO>;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 列表
       * /closeAccount/list
       */
      export namespace list {
        export class Params {
          /** limit */
          limit?: number;
          /** 昵称 */
          nickName?: string;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 手机号 */
          phone?: string;
          /** 状态 */
          status?: number;
        }

        export type Response = defs.mankeUser.PageRes<
          defs.mankeUser.CloseAccountDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 更新备注
       * /closeAccount/updateRemark
       */
      export namespace updateRemark {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.CloseAccountRemarkDTO,
        ): Promise<Response>;
      }

      /**
       * 更新状态
       * /closeAccount/updateStatus
       */
      export namespace updateStatus {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.CloseAccountStatusDTO,
        ): Promise<Response>;
      }
    }

    /**
     * 黑白名单相关接口
     */
    export namespace filterList {
      /**
       * 黑白名单列表
       * /filter/list
       */
      export namespace list {
        export class Params {
          /** type */
          type: number;
        }

        export type Response = Array<defs.mankeUser.FilterListDTO>;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 添加或修改黑白名单,0:设备黑名单，1:消费黑名单,2:IP黑名单,3:设备白名单,4:消费白名单
       * /filter/set
       */
      export namespace set {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.AddDTOToTheBlackList,
        ): Promise<Response>;
      }
    }

    /**
     * 好友相关接口
     */
    export namespace friendRelation {
      /**
       * 拉黑或删除好友
       * /relation/delete
       */
      export namespace updateRelation {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.BlackListUpdateDTO,
        ): Promise<Response>;
      }

      /**
       * 好友详情列表
       * /relation/detail
       */
      export namespace getFriendDetail {
        export class Params {}

        export type Response = defs.mankeUser.FriendDetailDTO;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.ValidFriendDTO,
        ): Promise<Response>;
      }

      /**
       * 获取好友/黑名id单列表
       * /relation/getFriendIds
       */
      export namespace getFriendIds {
        export class Params {
          /** type */
          type: number;
          /** userId */
          userId: number;
        }

        export type Response = Array<number>;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 获取当前用户邀请码
       * /relation/inviteCode
       */
      export namespace invite {
        export class Params {}

        export type Response = defs.mankeUser.InviteResultDTO;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 获取当前用户直邀好友
       * /relation/invitedFriends
       */
      export namespace getInvitedFriendLevel {
        export class Params {}

        export type Response = ObjectMap<any, number>;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 获取好友/黑名单列表
       * /relation/myFriend
       */
      export namespace getFriend {
        export class Params {}

        export type Response = defs.mankeUser.PageRes<
          defs.mankeUser.MyFriendDTO
        >;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.FriendQueryDTO,
        ): Promise<Response>;
      }

      /**
       * 用户好友查询
       * /relation/queryFriendList
       */
      export namespace queryFriendList {
        export class Params {
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** userId */
          userId: number;
        }

        export type Response = defs.mankeUser.PageRes<
          defs.mankeUser.FriendListDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 获取当前用户升级条件
       * /relation/upLevelCondition
       */
      export namespace levelUpCondition {
        export class Params {}

        export type Response = defs.mankeUser.LevelUpDTO;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }
    }

    /**
     * 邀请关系查询
     */
    export namespace invitedRelation {
      /**
       * 获取用户邀请的其他用户
       * /invited/getChildrenUser
       */
      export namespace getChildrenUser {
        export class Params {
          /** userId */
          userId: number;
        }

        export type Response = Array<defs.mankeUser.InvitedRelationDTO>;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 获取用户信息
       * /invited/getCurrentUser
       */
      export namespace getCurrentUser {
        export class Params {
          /** userId */
          userId: number;
        }

        export type Response = defs.mankeUser.InvitedRelationDTO;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }
    }

    /**
     * 日志相关接口
     */
    export namespace log {
      /**
       * 获取管理员日志
       * /log/opPage
       */
      export namespace opPage {
        export class Params {
          /** 业务模块 */
          businessModule?: string;
          /** ip地址 */
          loginIp?: string;
          /** 操作起始时间 */
          opAtBegin?: string;
          /** 操作结束时间 */
          opAtEnd?: string;
          /** 操作内容 */
          opContent?: string;
          /** 角色id */
          opDepartmentId?: number;
          /** 起始页 */
          page?: number;
          /** 页长 */
          pageSize?: number;
          /** 角色id */
          roleId?: number;
          /** 管理员用户名/姓名 */
          userInfo?: string;
        }

        export type Response = defs.mankeUser.PageRes<defs.mankeUser.LogDTO>;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 获取会员登录日志
       * /log/page
       */
      export namespace pageMemberLoginLogs {
        export class Params {
          /** 设备号 */
          deviceNo?: string;
          /** 设备操作系统 */
          deviceSystem?: string;
          /** 登录起始时间 */
          loginAtBegin?: string;
          /** 登录结束时间 */
          loginAtEnd?: string;
          /** 登录ip */
          loginIp?: string;
          /** 会员账号/ID/昵称/手机号 */
          memberInfo?: string;
          /** 起始页 */
          page?: number;
          /** 页长 */
          pageSize?: number;
          /** 会员id */
          userId?: number;
        }

        export type Response = defs.mankeUser.PageRes<
          defs.mankeUser.LoginLogDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }
    }

    /**
     * 登录相关接口
     */
    export namespace login {
      /**
       * h5页面用户名密码登录
       * /hLogin
       */
      export namespace hLogin {
        export class Params {}

        export type Response = defs.mankeUser.LoginAccessToken;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.LoginDTO,
        ): Promise<Response>;
      }

      /**
       * h5页面手机号短信登录
       * /hSmsLogin
       */
      export namespace hSmsLogin {
        export class Params {}

        export type Response = defs.mankeUser.LoginAccessToken;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.LoginDTO,
        ): Promise<Response>;
      }

      /**
       * 用户名密码登录
       * /login
       */
      export namespace login {
        export class Params {}

        export type Response = defs.mankeUser.LoginAccessToken;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.LoginDTO,
        ): Promise<Response>;
      }

      /**
       * 退出登录
       * /logout
       */
      export namespace loginOut {
        export class Params {}

        export type Response = boolean;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 运营商用户名密码登录
       * /opLogin
       */
      export namespace opLogin {
        export class Params {}

        export type Response = defs.mankeUser.LoginAccessToken;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.LoginDTO,
        ): Promise<Response>;
      }

      /**
       * 运营商手机号短信登录
       * /opSmsLogin
       */
      export namespace opSmsLogin {
        export class Params {}

        export type Response = defs.mankeUser.LoginAccessToken;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.LoginDTO,
        ): Promise<Response>;
      }

      /**
       * 手机号短信登录
       * /smsLogin
       */
      export namespace smsLogin {
        export class Params {}

        export type Response = defs.mankeUser.LoginAccessToken;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.LoginDTO,
        ): Promise<Response>;
      }

      /**
       * 微信登录
       * /weChatLogin
       */
      export namespace weChatLogin {
        export class Params {}

        export type Response = defs.mankeUser.LoginAccessToken;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.WeChatLoginDTO,
        ): Promise<Response>;
      }
    }

    /**
     * 人工身份认证相关接口
     */
    export namespace manualAuth {
      /**
       * 人工认证通过
       * /manualAuth/approve
       */
      export namespace approve {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = number;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 查询审核详情
       * /manualAuth/detail
       */
      export namespace detail {
        export class Params {
          /** id */
          id?: number;
        }

        export type Response = defs.mankeUser.ManualAuthDetailResultDTO;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 分页查询人工审核
       * /manualAuth/list
       */
      export namespace list {
        export class Params {
          /** 结束时间 */
          endAt?: string;
          /** 身份证 */
          idCard?: string;
          /** limit */
          limit?: number;
          /** 提交姓名 */
          name?: string;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 手机 */
          phone?: string;
          /** 开始时间 */
          startAt?: string;
          /** 认证状态 1待认证，2已认证，3已驳回 */
          state?: number;
          /** 会员账号 */
          userAccount?: string;
        }

        export type Response = defs.mankeUser.PageRes<
          defs.mankeUser.ManualAuthPageDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 人工认证驳回
       * /manualAuth/reject
       */
      export namespace reject {
        export class Params {
          /** id */
          id: number;
          /** rejectReason */
          rejectReason: string;
        }

        export type Response = number;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }
    }

    /**
     * 会员相关接口
     */
    export namespace member {
      /**
       * 封禁会员账号、漫克
       * /member/ban
       */
      export namespace ban {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.MemberBanDTO,
        ): Promise<Response>;
      }

      /**
       * 会员详情
       * /member/detail
       */
      export namespace detail {
        export class Params {
          /** userId */
          userId: number;
        }

        export type Response = defs.mankeUser.MemberDetailDTO;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 获取在线会员列表
       * /member/onlinePage
       */
      export namespace onlineMembers {
        export class Params {
          /** 设备号 */
          deviceNo?: string;
          /** limit */
          limit?: number;
          /** 访问ip */
          loginIp?: string;
          /** 会员账号/ID/昵称/手机号 */
          memberInfo?: string;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 有效时间，单位：分, 默认15分内 */
          validMinutes?: number;
        }

        export type Response = defs.mankeUser.PageRes<defs.mankeUser.MemberDTO>;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 获取会员列表
       * /member/page
       */
      export namespace page {
        export class Params {
          /** 0不活跃，1活跃 */
          activeStatus?: number;
          /** 封禁类型 */
          banType?: number;
          /** 会员id */
          memberId?: string;
          /** 会员类型 */
          memberType?: number;
          /** 起始页 */
          page?: number;
          /** 页长 */
          pageSize?: number;
        }

        export type Response = defs.mankeUser.PageRes<defs.mankeUser.MemberDTO>;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 查询区域会员信息
       * /member/queryAreaMember
       */
      export namespace queryAreaMember {
        export class Params {}

        export type Response = defs.mankeUser.PageRes<
          defs.mankeUser.AreaMemberListDTO
        >;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.AreaMemberQueryDTO,
        ): Promise<Response>;
      }

      /**
       * 查询用户模糊搜索
       * /member/queryMember
       */
      export namespace queryMember {
        export class Params {
          /** limit */
          limit?: number;
          /** 用户昵称或手机号 */
          nickName?: string;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
        }

        export type Response = defs.mankeUser.PageRes<
          defs.mankeUser.MemberByNickNameDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 更新用户备注
       * /member/updateRemark
       */
      export namespace postUpdateRemark {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.MemberRemarkDTO,
        ): Promise<Response>;
      }
    }

    /**
     * 会员统计相关接口
     */
    export namespace memberStatistic {
      /**
       * 查询会员统计信息
       * /memberStatistic/getMemberStatistic
       */
      export namespace getMemberStatistic {
        export class Params {}

        export type Response = defs.mankeUser.MemberStatisticDTO;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 会员总量增长趋势图会员总数
       * /memberStatistic/listMemberGrowthTrendAll
       */
      export namespace listMemberGrowthTrendAll {
        export class Params {
          /** 年龄范围 */
          ageType?: number;
          /** 起始时间 */
          beginDate?: string;
          /** 城市Code */
          city?: string;
          /** 时间类型：0：按日,1：按月 */
          currentTime?: number;
          /** 结束时间 */
          endDate?: string;
          /** 性别，1为男性，2为女性 */
          sex?: number;
        }

        export type Response = Array<defs.mankeUser.MemberGrowthTrendDTO>;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 会员总量增长趋势图正式会员数
       * /memberStatistic/listMemberGrowthTrendFormal
       */
      export namespace listMemberGrowthTrendFormal {
        export class Params {
          /** 年龄范围 */
          ageType?: number;
          /** 起始时间 */
          beginDate?: string;
          /** 城市Code */
          city?: string;
          /** 时间类型：0：按日,1：按月 */
          currentTime?: number;
          /** 结束时间 */
          endDate?: string;
          /** 性别，1为男性，2为女性 */
          sex?: number;
        }

        export type Response = Array<defs.mankeUser.MemberGrowthTrendDTO>;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }
    }

    /**
     * 部门相关接口
     */
    export namespace opDepartment {
      /**
       * 添加部门
       * /opDept/add
       */
      export namespace add {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.DeptDTO,
        ): Promise<Response>;
      }

      /**
       * 部门列表
       * /opDept/listAll
       */
      export namespace listAll {
        export class Params {}

        export type Response = Array<defs.mankeUser.DeptDTO>;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 删除部门
       * /opDept/remove
       */
      export namespace remove {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.DeptDeleteDTO,
        ): Promise<Response>;
      }

      /**
       * 更新部门
       * /opDept/update
       */
      export namespace update {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.DeptDTO,
        ): Promise<Response>;
      }
    }

    /**
     * 系统管理员相关接口
     */
    export namespace opUser {
      /**
       * 添加系统管理员
       * /opUser/add
       */
      export namespace add {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.OpUserDTO,
        ): Promise<Response>;
      }

      /**
       * 获取当前系统管理员信息
       * /opUser/currentInfo
       */
      export namespace currentInfo {
        export class Params {}

        export type Response = defs.mankeUser.OpUserDTO;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 获取系统管理员信息
       * /opUser/detail
       */
      export namespace detail {
        export class Params {
          /** userId */
          userId: number;
        }

        export type Response = defs.mankeUser.OpUserDTO;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * DisableEnable系统管理员
       * /opUser/disable
       */
      export namespace update {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.DisableEnable,
        ): Promise<Response>;
      }

      /**
       * 获取系统管理员列表
       * /opUser/page
       */
      export namespace page {
        export class Params {
          /** 账号类型 */
          accountType?: number;
          /** banType */
          banType?: number;
          /** 昵称 */
          nickName?: string;
          /** 部门编码 */
          opDepartmentId?: number;
          /** 起始页 */
          page?: number;
          /** 页长 */
          pageSize?: number;
          /** 手机号 */
          phone?: string;
          /** 角色id */
          roleId?: number;
          /** 用户名 */
          userName?: string;
        }

        export type Response = defs.mankeUser.PageRes<defs.mankeUser.OpUserDTO>;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 删除系统管理员
       * /opUser/remove
       */
      export namespace postRemove {
        export class Params {
          /** userId */
          userId: number;
        }

        export type Response = number;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 更新系统管理员
       * /opUser/update
       */
      export namespace postUpdate {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.OpUserDTO,
        ): Promise<Response>;
      }

      /**
       * 更新密码
       * /opUser/updatePassword
       */
      export namespace updatePassword {
        export class Params {}

        export type Response = boolean;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.UserResetPassword,
        ): Promise<Response>;
      }
    }

    /**
     * 代理人申请相关接口
     */
    export namespace proxyApply {
      /**
       * app端添加代理人申请
       * /proxyApply/add
       */
      export namespace add {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * app端查询代理人状态
       * /proxyApply/getAppStatus
       */
      export namespace getAppStatus {
        export class Params {}

        export type Response = defs.mankeUser.ProxyApplyAppStatusDTO;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 代理人申请列表查询
       * /proxyApply/queryList
       */
      export namespace queryList {
        export class Params {
          /** 申请状态 0待审批、1已通过正常状态、2已驳回，合伙人状态：0正常，1封停，2降级 */
          approveStatus?: number;
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 申请人信息 */
          userId?: number;
        }

        export type Response = defs.mankeUser.PageRes<
          defs.mankeUser.ProxyApplyListDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 代理人申请状态更新
       * /proxyApply/updateStatus
       */
      export namespace updateStatus {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.ProxyApplyStatusListDTO,
        ): Promise<Response>;
      }
    }

    /**
     * 代理人管理模块相关接口
     */
    export namespace proxyUser {
      /**
       * app端获取上级代理信息
       * /proxyUser/getParentAppList
       */
      export namespace getParentAppList {
        export class Params {}

        export type Response = Array<defs.mankeUser.ProxyParentAppDTO>;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 获取上级代理信息
       * /proxyUser/getParentList
       */
      export namespace getParentList {
        export class Params {
          /** userId */
          userId?: number;
        }

        export type Response = Array<defs.mankeUser.ProxyParentDTO>;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * app端获取团队代理信息
       * /proxyUser/getTeamAppList
       */
      export namespace getTeamAppList {
        export class Params {}

        export type Response = Array<defs.mankeUser.ProxyChildrenAppDTO>;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 获取下一级别用户的缴费信息
       * /proxyUser/getTeamList
       */
      export namespace getTeamList {
        export class Params {
          /** 所要查询用户的下级的userId */
          queryUserId?: number;
        }

        export type Response = Array<defs.mankeUser.ProxyTeamDTO>;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 代理人列表查询
       * /proxyUser/queryList
       */
      export namespace queryList {
        export class Params {
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 0正常、1已封停、2降级 */
          status?: number;
          /** 用户Id */
          userId?: number;
        }

        export type Response = defs.mankeUser.PageRes<
          defs.mankeUser.ProxyUserListDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 代理人备注更新
       * /proxyUser/updateRemark
       */
      export namespace updateRemark {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.ProxyUserRemarkDTO,
        ): Promise<Response>;
      }

      /**
       * 代理人状态更新
       * /proxyUser/updateStatus
       */
      export namespace updateStatus {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.ProxyUserStatusDTO,
        ): Promise<Response>;
      }
    }

    /**
     * 注册相关接口
     */
    export namespace register {
      /**
       * 获取当前所有用户
       * /currentMem
       */
      export namespace getRegisterMem {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 手机号是否已经注册
       * /existInfo
       */
      export namespace existInfo {
        export class Params {}

        export type Response = boolean;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.RegisterPhoneDTO,
        ): Promise<Response>;
      }

      /**
       * 根据手机号获取已绑定的邀请码
       * /getInvitationCode
       */
      export namespace getInvitationCodeFromBingPhone {
        export class Params {
          /** phone */
          phone: string;
        }

        export type Response = string;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 绑定邀请码和手机号
       * /invitationBinding
       */
      export namespace invitationBinding {
        export class Params {}

        export type Response = boolean;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.InvitationBindingDTO,
        ): Promise<Response>;
      }

      /**
       * 手机号注册
       * /register
       */
      export namespace registerNewUser {
        export class Params {}

        export type Response = defs.mankeUser.RegisterTokenInfo;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.RegisterUserDTO,
        ): Promise<Response>;
      }

      /**
       * 微信注册登录
       * /registerWeChat
       */
      export namespace registerWeChat {
        export class Params {}

        export type Response = defs.mankeUser.WeChatLoginAccessTokenDTO;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.WeChatRegisterDTO,
        ): Promise<Response>;
      }

      /**
       * 发送短信
       * /send
       */
      export namespace send {
        export class Params {}

        export type Response = string;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.SendSmsDTO,
        ): Promise<Response>;
      }
    }

    /**
     * 用户相关接口
     */
    export namespace user {
      /**
       * 绑定微信
       * /user/bindWeChat
       */
      export namespace bindWeChat {
        export class Params {}

        export type Response = boolean;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.WeChatBindDTO,
        ): Promise<Response>;
      }

      /**
       * 撤销申请注销
       * /user/cancelCloseCount
       */
      export namespace cancelCloseCount {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 身份证实名认证
       * /user/card
       */
      export namespace cardCertification {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.CardCertificationDTO,
        ): Promise<Response>;
      }

      /**
       * 修改手机号
       * /user/changePhone
       */
      export namespace changePhone {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.UpdatePhoneDTO,
        ): Promise<Response>;
      }

      /**
       * 注销账号
       * /user/closeCount
       */
      export namespace closeCount {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 人脸识别身份证实名认证
       * /user/face
       */
      export namespace faceCertification {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.FaceCertificationDTO,
        ): Promise<Response>;
      }

      /**
       * App端获取人工审核状态
       * /user/getAppStatus
       */
      export namespace getAppStatus {
        export class Params {}

        export type Response = defs.mankeUser.ManualResultAppDTO;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 获取注销申请状态，4：已驳回，5：以撤回，1：待审核是，0是没有提交记录
       * /user/getCloseCountStatus
       */
      export namespace getCloseCountStatus {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 获取用户信息
       * /user/getUser
       */
      export namespace getUserDetail {
        export class Params {}

        export type Response = defs.mankeUser.UserDTO;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 人工识别身份证实名认证
       * /user/manual
       */
      export namespace manualCertification {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.ManualCertificationDTO,
        ): Promise<Response>;
      }

      /**
       * 获取实名认证验证码
       * /user/sendCerMessage
       */
      export namespace sendCertificationMessage {
        export class Params {
          /** phone */
          phone: string;
        }

        export type Response = boolean;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 设置收租音效
       * /user/setRentSound
       */
      export namespace setRentSound {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.RentSoundDTO,
        ): Promise<Response>;
      }

      /**
       * 解绑微信
       * /user/unbindWeChat
       */
      export namespace unbindWeChat {
        export class Params {}

        export type Response = boolean;

        export const init: Response;

        export function fetch(): Promise<Response>;
      }

      /**
       * 用户头像性别生日修改
       * /user/updateAvatarNick
       */
      export namespace updateAvatarNick {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.AvatarNickUpdateDTO,
        ): Promise<Response>;
      }

      /**
       * 用户昵称修改
       * /user/updateNickName
       */
      export namespace updateNickName {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.NickNameUpdateDTO,
        ): Promise<Response>;
      }

      /**
       * 根据手机号修改密码
       * /user/updatePasswordByPhone
       */
      export namespace updatePasswordByPhone {
        export class Params {}

        export type Response = boolean;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.UpdatePasswordByPhoneDTO,
        ): Promise<Response>;
      }

      /**
       * 修改是否禁止自己状态
       * /user/updateUnallowedState
       */
      export namespace updateUnallowedState {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.StateDTO,
        ): Promise<Response>;
      }

      /**
       * 更新现居住地
       * /user/updateUserLiving
       */
      export namespace updateUserLiving {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.UserLivingDTO,
        ): Promise<Response>;
      }
    }

    /**
     * 用户收货地址相关接口
     */
    export namespace userReceiver {
      /**
       * 添加收货地址
       * /receiver/add
       */
      export namespace addReceiver {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.ReceiverAddDTO,
        ): Promise<Response>;
      }

      /**
       * 删除收货地址
       * /receiver/delete
       */
      export namespace deleteReceiver {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.ReceiverDeleteDTO,
        ): Promise<Response>;
      }

      /**
       * 查询收货地址
       * /receiver/query
       */
      export namespace queryReceiver {
        export class Params {
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
        }

        export type Response = defs.mankeUser.PageRes<
          defs.mankeUser.ReceiverDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<Response>;
      }

      /**
       * 更新收货地址
       * /receiver/update
       */
      export namespace updateReceiver {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeUser.ReceiverUpdateDTO,
        ): Promise<Response>;
      }
    }
  }
}
