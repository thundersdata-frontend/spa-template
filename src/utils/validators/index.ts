import reg from '../regex/index';

/**
 * 手机号码校验
 * @param _rule
 * @param value
 * @param callback
 */
export const phoneValidator = (_: unknown, value: string, callback: (message?: string) => void) => {
  if (value && !reg.isPhone(value)) {
    callback('请输入有效的电话号码');
  } else {
    callback();
  }
};

/**
 * 第二次输入的密码和第一次的进行比较
 * @param firstPassword
 */
export const compareToFirstPassword = (firstPassword?: string) => (
  _: unknown,
  value: string,
  callback: (msg?: string) => void,
) => {
  if (value && value !== firstPassword) {
    callback('两次输入的密码不一致');
  } else {
    callback();
  }
};

/**
 * 密码校验
 * @param firstPassword
 */
export const checkPassword = (_: unknown, value: string, callback: (msg?: string) => void) => {
  if (value && (value.length < 8 || value.length > 20)) {
    callback('密码长度在8-20位');
  } else {
    callback();
  }
};

export default {
  phoneValidator,
  compareToFirstPassword,
  checkPassword,
};
