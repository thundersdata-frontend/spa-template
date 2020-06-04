/**
 * 详情展示项。可以根据type渲染不同的展示
 * type目前支持：default(默认)/file(文件，包括图片)
 */
import React, { useState } from 'react';
import { FileDTO } from '@/interfaces/common';
import { Row, Col, Modal } from 'antd';
import { useToggle } from '@umijs/hooks';
import { EyeOutlined, DownloadOutlined } from '@ant-design/icons';
import { IMAGE_TYPES } from '@/constant';
import styles from './index.module.less';

type DetailValueType = 'default' | 'file';

export default ({
  value,
  type = 'default',
}: {
  value?: number | string | FileDTO[];
  type?: DetailValueType;
}) => {
  const toggle = useToggle(false);
  const [url, setUrl] = useState<string>();

  const handleDownload = () => {
    console.log(456);
  };

  if (type === 'default') {
    return <div>{value}</div>;
  }
  if (type === 'file') {
    const files = (value as FileDTO[]) || [];
    const [images, otherTypeFiles] = separateFiles(files.filter(item => item.fileName));

    return (
      <>
        <Row gutter={[16, 16]}>
          {images.map(file => (
            <Col key={file.fileId}>
              <div className={styles['file-item-image-card']}>
                <div className={styles['file-item-image-info']}>
                  <img src={file.fileUrl} alt="图片不存在" style={{ width: '100%' }} />
                </div>
                <span className={styles['file-item-image-actions']}>
                  <a rel="noopener noreferrer" title="预览图片" style={{ marginRight: 16 }}>
                    <EyeOutlined
                      style={{ fontSize: 20, color: 'white' }}
                      onClick={() => {
                        setUrl(file.fileUrl);
                        toggle.toggle();
                      }}
                    />
                  </a>
                  <a rel="noopener noreferrer" title="下载图片">
                    <DownloadOutlined
                      style={{ fontSize: 20, color: 'white' }}
                      onClick={handleDownload}
                    />
                  </a>
                </span>
              </div>
            </Col>
          ))}
        </Row>
        {otherTypeFiles.map(file => (
          <div
            key={file.fileId}
            style={{ lineHeight: '32px', border: '1px solid #cccccc', marginBottom: 8, padding: 4 }}
          >
            <a href={file.fileUrl}>{file.fileName}</a>
          </div>
        ))}
        <Modal
          visible={toggle.state}
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
      </>
    );
  }
  return null;
};

/**
 * 把图片和其他类型的文件区分开
 * @param files
 */
function separateFiles(files: FileDTO[]) {
  const images: FileDTO[] = [];
  const otherTypeFiles: FileDTO[] = [];

  files.forEach(file => {
    const index = file.fileName.lastIndexOf('.');
    const ext = file.fileName.substring(index + 1);
    if (IMAGE_TYPES.includes(ext)) {
      images.push(file);
    } else {
      otherTypeFiles.push(file);
    }
  });

  return [images, otherTypeFiles];
}
