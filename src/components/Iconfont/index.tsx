import React from 'react';

interface IconfontProps {
  name: string;
  classname?: string;
  style?: any;
}
/** 自定义图标 */
const Iconfont: React.FC<IconfontProps> = (props: IconfontProps) => {
  return <i className={`iconfont ${props.name || ''} ${props.classname}`} style={props.style} />;
};

export default Iconfont;
