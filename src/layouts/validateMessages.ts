/* eslint-disable no-template-curly-in-string */
const typeTemplate = "'${label}' 不是一个合法的 ${type}";

export const validateMessages = {
  default: "'${label}' 校验失败",
  required: "'${label}' 是必填字段",
  enum: "'${label}' 必须是 [${enum}] 中的一个",
  whitespace: "'${label}' 不能为空",
  date: {
    format: "'${label}' 不能被日期格式化",
    parse: "'${label}' 不能解析成日期",
    invalid: "'${label}' 不是一个合法的日期",
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate,
  },
  string: {
    len: "'${label}' 必须是 ${len} 个字符",
    min: "'${label}' 最少是 ${min} 个字符",
    max: "'${label}' 不能超过 ${max} 个字符",
    range: "'${label}' 长度在 ${min} 和 ${max} 之间",
  },
  number: {
    len: "'${label}' 必须等于 ${len}",
    min: "'${label}' 不能小于 ${min}",
    max: "'${label}' 不能大于 ${max}",
    range: "'${label}' 必须在 ${min} 和 ${max} 之间",
  },
  array: {
    len: "'${label}' 数组长度必须等于 ${len}",
    min: "'${label}' 数组长度不能小于 ${min}",
    max: "'${label}' 数组长度不能大于 ${max}",
    range: "'${label}' 数组长度必须在 ${min} 和 ${max} 之间",
  },
  pattern: {
    mismatch: "'${label}' 不能匹配正则表达式 ${pattern}",
  },
};
