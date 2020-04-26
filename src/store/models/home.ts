/*
 * @文件描述: 
 * @公司: thundersdata
 * @作者: 黄姗姗
 * @Date: 2020-04-24 14:11:08
 * @LastEditors: 黄姗姗
 * @LastEditTime: 2020-04-24 14:41:47
 */
import { ModelConfig } from "@ice/store";

export interface State {
  value: string;
  enums: {
    [index: string]: Array<defs.recruitment.DictionaryObjectDTO>;
  }
};

const homeModel: ModelConfig<State> = {
  state: {
    value: '',
    enums: {},
  },
  reducers: {
    setValue(state: State, value: string) {
      state.value = value;
    },
    setEnums(state: State, enums: ObjectMap<
      any,
      Array<defs.recruitment.DictionaryObjectDTO>
    >) {
      state.enums = enums;
    }
  },
}

export default homeModel;