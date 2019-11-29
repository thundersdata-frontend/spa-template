/*
 * @文件描述: 定义生成代码的模板
 * @公司: thundersdata
 * @作者: 黄姗姗
 * @Date: 2019-10-28 16:29:26
 * @LastEditors: 黄姗姗
 * @LastEditTime: 2019-11-27 17:07:16
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

  getInitialValue(typeName: string, isDefsType: boolean, usingDef: boolean = true) {
    if (isDefsType) {
      const originName = this.dataSource.name;

      if (!usingDef) {
        return `new ${typeName}()`;
      }

      return `new ${this.getDefName(originName, typeName, isDefsType)}()`;
    }

    if (typeName === 'Array') {
      return '[]';
    }

    if (typeName === 'string') {
      return "''";
    }

    if (typeName === 'boolean') {
      return 'false';
    }

    if (typeName === 'number') {
      return '0';
    }

    if (this.enum && this.enum.length) {
      const str = this.enum[0];

      if (typeof str === 'string') {
        return `${str}`;
      }

      return str + '';
    }

    return 'undefined';
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

  /** 生成的接口请求部分 */
  getInterfaceContent(inter: Interface) {
    // type为body的参数
    const bodyParamsCode = inter.getBodyParamsCode();
    // 判断是否有params参数
    const hasGetParams = !!inter.parameters.filter(param => param.in !== 'body').length;
    let requestParams = bodyParamsCode ? `bodyParams={}, params={}` : `params={}`;
    if (!hasGetParams) {
      requestParams = bodyParamsCode ? `bodyParams={}` : 'params={}';
    }
    // 为避免method匹配不上，全部转化为大写
    const method = inter.method.toUpperCase();
    const fetchMethod = bodyParamsCode ? method + ':JSON' : method;

    const paramsStr = !hasGetParams ? 'bodyParams, {}' : 'bodyParams, params';

    let requestStr = '';

    switch (fetchMethod) {
      case 'GET':
        requestStr = `request.get(backEndUrl + "${inter.path}", params)`;
        break;
      case 'PUT':
        requestStr = `request.put(backEndUrl + "${inter.path}", params)`;
        break;
      case 'DELETE':
        requestStr = `request.delete(backEndUrl + "${inter.path}", params)`;
        break;
      case 'POST':
        requestStr = `request.postForm(backEndUrl + "${inter.path}", params, {})`;
        break;
      case 'POST:JSON':
        requestStr = `request.postJSON(backEndUrl + "${inter.path}", ${paramsStr})`;
        break;
    }

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
      import { request } from '@td-design/utils';

      const backEndUrl = serverConfig()['${this.dataSource.name}'];

      export const init = ${initValue};

      export async function fetch(${requestParams}) {
        try {
          const result = await ${requestStr};
          if (!result.success) throw result;
          return result;
        } catch(error) {
          if (error.message) {
            throw {
              data: ${initValue},
              message: error.message,
            };
          }
          throw {};
        }
      }
    `;
  }
}
