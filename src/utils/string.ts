type ValueType = any;

export default {
  /**
   * 为小于10的数字在前面补零。如9补零后为09
   * @param val
   */
  fillZero(val: number | string) {
    if (typeof val === 'number' && val >= 10) {
      return val;
    }
    return `0${val}`;
  },

  /**
   * 用于字符长度超过指定个数自动截取并添加...
   */
  textEllipsis(text: string, length: number) {
    if (text.length > length && length > 0) {
      return `${text.substring(0, length)}...`;
    }
    return text;
  },

  /**
   * 获取指定分隔符点后面的最后字符串
   * @param (sourceStr splitStr) 源字符串 裁剪字符节点
   * @returns {string} 最后一个裁剪字符后面的字符串
   */
  getLastSubstring(sourceStr = '', splitStr = '') {
    return sourceStr.substring(sourceStr.lastIndexOf(splitStr) + splitStr.length, sourceStr.length);
  },

  /**
   * 值格式化为string
   * @param value
   */
  valueToString(value: ValueType | ValueType[]) {
    if (typeof value === 'string') {
      return value;
    }
    return JSON.stringify(value);
  },

  /**
   * @功能描述: 复制文本
   * @参数: text 复制对象的内容
   * @返回值:
   */
  copyText(text: string) {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', text);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  },
  /**
   * 将在线图片地址转成base64
   * @param url
   * @param width
   * @param height
   */
  imgUrlToBase64(url: string, width: number, height: number) {
    let canvas: HTMLCanvasElement | null = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        canvas!.width = width;
        canvas!.height = height;
        ctx!.drawImage(img, 0, 0, width, height);

        const dataURL = canvas!.toDataURL('image/');
        canvas = null;
        resolve(dataURL);
      };
      img.onerror = error => {
        reject(error);
      };
      img.src = url;
    });
  },
};
