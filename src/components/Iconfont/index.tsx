import * as React from 'react';

interface IconfontProps {
  name: string;
  classname?: string;
  style?: React.CSSProperties;
}
/** 自定义图标 */
const Iconfont: React.SFC<IconfontProps> = (props: IconfontProps) => {
  return <i className={`iconfont ${props.name || ''} ${props.classname}`} style={props.style} />;
};

export default Iconfont;
