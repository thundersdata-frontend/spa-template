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
  /** 文件id */
  fileId: string;

  /** 文件名称 */
  fileName: string;

  /** 文件url */
  fileUrl?: string;
}
