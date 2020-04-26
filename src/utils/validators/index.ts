import reg from '../regex/index';

export default {
  /**
   * 手机号码校验
   * @param _rule
   * @param value
   * @param callback
   */
  phoneValidator: (_: unknown, value: string, callback: (message?: string) => void) => {
    if (value && !reg.isPhone(value)) {
      callback('请输入有效的电话号码');
    } else {
      callback();
    }
  },

  /**
   * 第二次输入的密码和第一次的进行比较
   * @param firstPassword
   */
  compareToFirstPassword: (firstPassword?: string) => (_: unknown, value: string, callback: (msg?: string) => void) => {
    if (value && value !== firstPassword) {
      callback('两次输入的密码不一致');
    } else {
      callback();
    }
  },
};
