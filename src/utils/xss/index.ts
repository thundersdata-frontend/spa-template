/*
 * @文件描述: xss 方法
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-07-08 11:06:41
 * @LastEditors: 廖军
 * @LastEditTime: 2020-07-08 16:19:39
 */
import * as xss from 'xss';

/**
 * 允许出现的合法标签
 */
const tags = [
  'a',
  'abbr',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'br',
  'button',
  'canvas',
  'div',
  'dl',
  'dt',
  'em',
  'fieldset',
  'footer',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hr',
  'i',
  'img',
  'label',
  'li',
  'ol',
  'optgroup',
  'option',
  'p',
  'pre',
  'q',
  'rt',
  'small',
  'span',
  'strong',
  'sub',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'tr',
  'u',
  'ul',
  'video',
  'wbr',
];

/**
 * 允许出现的合法属性
 */
const attrs = [
  'id',
  'class',
  'style',
  'src',
  'href',
  'title',
  'target',
  'alt',
  'controls',
  'loop',
  'autoplay',
  'colspan',
  'rowspan',
];

// 生成白名单配置
const generateXssRules = () => {
  const whiteListConfig = {};
  tags.forEach(key => {
    whiteListConfig[key] = attrs;
  });
  return { whiteList: whiteListConfig };
};

const xssFilter = new xss.FilterXSS(generateXssRules());

export default xssFilter.process.bind(xssFilter);
