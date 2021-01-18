/**
 * 详情展示项。可以根据type渲染不同的展示
 * type目前支持：default(默认)/file(文件，包括图片)
 */
import React, { forwardRef, useState } from 'react';
import { Row, Col, Modal } from 'antd';
import { useToggle } from 'ahooks';
import { EyeOutlined, DownloadOutlined } from '@ant-design/icons';
import { FILE_TYPE_MAP, getDownloadUrlWithId } from '../UploadFormItem/utils/upload';

import styles from './index.module.less';

type DetailValueType = 'default' | 'file';

export default forwardRef<
  HTMLDivElement,
  {
    value?: number | string | FileDTO[];
    type?: DetailValueType;
    generateUrl?: (file: FileDTO) => string;
  }
>(({ value, type = 'default', generateUrl }, ref) => {
  const [visible, toggle] = useToggle(false);
  const [url, setUrl] = useState<string>();

  const handleDownload = (file: FileDTO) => {
    if (file.fileUrl) {
      window.open(file.fileUrl, '_blank');
    } else {
      window.open(getDownloadUrlWithId(file.fileId), '_blank');
    }
  };

  if (type === 'default') {
    return <div>{value}</div>;
  }
  if (type === 'file') {
    const files = (value as FileDTO[]) || [];
    const [images, otherTypeFiles] = separateFiles(files.filter((item) => item.fileName));

    return (
      <div ref={ref}>
        <Row gutter={[16, 16]}>
          {images.map((file) => {
            const { fileUrl, fileId } = file;
            const filePreviewUrl = (generateUrl && generateUrl(file)) || fileUrl;
            return (
              <Col key={fileId}>
                <div className={styles['file-item-image-card']}>
                  <div className={styles['file-item-image-info']}>
                    <img src={filePreviewUrl} alt="图片不存在" style={{ width: '100%' }} />
                  </div>
                  <span className={styles['file-item-image-actions']}>
                    <a rel="noopener noreferrer" title="预览图片" style={{ marginRight: 16 }}>
                      <EyeOutlined
                        style={{ fontSize: 20, color: 'white' }}
                        onClick={() => {
                          setUrl(filePreviewUrl);
                          toggle.toggle();
                        }}
                      />
                    </a>
                    <a rel="noopener noreferrer" title="下载图片">
                      <DownloadOutlined
                        style={{ fontSize: 20, color: 'white' }}
                        onClick={() => handleDownload(file)}
                      />
                    </a>
                  </span>
                </div>
              </Col>
            );
          })}
        </Row>
        {otherTypeFiles.map((file) => (
          <div
            key={file.fileId}
            style={{
              lineHeight: '32px',
              border: '1px solid #cccccc',
              marginBottom: 8,
              padding: 4,
            }}
          >
            <a href={(generateUrl && generateUrl(file)) || file.fileUrl}>{file.fileName}</a>
          </div>
        ))}
        <Modal
          visible={visible}
          title="图片预览"
          centered
          destroyOnClose
          closable
          maskClosable
          footer={null}
          onCancel={() => toggle.toggle()}
          width={650}
        >
          <img src={url} alt="图片无法访问" style={{ width: '100%' }} />
        </Modal>
      </div>
    );
  }
  return null;
});

/**
 * 把图片和其他类型的文件区分开
 * @param files
 */
function separateFiles(files: FileDTO[]) {
  const images: FileDTO[] = [];
  const otherTypeFiles: FileDTO[] = [];

  files.forEach((file) => {
    const index = file.fileName.lastIndexOf('.');
    const ext = file.fileName.substring(index);
    if (FILE_TYPE_MAP.图片.includes(ext)) {
      images.push(file);
    } else {
      otherTypeFiles.push(file);
    }
  });

  return [images, otherTypeFiles];
}
