export default {
  /**
   * 检验是否是手机号
   */
  isPhone(value: string) {
    const reg = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|19[0-9]|14[57])[0-9]{8}$/;
    return reg.test(value);
  },

  /**
   * 检验是否是座机
   */
  isTelephone(value: string) {
    const reg = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
    return reg.test(value);
  },

  /**
   * 检验是否是邮箱
   */
  isEmail(value: string) {
    const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    return reg.test(value);
  },

  /**
   * 检验是否是数字
   */
  isNumber(value: string) {
    const reg = /(^([0-9]{1,})(.[0-9]+)?)$/;
    return reg.test(value);
  },

  /* 校验是否包含数字 */
  containNumbers(param: string) {
    const reg = /\d/;
    return reg.test(param);
  },
};
