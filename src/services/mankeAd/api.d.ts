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
  export namespace mankeAd {
    export class AccountAllNumDTO {
      /** 广告总数 */
      adAllNum?: number;

      /** 自动下架 */
      adAutoOffNum?: number;

      /** 待审核 */
      adCheckingNum?: number;

      /** 未上架 */
      adFreshNum?: number;

      /** 已上架 */
      adOnNum?: number;

      /** 已驳回 */
      adRejectedNum?: number;

      /** 余额 */
      balance?: number;

      /** false：不足，true：余额充足 */
      enough?: boolean;
    }

    export class AccountBalanceDTO {
      /** 账户余额 */
      balance?: number;

      /** 当月账号消费 */
      monthAmount?: number;

      /** 当天账号消费 */
      todayAmount?: number;
    }

    export class AccountBanTypeDTO {
      /** 封禁类型，0：正常  1：广告封禁，禁用广告  2：广告主封禁，禁止登录，包括禁用广告  默认0 */
      banType?: number;

      /** id */
      id?: number;

      /** 封禁原因 */
      reason?: string;
    }

    export class AccountCompanyAddDTO {
      /** 详细地址 */
      address?: string;

      /** 申请id */
      applyId: number;

      /** 市 */
      city: string;

      /** 营业执照 */
      companyLicenseUrl: string;

      /** 公司名称 */
      companyName: string;

      /** 联系电话 */
      contactPhone: string;

      /** 区 */
      district: string;

      /** 个人身份证号/法人身份证号 */
      idCard: string;

      /** 身份证反面 */
      idCardBackUrl: string;

      /** 身份证正面 */
      idCardFrontUrl: string;

      /** 初始密码 */
      initPassword: string;

      /** 个人简介/公司简介 */
      introduction?: string;

      /** 超级管理员账号 */
      managerName: string;

      /** 个人姓名/法人姓名 */
      personName: string;

      /** 超级管理员手机 */
      phone: string;

      /** 省 */
      province: string;

      /** 联系人姓名 */
      submitName: string;

      /** 联系人手机 */
      submitPhone: string;

      /**  联系人职务 */
      submitPosition: string;

      /** 职务证明 */
      submitPositionUrl: string;
    }

    export class AccountCompanyDetailDTO {
      /** 封禁理由 */
      adType?: number;

      /** 详细地址 */
      address?: string;

      /** 申请时间 */
      applyAt?: string;

      /** 会员账号昵称 */
      applyNickName?: string;

      /** 会员账号手机号 */
      applyPhone?: string;

      /** 申请会员账号Id */
      applyUserId?: number;

      /** 封禁状态 */
      banType?: number;

      /** 市 */
      city?: string;

      /** 市名称 */
      cityName?: string;

      /** 营业执照 */
      companyLicenseUrl?: string;

      /** 公司名称 */
      companyName?: string;

      /** 联系电话 */
      contactPhone?: string;

      /** 开通时间 */
      createdAt?: string;

      /** 区 */
      district?: string;

      /** 区名称 */
      districtName?: string;

      /** 广告主Id */
      id?: number;

      /** 个人身份证号/法人身份证号 */
      idCard?: string;

      /** 身份证反面 */
      idCardBackUrl?: string;

      /** 身份证正面 */
      idCardFrontUrl?: string;

      /** 个人简介/公司简介 */
      introduction?: string;

      /** 超级管理员账号 */
      managerName?: string;

      /** 个人姓名/法人姓名 */
      personName?: string;

      /** 超级管理员手机 */
      phone?: string;

      /** 省 */
      province?: string;

      /** 省名称 */
      provinceName?: string;

      /** 封禁理由 */
      reason?: string;

      /** 联系人姓名 */
      submitName?: string;

      /** 联系人联系方式 */
      submitPhone?: string;

      /** 联系人职务 */
      submitPosition?: string;

      /** 联系人职务证明 */
      submitPositionUrl?: string;
    }

    export class AccountListDTO {
      /** 广告主名称 */
      accountName?: string;

      /** 广告数量 */
      adCount?: number;

      /** 会员账号昵称 */
      applyNickName?: string;

      /** 会员账号手机号 */
      applyPhone?: string;

      /** 申请会员账号Id */
      applyUserId?: number;

      /** 账户余额 */
      balance?: number;

      /** 封禁状态 */
      banType?: number;

      /** 联系电话 */
      contactPhone?: string;

      /** 开通时间 */
      createdAt?: string;

      /** id */
      id?: number;

      /** 超级管理员账号 */
      managerName?: string;

      /** 超级管理员手机 */
      phone?: string;

      /** 封禁理由 */
      reason?: string;

      /** 联系人姓名 */
      submitName?: string;

      /** 联系人手机号 */
      submitPhone?: string;

      /** 联系人职务 */
      submitPosition?: string;
    }

    export class AccountPersonAddDTO {
      /** 详细地址 */
      address?: string;

      /** 申请id */
      applyId: number;

      /** 市 */
      city: string;

      /** 联系电话 */
      contactPhone: string;

      /** 区 */
      district: string;

      /** 个人身份证号/法人身份证号 */
      idCard: string;

      /** 身份证反面 */
      idCardBackUrl: string;

      /** 身份证正面 */
      idCardFrontUrl: string;

      /** 初始密码 */
      initPassword: string;

      /** 个人简介/公司简介 */
      introduction?: string;

      /** 超级管理员账号 */
      managerName: string;

      /** 个人姓名/法人姓名 */
      personName: string;

      /** 超级管理员手机 */
      phone: string;

      /** 省 */
      province: string;
    }

    export class AccountPersonDetailDTO {
      /** 封禁理由 */
      adType?: number;

      /** 详细地址 */
      address?: string;

      /** 申请时间 */
      applyAt?: string;

      /** 会员账号昵称 */
      applyNickName?: string;

      /** 会员账号手机号 */
      applyPhone?: string;

      /** 申请会员账号Id */
      applyUserId?: number;

      /** 封禁状态 */
      banType?: number;

      /** 市 */
      city?: string;

      /** 市名称 */
      cityName?: string;

      /** 联系电话 */
      contactPhone?: string;

      /** 开通时间 */
      createdAt?: string;

      /** 区 */
      district?: string;

      /** 区名称 */
      districtName?: string;

      /** 广告主Id */
      id?: number;

      /** 个人身份证号/法人身份证号 */
      idCard?: string;

      /** 身份证反面 */
      idCardBackUrl?: string;

      /** 身份证正面 */
      idCardFrontUrl?: string;

      /** 个人简介/公司简介 */
      introduction?: string;

      /** 超级管理员账号 */
      managerName?: string;

      /** 个人姓名/法人姓名 */
      personName?: string;

      /** 超级管理员手机 */
      phone?: string;

      /** 省 */
      province?: string;

      /** 省名称 */
      provinceName?: string;

      /** 封禁理由 */
      reason?: string;
    }

    export class AdAllNumDTO {
      /** 广告主数量 */
      accountAllNum?: number;

      /** 广告主禁用 */
      accountBanNum?: number;

      /** 广告主今日新增 */
      accountTodayAddNum?: number;

      /** 广告总数 */
      adAllNum?: number;

      /** 上架中 */
      adOnNum?: number;

      /** 今日新增 */
      adTodayAddNum?: number;

      /** 广告主账户余额总额 */
      allAccountBalance?: number;

      /** 广告主已扣费总额 */
      allDeduction?: number;

      /** 广告主充值总额 */
      allRecharge?: number;
    }

    export class AdFreeAddDTO {
      /** 商品名称 */
      commodityName: string;

      /** 有效天数 */
      days: number;

      /** 价格 */
      price: number;
    }

    export class AdFreeDeleteDTO {
      /** 商品编号 */
      commodityCode: string;
    }

    export class AdFreeDetailDTO {
      /** 商品id */
      commodityCode?: string;

      /** 商品名称 */
      commodityName: string;

      /** 有效天数 */
      days: number;

      /** 价格 */
      price: number;

      /** 商品状态 */
      status?: number;
    }

    export class AdFreeOrderDetailDTO {
      /** 支付金额 */
      amount?: number;

      /** 商品名称 */
      commodityName?: string;

      /** 商品订单详情id */
      id?: number;

      /** 用户昵称 */
      nickName?: string;

      /** 订单编号 */
      orderCode?: string;

      /** 支付时间 */
      payAt?: string;

      /** 支付类型：1支付宝，2微信 */
      payType?: number;

      /** 用户手机号 */
      phone?: string;

      /** 用户姓名 */
      realName?: string;

      /** 用户id */
      userId?: number;
    }

    export class AdFreePayDTO {
      /** 购买商品编号 */
      commodityCode: string;

      /** 支付类型：1支付宝，2微信 */
      payType: number;
    }

    export class AdFreeStatusDTO {
      /** 商品编号 */
      commodityCode: string;

      /** 销售状态：默认1,1：已下架，0：已上架 */
      status: number;
    }

    export class AdFreeUpdateDTO {
      /** 商品编号 */
      commodityCode: string;

      /** 商品名称 */
      commodityName: string;

      /** 有效天数 */
      days: number;

      /** 价格 */
      price: number;
    }

    export class AdMemberInfoDTO {
      /** 广告主id */
      accountId?: number;

      /** 广告主名称 */
      accountName?: string;

      /** 购买一键收租总金额 */
      adFreeAmount?: number;

      /** 用户id */
      userId?: number;
    }

    export class AdOpLogListDTO {
      /** 广告主Id */
      accountId?: number;

      /** 广告主名称 */
      accountName?: string;

      /** 业务模块 */
      businessModule?: string;

      /** createdAt */
      createdAt?: string;

      /** 日志id */
      id?: number;

      /** loginIp */
      loginIp?: string;

      /** 用户id */
      managerId?: number;

      /** 用户名 */
      managerName?: string;

      /** 姓名 */
      nickName?: string;

      /** 操作资源 */
      opResources?: string;

      /** 操作类型 */
      opType?: string;

      /** 角色Id */
      roleId?: number;

      /** 角色名称 */
      roleName?: string;
    }

    export class AdOpStatisticsListDTO {
      /** 广告主名称 */
      accountName?: string;

      /** 投放广告名称 */
      adTitle?: string;

      /** 点击次数 */
      hrefCount?: number;

      /** 展示次数 */
      showCount?: number;
    }

    export class AdOpStatisticsQueryDTO {
      /** 年龄范围 */
      ageType?: number;

      /** 起始时间 */
      beginDate?: string;

      /** 城市Code列表 */
      cityList?: Array<string>;

      /** 时间类型：0：按日,1：按月 */
      currentTime?: number;

      /** 结束时间 */
      endDate?: string;

      /** limit */
      limit?: number;

      /** offset */
      offset?: number;

      /** page */
      page?: number;

      /** pageSize */
      pageSize?: number;

      /** 性别，0不限，1为男性，2为女性 */
      sex?: number;
    }

    export class AdPieStatisticsDTO {
      /** type */
      type?: string;

      /** 数量 */
      value?: number;
    }

    export class AdStatisticsDTO {
      /** 日期 */
      date?: string;

      /** 类别：0展示扣费，1点击扣费 */
      type?: string;

      /** 数量 */
      value?: number;
    }

    export class AdTitleDTO {
      /** 标题 */
      adTitle?: string;

      /** id */
      id?: number;
    }

    export class AdvertisingAddDTO {
      /** 广告链接 */
      adHref?: string;

      /** 广告url */
      adImgUrl?: string;

      /** 广告标题 */
      adTitle?: string;

      /** 目标年龄 */
      goalAgeList?: Array<number>;

      /** 投放城市列表 传空值表示不限 */
      goalCityList?: Array<string>;

      /** 目标性别 */
      goalSex?: number;
    }

    export class AdvertisingAppQueryDTO {
      /** 年龄 */
      age: number;

      /** 城市Code */
      city: string;

      /** 广告Id */
      id?: number;

      /** 性别，1为男性，2为女性 */
      sex: number;
    }

    export class AdvertisingDTO {
      /** 广告点击链接 */
      adHref?: string;

      /** 广告图片 */
      adImgUrl?: string;

      /** 广告标题 */
      adTitle?: string;

      /** 目标年龄名称 */
      ageRangeList?: Array<string>;

      /** 投放城市名称 */
      cityNameList?: Array<string>;

      /** 创建时间 */
      createdAt?: string;

      /** 目标年龄 */
      goalAgeList?: Array<number>;

      /** 投放城市 */
      goalCityList?: Array<string>;

      /** 目标性别 */
      goalSex?: number;

      /** 广告id */
      id?: number;

      /** 驳回原因 */
      reason?: string;

      /** 广告状态 0, "未上架" 1, "待审核" 2, "已上架" 3, "已驳回" 4, "已下架" 5, "自动下架" */
      state?: number;
    }

    export class AdvertisingOpDTO {
      /** accountName */
      accountName?: string;

      /** 广告点击链接 */
      adHref?: string;

      /** 广告图片 */
      adImgUrl?: string;

      /** 广告标题 */
      adTitle?: string;

      /** 目标年龄名称 */
      ageRangeList?: Array<string>;

      /** 投放城市名称 */
      cityNameList?: Array<string>;

      /** 创建时间 */
      createdAt?: string;

      /** 目标年龄 */
      goalAgeList?: Array<number>;

      /** 投放城市 */
      goalCityList?: Array<string>;

      /** 目标性别 */
      goalSex?: number;

      /** 广告id */
      id?: number;

      /** 驳回原因 */
      reason?: string;

      /** 广告状态 0, "未上架" 1, "待审核" 2, "已上架" 3, "已驳回" 4, "已下架" 5, "自动下架" */
      state?: number;
    }

    export class AdvertisingShowDTO {
      /** 广告链接 */
      adHref?: string;

      /** 广告图片链接 */
      adImgUrl?: string;

      /** 广告标题 */
      adTitle?: string;

      /** 广告Id */
      id?: number;
    }

    export class AdvertisingUpdateDTO {
      /** 广告点击链接 */
      adHref?: string;

      /** 广告图片 */
      adImgUrl?: string;

      /** 广告标题 */
      adTitle?: string;

      /** 目标年龄 */
      goalAgeList?: Array<number>;

      /** 投放城市 */
      goalCityList?: Array<string>;

      /** 目标性别 */
      goalSex?: number;

      /** 广告id */
      id?: number;
    }

    export class ApplyCompanyAddDTO {
      /** 详细地址 */
      address?: string;

      /** 市 */
      city: string;

      /** 营业执照 */
      companyLicenseUrl: string;

      /** 公司名称 */
      companyName: string;

      /** 联系电话 */
      contactPhone: string;

      /** 区 */
      district: string;

      /** 个人身份证号/法人身份证号 */
      idCard: string;

      /** 身份证反面 */
      idCardBackUrl: string;

      /** 身份证正面 */
      idCardFrontUrl: string;

      /** 个人简介/公司简介 */
      introduction?: string;

      /** 个人姓名/法人姓名 */
      personName: string;

      /** 省 */
      province: string;

      /** 提交人姓名 */
      submitName: string;

      /** 提交人联系方式 */
      submitPhone: string;

      /** 提交人职务 */
      submitPosition: string;

      /** 提交人职务证明 */
      submitPositionUrl: string;
    }

    export class ApplyCompanyDetailDTO {
      /** 详细地址 */
      address?: string;

      /** 会员账号昵称 */
      applyNickName?: string;

      /** 会员账号手机号 */
      applyPhone?: string;

      /** 申请会员账号Id */
      applyUserId?: number;

      /** 审批时间 */
      approveAt?: string;

      /** 审批用户姓名 */
      approveOpNickName?: string;

      /** 审批id */
      approveOpUserId?: number;

      /** 审批用户名 */
      approveOpUserName?: string;

      /** 0：申请中  1：已通过状态  2：已驳回状态，3是已开通账号 */
      approveStatus?: number;

      /** 市 */
      city?: string;

      /** 市名称 */
      cityName?: string;

      /** 营业执照 */
      companyLicenseUrl?: string;

      /** 公司名称 */
      companyName?: string;

      /** 联系电话 */
      contactPhone?: string;

      /** 申请时间 */
      createdAt?: string;

      /** 区 */
      district?: string;

      /** 区名称 */
      districtName?: string;

      /** 广告主申请Id */
      id?: number;

      /** 个人身份证号/法人身份证号 */
      idCard?: string;

      /** 身份证反面 */
      idCardBackUrl?: string;

      /** 身份证正面 */
      idCardFrontUrl?: string;

      /** 个人简介/公司简介 */
      introduction?: string;

      /** 个人姓名/法人姓名 */
      personName?: string;

      /** 省 */
      province?: string;

      /** 省名称 */
      provinceName?: string;

      /** 驳回原因 */
      reason?: string;

      /** 提交人姓名 */
      submitName?: string;

      /** 提交人联系方式 */
      submitPhone?: string;

      /** 提交人职务 */
      submitPosition?: string;

      /** 提交人职务证明 */
      submitPositionUrl?: string;
    }

    export class ApplyListDTO {
      /** 会员账号昵称 */
      applyNickName?: string;

      /** 会员账号手机号 */
      applyPhone?: string;

      /** 申请会员账号Id */
      applyUserId?: number;

      /** 申请状态 */
      approveStatus?: number;

      /** 公司名称 */
      companyName?: string;

      /** 联系电话 */
      contactPhone?: string;

      /** 申请时间 */
      createdAt?: string;

      /** id */
      id?: number;

      /** 个人姓名/手机号 */
      personName?: string;

      /** 驳回理由 */
      reason?: string;

      /** 备注 */
      remark?: string;

      /** 提交人姓名 */
      submitName?: string;

      /** 提交人联系方式 */
      submitPhone?: string;

      /** 提交人职务 */
      submitPosition?: string;
    }

    export class ApplyPersonAddDTO {
      /** 详细地址 */
      address?: string;

      /** 市 */
      city: string;

      /** 联系电话 */
      contactPhone: string;

      /** 区 */
      district: string;

      /** 个人身份证号/法人身份证号 */
      idCard: string;

      /** 身份证反面 */
      idCardBackUrl: string;

      /** 身份证正面 */
      idCardFrontUrl: string;

      /** 个人简介/公司简介 */
      introduction?: string;

      /** 个人姓名/法人姓名 */
      personName: string;

      /** 省 */
      province: string;
    }

    export class ApplyPersonDetailDTO {
      /** 详细地址 */
      address?: string;

      /** 会员账号昵称 */
      applyNickName?: string;

      /** 会员账号手机号 */
      applyPhone?: string;

      /** 申请会员账号Id */
      applyUserId?: number;

      /** 审批时间 */
      approveAt?: string;

      /** 审批用户姓名 */
      approveOpNickName?: string;

      /** 审批id */
      approveOpUserId?: number;

      /** 审批用户名 */
      approveOpUserName?: string;

      /** 0：申请中  1：已通过状态  2：已驳回状态，3是已开通账号 */
      approveStatus?: number;

      /** 市 */
      city?: string;

      /** 市名称 */
      cityName?: string;

      /** 联系电话 */
      contactPhone?: string;

      /** 申请时间 */
      createdAt?: string;

      /** 区 */
      district?: string;

      /** 区名称 */
      districtName?: string;

      /** 广告主申请Id */
      id?: number;

      /** 个人身份证号/法人身份证号 */
      idCard?: string;

      /** 身份证反面 */
      idCardBackUrl?: string;

      /** 身份证正面 */
      idCardFrontUrl?: string;

      /** 个人简介/公司简介 */
      introduction?: string;

      /** 个人姓名/法人姓名 */
      personName?: string;

      /** 省 */
      province?: string;

      /** 省名称 */
      provinceName?: string;

      /** 驳回原因 */
      reason?: string;
    }

    export class ApplyRemarkDTO {
      /** id */
      id?: number;

      /** 备注 */
      remark?: string;
    }

    export class ApplyReturnDTO {
      /** 申请状态 */
      approveStatus?: number;

      /** 密码 */
      initPassword?: string;

      /** 用户名 */
      managerName?: string;

      /** 驳回理由 */
      reason?: string;

      /** 登录网址 */
      url?: string;
    }

    export class ApplyStatusDTO {
      /** 状态 */
      approveStatus?: number;

      /** id */
      id?: number;

      /** 驳回原因 */
      reason?: string;
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

    export class AreaAdNumDTO {
      /** cityAdMap */
      cityAdMap?: ObjectMap<any, number>;

      /** districtAdMap */
      districtAdMap?: ObjectMap<any, number>;
    }

    export class AreaAdQueryDTO {
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

    export class CommonOrderPaymentInfo {
      /** body */
      body?: string;

      /** orderPayType */
      orderPayType?: number;

      /** outTradeNo */
      outTradeNo?: string;

      /** paymentType */
      paymentType?: number;

      /** redirectUrl */
      redirectUrl?: string;

      /** status */
      status?: number;

      /** statusCN */
      statusCN?: string;
    }

    export class DeductionListDTO {
      /** 广告主 */
      accountName?: string;

      /** 广告 */
      adName?: string;

      /** 年龄 */
      age?: number;

      /** 展示城市 */
      city?: string;

      /** 扣费id */
      id?: string;

      /** 会员昵称 */
      nickName?: string;

      /** 会员手机号 */
      phone?: string;

      /** 性别 */
      sex?: number;

      /** 扣费时间 */
      time?: string;

      /** 扣费类型 */
      type?: number;

      /** 扣费金额 */
      value?: number;
    }

    export class DisableEnable {
      /** 0正常，1禁用 */
      banType?: number;

      /** 用户id */
      userId?: number;
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

    export class ManagerAddDTO {
      /** 初始密码 */
      initPassword: string;

      /** 用户名 */
      managerName: string;

      /** 姓名 */
      name: string;

      /** 手机号 */
      phone: string;

      /** 角色 */
      roleId: number;

      /** 性别 男1 女2 */
      sex: number;
    }

    export class ManagerInfoDetailDTO {
      /** 账户Id */
      accountId?: number;

      /** 广告主名称 */
      accountName?: string;

      /** 0：个人广告主  1：企业广告主 */
      adType?: number;

      /** 详细地址 */
      address?: string;

      /** 状态 */
      banType?: number;

      /** 市 */
      city?: string;

      /** 公司名称 */
      companyName?: string;

      /** 广告主联系方式 */
      contactPhone?: string;

      /** 开通时间 */
      createdAt?: string;

      /** 个人简介 */
      introduction?: string;

      /** 用户名 */
      managerName?: string;

      /** 姓名 */
      nickName?: string;

      /** 手机号 */
      phone?: string;

      /** 省 */
      province?: string;

      /** 角色id */
      roleId?: number;

      /** 角色 */
      roleName?: string;
    }

    export class ManagerListDTO {
      /** 封禁 */
      banType?: number;

      /** 最近登录时间 */
      createdAt?: string;

      /** 管理员id */
      managerId?: number;

      /** 用户名 */
      managerName?: string;

      /** 姓名 */
      nickName?: string;

      /** 手机号 */
      phone?: string;

      /** 角色id */
      roleId?: number;

      /** 角色名称 */
      roleName?: string;

      /** 性别 */
      sex?: number;
    }

    export class ManagerLogDTO {
      /** 业务模块 */
      businessModule?: string;

      /** 操作时间 */
      createdAt?: string;

      /** ip地址 */
      loginIp?: string;

      /** 操作内容 */
      opContent?: string;

      /** 角色 */
      role?: string;

      /** 角色id */
      roleId?: number;

      /** 管理员用户名/姓名 */
      userInfo?: string;
    }

    export class ManagerLoginDTO {
      /** 验证码 */
      code?: string;

      /** 密码 */
      password?: string;

      /** 手机号 */
      phone?: string;

      /** 用户名 */
      username?: string;
    }

    export class ManagerUpdateDTO {
      /** 管理员ID */
      managerId?: number;

      /** 用户名 */
      managerName: string;

      /** 姓名 */
      name: string;

      /** 手机号 */
      phone: string;

      /** 角色 */
      roleId: number;

      /** 性别 */
      sex: number;
    }

    export class MessageListDTO {
      /** 内容 */
      content?: string;

      /** 发送时间 */
      createdAt?: string;

      /** 消息Id */
      id?: string;

      /** 是否已读，0是为读，1是已读 */
      isRead?: number;

      /** 标题 */
      title?: string;
    }

    export class MessageReadDTO {
      /** 消息Id */
      id?: number;
    }

    export class OrderCallbackDTO {
      /** 订单号 */
      orderCode?: string;

      /** 订单状态 */
      orderStatus?: number;

      /** 交易号 */
      outTradeNo?: string;

      /** 支付状态 */
      payStatus?: number;
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

    export class PredictionAddDTO {
      /** 预测基数 */
      baseNum: number;

      /** 人物形象名称 */
      imgUrl: string;

      /** 人物形象名称 */
      name: string;

      /** 预测年限 */
      years: number;
    }

    export class PredictionDeleteDTO {
      /** 预测id */
      id: number;
    }

    export class PredictionDetailDTO {
      /** 预测基数 */
      baseNum: number;

      /** 预测id */
      id: number;

      /** 人物形象名称 */
      imgUrl: string;

      /** 人物形象名称 */
      name: string;

      /** 预测年限 */
      years: number;
    }

    export class PredictionUpdateDTO {
      /** 预测基数 */
      baseNum: number;

      /** 预测id */
      id: number;

      /** 人物形象名称 */
      imgUrl: string;

      /** 人物形象名称 */
      name: string;

      /** 预测年限 */
      years: number;
    }

    export class RechargeAccountListDTO {
      /** 支付金额 */
      amount?: number;

      /** 充值时间 */
      createdAt?: string;

      /** 充值Id */
      id?: number;

      /** 支付类型 */
      payType?: number;
    }

    export class RechargeOpListDTO {
      /** 广告主名称 */
      accountName?: string;

      /** 支付金额 */
      amount?: number;

      /** 充值时间 */
      createdAt?: string;

      /** 充值Id */
      id?: number;

      /** 支付类型 */
      payType?: number;
    }

    export class RechargePayDTO {
      /** 支付金额 */
      amount?: number;

      /** 支付类型：1支付宝，2微信 */
      payType?: number;
    }

    export class SendSmsDTO {
      /** 手机号 */
      phone: string;

      /** 发送短信类型 */
      type: number;
    }

    export class UserResetPassword {
      /** 验证码 */
      code?: string;

      /** 新密码 */
      newPassword?: string;

      /** 手机号 */
      phone?: string;
    }
  }
}

declare namespace API {
  export namespace mankeAd {
    /**
     * 广告主账号相关接口
     */
    export namespace adAccount {
      /**
       * 查询区域广告主数量
       * /adAccount/getAreaAdNum
       */
      export namespace getAreaAdNum {
        export class Params {
          /** cityList */
          cityList: Array<string>;
          /** districtList */
          districtList: Array<string>;
        }

        export type Response = defs.mankeAd.AreaAdNumDTO;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 查询企业广告主详情
       * /adAccount/getCompanyDetail
       */
      export namespace getCompanyDetail {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.mankeAd.AccountCompanyDetailDTO;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 查询个人广告主详情
       * /adAccount/getPersonDetail
       */
      export namespace getPersonDetail {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.mankeAd.AccountPersonDetailDTO;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 开通企业广告主账号
       * /adAccount/openCompanyAccount
       */
      export namespace openCompanyAccount {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.AccountCompanyAddDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 开通个人广告主账号
       * /adAccount/openPersonAccount
       */
      export namespace openPersonAccount {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.AccountPersonAddDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 查询区域广告主
       * /adAccount/queryAreaAd
       */
      export namespace queryAreaAd {
        export class Params {}

        export type Response = defs.mankeAd.PageRes<defs.mankeAd.AreaAdListDTO>;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.AreaAdQueryDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 企业广告主账号列表查询
       * /adAccount/queryCompanyList
       */
      export namespace queryCompanyList {
        export class Params {
          /** 广告主 */
          accountName?: string;
          /** 申请会员账号Id */
          applyUserId?: number;
          /** 状态 */
          banType?: number;
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
        }

        export type Response = defs.mankeAd.PageRes<
          defs.mankeAd.AccountListDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 个人广告主账号列表查询
       * /adAccount/queryPersonList
       */
      export namespace queryPersonList {
        export class Params {
          /** 广告主 */
          accountName?: string;
          /** 申请会员账号Id */
          applyUserId?: number;
          /** 状态 */
          banType?: number;
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
        }

        export type Response = defs.mankeAd.PageRes<
          defs.mankeAd.AccountListDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 更新公司广告主禁用状态
       * /adAccount/updateCompanyBanType
       */
      export namespace updateCompanyBanType {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.AccountBanTypeDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 更新个人广告主禁用状态
       * /adAccount/updatePersonBanType
       */
      export namespace updatePersonBanType {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.AccountBanTypeDTO,
        ): Promise<AjaxResponse<Response>>;
      }
    }

    /**
     * 广告主申请相关接口
     */
    export namespace adApply {
      /**
       * 添加公司广告主申请
       * /adApply/addAdApplyCompany
       */
      export namespace addAdApplyCompany {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.ApplyCompanyAddDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 添加个人申请广告主
       * /adApply/addAdApplyPerson
       */
      export namespace addAdApplyPerson {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.ApplyPersonAddDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 查看App用户申请信息
       * /adApply/getApplyMessage
       */
      export namespace getApplyMessage {
        export class Params {}

        export type Response = defs.mankeAd.ApplyReturnDTO;

        export const init: Response;

        export function fetch(): Promise<AjaxResponse<Response>>;
      }

      /**
       * 获取企业申请广告主申请详情
       * /adApply/getCompanyDetail
       */
      export namespace getCompanyDetail {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.mankeAd.ApplyCompanyDetailDTO;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 获取个人广告主申请详情
       * /adApply/getPersonDetail
       */
      export namespace getPersonDetail {
        export class Params {
          /** id */
          id: number;
        }

        export type Response = defs.mankeAd.ApplyPersonDetailDTO;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 查询公司广告主申请列表
       * /adApply/queryCompanyList
       */
      export namespace queryCompanyList {
        export class Params {
          /** 申请会员账号Id */
          applyUserId?: number;
          /** 申请状态 */
          approveStatus?: number;
          /** 申请企业姓名 */
          companyName?: string;
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 个人姓名/手机号 */
          personName?: string;
        }

        export type Response = defs.mankeAd.PageRes<defs.mankeAd.ApplyListDTO>;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 查询个人广告主申请列表
       * /adApply/queryPersonList
       */
      export namespace queryPersonList {
        export class Params {
          /** 申请会员账号Id */
          applyUserId?: number;
          /** 申请状态 */
          approveStatus?: number;
          /** 申请企业姓名 */
          companyName?: string;
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 个人姓名/手机号 */
          personName?: string;
        }

        export type Response = defs.mankeAd.PageRes<defs.mankeAd.ApplyListDTO>;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 更新公司审核状态
       * /adApply/updateCompanyApproveStatus
       */
      export namespace updateCompanyApproveStatus {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.ApplyStatusDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 更新公司广告主申请备注
       * /adApply/updateCompanyRemark
       */
      export namespace updateCompanyRemark {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.ApplyRemarkDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 更新个人审核状态
       * /adApply/updatePersonApproveStatus
       */
      export namespace updatePersonApproveStatus {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.ApplyStatusDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 更新个人广告主申请备注
       * /adApply/updatePersonRemark
       */
      export namespace updatePersonRemark {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.ApplyRemarkDTO,
        ): Promise<AjaxResponse<Response>>;
      }
    }

    /**
     * 扣费查询相关接口
     */
    export namespace adDeduction {
      /**
       * 查询广告扣费记录
       * /tx/queryList
       */
      export namespace queryList {
        export class Params {
          /** 广告主名 */
          accountName?: string;
          /** 结束时间 */
          end?: string;
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 开始时间 */
          start?: string;
          /** 扣费类型 */
          type?: number;
        }

        export type Response = defs.mankeAd.PageRes<
          defs.mankeAd.DeductionListDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 运营商查询广告扣费记录
       * /tx/queryOpList
       */
      export namespace queryOpList {
        export class Params {
          /** 广告主名 */
          accountName?: string;
          /** 结束时间 */
          end?: string;
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 开始时间 */
          start?: string;
          /** 扣费类型 */
          type?: number;
        }

        export type Response = defs.mankeAd.PageRes<
          defs.mankeAd.DeductionListDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }
    }

    /**
     * 一键收租免点广告商品相关接口
     */
    export namespace adFree {
      /**
       * 添加商品信息
       * /adFree/add
       */
      export namespace add {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.AdFreeAddDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 删除商品信息
       * /adFree/delete
       */
      export namespace remove {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.AdFreeDeleteDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 获取app商品列表
       * /adFree/getAppList
       */
      export namespace getAppList {
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

        export type Response = defs.mankeAd.PageRes<
          defs.mankeAd.AdFreeDetailDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 查询商品信息
       * /adFree/queryList
       */
      export namespace queryList {
        export class Params {
          /** 商品名称 */
          commodityName?: string;
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 商品状态 */
          status?: number;
        }

        export type Response = defs.mankeAd.PageRes<
          defs.mankeAd.AdFreeDetailDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 更新商品信息
       * /adFree/update
       */
      export namespace update {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.AdFreeUpdateDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 更新商品状态
       * /adFree/updateStatus
       */
      export namespace updateStatus {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.AdFreeStatusDTO,
        ): Promise<AjaxResponse<Response>>;
      }
    }

    /**
     * 一键收租订单管理相关接口
     */
    export namespace adFreeOrder {
      /**
       * 创建一键收租免广告支付订单
       * /adFreeOrder/buyAdFree
       */
      export namespace buyAdFree {
        export class Params {}

        export type Response = defs.mankeAd.CommonOrderPaymentInfo;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.AdFreePayDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 一键收租免广告支付订单回调接口
       * /adFreeOrder/payConfirm
       */
      export namespace payConfirm {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.OrderCallbackDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 查询订单记录
       * /adFreeOrder/queryList
       */
      export namespace queryList {
        export class Params {
          /** 商品名称 */
          commodityName?: string;
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** 商品订单编号 */
          orderCode?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 支付时间结束 */
          payAtEnd?: string;
          /** 支付时间开始 */
          payAtStart?: string;
          /** 会员手机号/会员姓名 */
          userId?: number;
        }

        export type Response = defs.mankeAd.PageRes<
          defs.mankeAd.AdFreeOrderDetailDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }
    }

    /**
     * 广告日志模块相关接口
     */
    export namespace adLog {
      /**
       * 查询管理员日志信息
       * /adLog/managerLogInfo
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
          /** 管理员用户名/姓名/手机号 */
          userInfo?: string;
        }

        export type Response = defs.mankeAd.PageRes<defs.mankeAd.ManagerLogDTO>;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 运营商查询广告日志信息
       * /adLog/queryOpAdList
       */
      export namespace queryOpAdList {
        export class Params {
          /** 广告主名称 */
          accountName?: string;
          /** 业务模块 */
          businessModule?: string;
          /** limit */
          limit?: number;
          /** ip地址 */
          loginIp?: string;
          /** 用户名/姓名/手机号 */
          managerName?: string;
          /** offset */
          offset?: number;
          /** 操作起始时间 */
          opAtBegin?: string;
          /** 操作结束时间 */
          opAtEnd?: string;
          /** 操作内容 */
          opContent?: string;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
        }

        export type Response = defs.mankeAd.PageRes<
          defs.mankeAd.AdOpLogListDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }
    }

    /**
     * 运营端用户模块相关接口
     */
    export namespace adMember {
      /**
       * 运营商端获取用户模块信息
       * /adMember/getAdMemberInfo
       */
      export namespace getAdMemberInfo {
        export class Params {
          /** userId */
          userId: number;
        }

        export type Response = defs.mankeAd.AdMemberInfoDTO;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }
    }

    /**
     * 神仙预测相关设置相关接口
     */
    export namespace adPrediction {
      /**
       * 添加预测信息
       * /adPrediction/add
       */
      export namespace add {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.PredictionAddDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 删除预测信息
       * /adPrediction/delete
       */
      export namespace remove {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.PredictionDeleteDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * app用户随机获取预测信息
       * /adPrediction/getAppPrediction
       */
      export namespace getAppPrediction {
        export class Params {}

        export type Response = defs.mankeAd.PredictionDetailDTO;

        export const init: Response;

        export function fetch(): Promise<AjaxResponse<Response>>;
      }

      /**
       * 查询列表信息
       * /adPrediction/list
       */
      export namespace list {
        export class Params {
          /** limit */
          limit?: number;
          /** 预测id名称 */
          name?: string;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
        }

        export type Response = defs.mankeAd.PageRes<
          defs.mankeAd.PredictionDetailDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 更新预测信息
       * /adPrediction/update
       */
      export namespace update {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.PredictionUpdateDTO,
        ): Promise<AjaxResponse<Response>>;
      }
    }

    /**
     * 广告投放模块相关接口
     */
    export namespace adPutDeduction {
      /**
       * 点击扣费
       * /put/clickHref
       */
      export namespace clickHref {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.AdvertisingAppQueryDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 获取广告信息，展示扣费
       * /put/getAdvertising
       */
      export namespace getAdvertising {
        export class Params {}

        export type Response = defs.mankeAd.AdvertisingShowDTO;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.AdvertisingAppQueryDTO,
        ): Promise<AjaxResponse<Response>>;
      }
    }

    /**
     * 广告主充值模块相关接口
     */
    export namespace adRecharge {
      /**
       * 获取广告主余额
       * /adRecharge/getAccountBalance
       */
      export namespace getAccountBalance {
        export class Params {}

        export type Response = defs.mankeAd.AccountBalanceDTO;

        export const init: Response;

        export function fetch(): Promise<AjaxResponse<Response>>;
      }

      /**
       * 广告主查询充值记录
       * /adRecharge/queryAccountList
       */
      export namespace queryAccountList {
        export class Params {
          /** 结束日期 */
          endDate?: string;
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 支付类型：1支付宝，2微信 */
          payType?: number;
          /** 开始日期 */
          startDate?: string;
        }

        export type Response = defs.mankeAd.PageRes<
          defs.mankeAd.RechargeAccountListDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 运营商查询充值记录
       * /adRecharge/queryOpList
       */
      export namespace queryOpList {
        export class Params {
          /** 广告主 */
          accountName?: string;
          /** 结束日期 */
          endDate?: string;
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 支付类型：1支付宝，2微信 */
          payType?: number;
          /** 开始日期 */
          startDate?: string;
        }

        export type Response = defs.mankeAd.PageRes<
          defs.mankeAd.RechargeOpListDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 广告主充值
       * /adRecharge/recharge
       */
      export namespace recharge {
        export class Params {}

        export type Response = defs.mankeAd.CommonOrderPaymentInfo;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.RechargePayDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 充值回调接口
       * /adRecharge/rechargeConfirm
       */
      export namespace rechargeConfirm {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.OrderCallbackDTO,
        ): Promise<AjaxResponse<Response>>;
      }
    }

    /**
     * 广告统计模块相关接口
     */
    export namespace adStatistics {
      /**
       * 广告主广告信息
       * /adStatistics/getAdAllNum
       */
      export namespace getAdAllNum {
        export class Params {}

        export type Response = defs.mankeAd.AccountAllNumDTO;

        export const init: Response;

        export function fetch(): Promise<AjaxResponse<Response>>;
      }

      /**
       * 获取广告主的所有广告标题
       * /adStatistics/getAdTitle
       */
      export namespace getAdTitle {
        export class Params {}

        export type Response = Array<defs.mankeAd.AdTitleDTO>;

        export const init: Response;

        export function fetch(): Promise<AjaxResponse<Response>>;
      }

      /**
       * 获取运营商广告信息
       * /adStatistics/getAllNum
       */
      export namespace getAllNum {
        export class Params {}

        export type Response = defs.mankeAd.AdAllNumDTO;

        export const init: Response;

        export function fetch(): Promise<AjaxResponse<Response>>;
      }

      /**
       * 广告主查询点击饼状图图数据
       * /adStatistics/queryAdHrefPieStatisticsDTO
       */
      export namespace queryAdHrefPieStatisticsDTO {
        export class Params {
          /** 广告Id */
          advertisingId?: number;
          /** 起始时间 */
          beginDate?: string;
          /** 结束时间 */
          endDate?: string;
          /** 0:年龄，1：性别，2：城市 */
          keyType?: number;
        }

        export type Response = Array<defs.mankeAd.AdPieStatisticsDTO>;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 广告主查询点击表图数据
       * /adStatistics/queryAdHrefStatisticsDTO
       */
      export namespace queryAdHrefStatisticsDTO {
        export class Params {
          /** 广告Id */
          advertisingId?: number;
          /** 起始时间 */
          beginDate?: string;
          /** 时间类型：0：按日,1：按月 */
          currentTime?: number;
          /** 结束时间 */
          endDate?: string;
        }

        export type Response = Array<defs.mankeAd.AdStatisticsDTO>;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 运营商广告统计图标数据
       * /adStatistics/queryAdOpStatisticsDTO
       */
      export namespace queryAdOpStatisticsDTO {
        export class Params {}

        export type Response = Array<defs.mankeAd.AdStatisticsDTO>;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.AdOpStatisticsQueryDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 广告主查询展示饼状图图数据
       * /adStatistics/queryAdShowPieStatisticsDTO
       */
      export namespace queryAdShowPieStatisticsDTO {
        export class Params {
          /** 广告Id */
          advertisingId?: number;
          /** 起始时间 */
          beginDate?: string;
          /** 结束时间 */
          endDate?: string;
          /** 0:年龄，1：性别，2：城市 */
          keyType?: number;
        }

        export type Response = Array<defs.mankeAd.AdPieStatisticsDTO>;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 广告主查询展示表图数据
       * /adStatistics/queryAdShowStatisticsDTO
       */
      export namespace queryAdShowStatisticsDTO {
        export class Params {
          /** 广告Id */
          advertisingId?: number;
          /** 起始时间 */
          beginDate?: string;
          /** 时间类型：0：按日,1：按月 */
          currentTime?: number;
          /** 结束时间 */
          endDate?: string;
        }

        export type Response = Array<defs.mankeAd.AdStatisticsDTO>;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 运营商广告统计列表数据
       * /adStatistics/queryListAdOpStatisticsDTO
       */
      export namespace queryListAdOpStatisticsDTO {
        export class Params {}

        export type Response = defs.mankeAd.PageRes<
          defs.mankeAd.AdOpStatisticsListDTO
        >;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.AdOpStatisticsQueryDTO,
        ): Promise<AjaxResponse<Response>>;
      }
    }

    /**
     * 广告管理相关接口
     */
    export namespace advertising {
      /**
       * 商家添加广告
       * /ad/add
       */
      export namespace addAd {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.AdvertisingAddDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 删除广告
       * /ad/deleteAd
       */
      export namespace deleteAd {
        export class Params {
          /** adId */
          adId?: number;
        }

        export type Response = any;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 商家-模糊分页查询广告
       * /ad/listAd
       */
      export namespace list {
        export class Params {
          /** 广告标题 */
          adTitle?: string;
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 广告状态 */
          state?: number;
        }

        export type Response = defs.mankeAd.PageRes<
          defs.mankeAd.AdvertisingDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 运营平台-模糊分页查询广告
       * /ad/listOpAd
       */
      export namespace getListOpAd {
        export class Params {
          /** 广告主名 */
          accountName?: string;
          /** 广告标题 */
          adTitle?: string;
          /** limit */
          limit?: number;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 广告状态 */
          state?: number;
        }

        export type Response = defs.mankeAd.PageRes<
          defs.mankeAd.AdvertisingOpDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 广告下架
       * /ad/offline
       */
      export namespace offline {
        export class Params {
          /** adId */
          adId: number;
        }

        export type Response = any;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 广告上架
       * /ad/online
       */
      export namespace online {
        export class Params {
          /** adId */
          adId: number;
        }

        export type Response = any;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 审核通过广告
       * /ad/passAd
       */
      export namespace passAd {
        export class Params {
          /** adId */
          adId?: number;
        }

        export type Response = any;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 商家查询广告详情
       * /ad/queryAdDetail
       */
      export namespace queryAdDetail {
        export class Params {
          /** adId */
          adId?: number;
        }

        export type Response = defs.mankeAd.AdvertisingDTO;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 运营平台查询广告详情
       * /ad/queryOpAdDetail
       */
      export namespace queryOpAdDetail {
        export class Params {
          /** adId */
          adId?: number;
        }

        export type Response = defs.mankeAd.AdvertisingOpDTO;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 驳回广告
       * /ad/reject
       */
      export namespace reject {
        export class Params {
          /** adId */
          adId: number;
          /** reason */
          reason: string;
        }

        export type Response = any;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 更新广告信息
       * /ad/update
       */
      export namespace updateAd {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.AdvertisingUpdateDTO,
        ): Promise<AjaxResponse<Response>>;
      }
    }

    /**
     * 管理员用户管理相关接口
     */
    export namespace manager {
      /**
       * 新增管理员
       * /manager/add
       */
      export namespace addManager {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.ManagerAddDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 删除管理员
       * /manager/delete
       */
      export namespace remove {
        export class Params {
          /** userId */
          userId: number;
        }

        export type Response = number;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 当前管理员详细信息
       * /manager/detail
       */
      export namespace detail {
        export class Params {}

        export type Response = defs.mankeAd.ManagerInfoDetailDTO;

        export const init: Response;

        export function fetch(): Promise<AjaxResponse<Response>>;
      }

      /**
       * 启用禁用管理员
       * /manager/disable
       */
      export namespace disable {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.DisableEnable,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 分页获取管理员信息
       * /manager/listInfo
       */
      export namespace page {
        export class Params {
          /** 封禁类型 */
          banType?: number;
          /** limit */
          limit?: number;
          /** 用户名 */
          managerName?: string;
          /** 姓名 */
          name?: string;
          /** offset */
          offset?: number;
          /** page */
          page?: number;
          /** pageSize */
          pageSize?: number;
          /** 手机号 */
          phone?: string;
          /** 角色id */
          roleId?: string;
        }

        export type Response = defs.mankeAd.PageRes<
          defs.mankeAd.ManagerListDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 管理员用户名密码登录
       * /manager/passwordLogin
       */
      export namespace passwordLogin {
        export class Params {}

        export type Response = defs.mankeAd.LoginAccessToken;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.ManagerLoginDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 管理员短信登录
       * /manager/smsLogin
       */
      export namespace smsLogin {
        export class Params {}

        export type Response = defs.mankeAd.LoginAccessToken;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.ManagerLoginDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 编辑管理员
       * /manager/update
       */
      export namespace updateManager {
        export class Params {}

        export type Response = any;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.ManagerUpdateDTO,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 修改密码
       * /manager/updatePassword
       */
      export namespace updatePassword {
        export class Params {}

        export type Response = boolean;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.UserResetPassword,
        ): Promise<AjaxResponse<Response>>;
      }

      /**
       * 获取验证码
       * /manager/verifyCode
       */
      export namespace send {
        export class Params {}

        export type Response = string;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.SendSmsDTO,
        ): Promise<AjaxResponse<Response>>;
      }
    }

    /**
     * 消息相关接口
     */
    export namespace message {
      /**
       * 查看消息列表
       * /message/getMessageList
       */
      export namespace getMessageList {
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

        export type Response = defs.mankeAd.PageRes<
          defs.mankeAd.MessageListDTO
        >;

        export const init: Response;

        export function fetch(params: Params): Promise<AjaxResponse<Response>>;
      }

      /**
       * 获取未读消息数量
       * /message/getNotReadNum
       */
      export namespace getNotReadNum {
        export class Params {}

        export type Response = number;

        export const init: Response;

        export function fetch(): Promise<AjaxResponse<Response>>;
      }

      /**
       * 读取消息
       * /message/readMessage
       */
      export namespace readMessage {
        export class Params {}

        export type Response = boolean;

        export const init: Response;

        export function fetch(
          bodyParams: defs.mankeAd.MessageReadDTO,
        ): Promise<AjaxResponse<Response>>;
      }
    }
  }
}
