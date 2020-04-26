/*
 * @文件描述: 定义生成代码的模板
 * @公司: thundersdata
 * @作者: 黄姗姗
 * @Date: 2019-10-28 16:29:26
 * @LastEditors: 黄姗姗
 * @LastEditTime: 2020-04-24 11:55:06
 */
import { CodeGenerator, Interface, Property } from 'pont-engine';

export default class MyGenerator extends CodeGenerator {
  enum: Array<string | number> = [];
  setEnum(enums: Array<string | number> = []) {
    this.enum = enums.map(value => {
      if (typeof value === 'string') {
        if (!value.startsWith("'")) {
          value = "'" + value;
        }

        if (!value.endsWith("'")) {
          value = value + "'";
        }
      }

      return value;
    });
  }

  /** 获取总的类型定义代码 */
  getDeclaration() {
    return `
      type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
        [key in Key]: Value;
      }

      interface AjaxResponse<T> {
        code: number;
        data: T;
        message: string;
        success: boolean;
      }

      ${this.getCommonDeclaration()}

      ${this.getBaseClassesInDeclaration()}

      ${this.getModsDeclaration()}
    `;
  }

  /** 获取所有基类文件代码 */
  getBaseClassesIndex() {
    const clsCodes = this.dataSource.baseClasses.map(
      base => `
      class ${base.name} {
        ${base.properties
          .map(prop => {
            return this.toPropertyCodeWithInitValue(prop, base.name);
          })
          .filter(id => id)
          .join('\n')}
      }
    `,
    );

    if (this.dataSource.name) {
      return `
      ${clsCodes.join('\n')}
      export const ${this.dataSource.name} = {
        ${this.dataSource.baseClasses.map(bs => bs.name).join(',\n')}
      }
    `;
    }

    return clsCodes.map(cls => `export ${cls}`).join('\n');
  }

  toPropertyCodeWithInitValue(prop: Property, baseName = '') {
    this.setEnum(prop.dataType.enum);
    const { typeName, isDefsType } = prop.dataType;
    let typeWithValue = `= ${this.getInitialValue(typeName, isDefsType, false)}`;

    if (prop.dataType.typeName === baseName) {
      typeWithValue = `= {}`;
    }

    let name = prop.name;
    if (!name.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/)) {
      name = `'${name}'`;
    }

    return `
    /** ${prop.description || prop.name} */
    ${name} ${typeWithValue}
    `;
  }

  getDefName(originName: string, typeName: string, isDefsType: boolean) {
    let name = typeName;

    if (isDefsType) {
      name = originName ? `defs.${originName}.${typeName}` : `defs.${typeName}`;
    }

    return name;
  }

  initClassValue(isDefsType: boolean, usingDef: boolean, typeName: string) {
    const originName = this.dataSource.name;
    if (!usingDef) {
      return `new ${typeName}()`;
    }
    return `new ${this.getDefName(originName, typeName, isDefsType)}()`;
  }

  initEnumValue() {
    const str = this.enum[0];
    if (typeof str === 'string') {
      return `${str}`;
    }
    return str + '';
  }

  initNormalTypeValue(typeName: string) {
    switch (typeName) {
      case 'Array':
        return '[]';

      case 'boolean':
        return 'false';

      case 'string':
        return "''";

      case 'number':
      default:
        return 'undefined';
    }
  }

  getInitialValue(typeName: string, isDefsType: boolean, usingDef = true) {
    if (isDefsType) {
      return this.initClassValue(isDefsType, usingDef, typeName);
    } else if (this.enum && this.enum.length) {
      return this.initEnumValue();
    } else {
      return this.initNormalTypeValue(typeName);
    }
  }

  /** 生成的api.d.ts文件中的对应每个接口的内容 */
  getInterfaceContentInDeclaration(inter: Interface) {
    const paramsCode = inter.getParamsCode();
    const bodyParamsCode = inter.getBodyParamsCode();
    const hasGetParams = !!inter.parameters.filter(param => param.in !== 'body').length;
    let requestParams = bodyParamsCode
      ? `bodyParams: ${bodyParamsCode}, params: Params`
      : `params: Params`;

    if (!hasGetParams) {
      requestParams = bodyParamsCode ? `bodyParams: ${bodyParamsCode}` : '';
    }

    return `
      export ${paramsCode}

      export type Response = ${inter.responseType}

      export const init: Response;

      export function fetch(${requestParams}): Promise<AjaxResponse<Response>>;
    `;
  }

  getFetchMethod(method: string, bodyParamsCode: string) {
    // 为避免method匹配不上，全部转化为大写
    const upperMethod = method.toUpperCase();
    return bodyParamsCode ? upperMethod + ':JSON' : upperMethod;
  }

  getRequest(bodyParamsCode: string, method: string) {
    const fetchMethod = this.getFetchMethod(method, bodyParamsCode);

    let _method = '',
      contentType = 'application/json';
    switch (fetchMethod) {
      case 'GET':
        _method = 'get';
        break;
      case 'PUT':
        _method = 'put';
        break;
      case 'DELETE':
        _method = 'delete';
        break;
      case 'POST':
        _method = 'post';
        contentType = 'application/x-www-form-urlencoded';
        break;
      case 'POST:JSON':
        _method = 'post';
        break;
    }
    return {
      method: _method,
      contentType,
    };
  }

  /** 生成的接口请求部分 */
  getInterfaceContent(inter: Interface) {
    // type为body的参数
    const bodyParamsCode = inter.getBodyParamsCode();
    // 判断是否有params参数
    const hasGetParams = !!inter.parameters.filter(param => param.in !== 'body').length;
    let requestParams = bodyParamsCode ? `data = {}, params = {}` : `params = {}`;
    let requestStr = bodyParamsCode ? `data, params` : `params`;
    if (!hasGetParams) {
      requestParams = bodyParamsCode ? `data = {}` : 'params = {}';
      requestStr = bodyParamsCode ? `data` : 'params';
    }
    const requestObj = this.getRequest(bodyParamsCode, inter.method);

    const { typeName, isDefsType } = inter.response;
    const initValue = this.getInitialValue(typeName, isDefsType);

    let defsStr = '';
    if (inter.response.isDefsType) {
      defsStr = "import * as defs from '../../baseClass';";
    }

    return `
      /**
      * @description ${inter.description}
      */
      ${defsStr}
      import serverConfig from '../../../../../server.config';
      import { request } from '@/common';

      const backEndUrl = serverConfig()['${this.dataSource.name}'];

      export const init = ${initValue};

      export async function fetch(${requestParams}) {
        const result = await request.${requestObj.method}(backEndUrl + '${inter.path}', {
          headers: {
            'Content-Type': '${requestObj.contentType}',
          },
          ${requestStr},
        });
        if (!result.success) throw new Error(result.message);
        return result.data || ${initValue};
      }
    `;
  }
}
