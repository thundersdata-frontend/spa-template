declare module '*.module.less';
declare module 'png';

interface PrivilegeResource {
  apiUrl: string;
  description: string;
  icon: string;
  id: number;
  orderValue: number;
  resourceKey: string;
  type: number;
  privilegeList: string[];
  resourceBusinessValue: string;
  children: PrivilegeResource[];
  isVisible: boolean;
}

interface FileDTO {
  fileId: string;
  fileName: string;
  fileUrl?: string;
}

type IsX<T, X> = {
  [k in keyof T]: T[k] extends X ? k : never;
}[keyof T];

type DispatchContext<T> = Pick<T, IsX<T, React.Dispatch<any>>>;
type StateContext<T> = Omit<T, IsX<T, React.Dispatch<any>>>;
