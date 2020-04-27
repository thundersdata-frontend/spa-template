import React from 'react';
import { Button, Modal, Row, Col, Form } from 'antd';
import { useToggle } from '@umijs/hooks';

export default () => {
  const oneToggle = useToggle(false);
  const twoToggle = useToggle(false);

  return (
    <div>
      <Button onClick={() => oneToggle.toggle()}>单列详情弹窗</Button>
      <Button type="primary" onClick={() => twoToggle.toggle()}>
        两列详情弹窗
      </Button>

      <Modal
        centered
        visible={oneToggle.state}
        destroyOnClose
        title="单列详情弹窗"
        onCancel={() => oneToggle.toggle()}
        footer={null}
      >
        <OneColumnDetail />
      </Modal>
      <Modal
        width={650}
        centered
        visible={twoToggle.state}
        destroyOnClose
        title="两列详情弹窗"
        onCancel={() => twoToggle.toggle()}
        footer={null}
      >
        <TwoColumnsDetail />
      </Modal>
    </div>
  );
};

const OneColumnDetail = () => {
  const oneColumnLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 18 },
  };
  return (
    <div className="modal-detail-content">
      <Form.Item label="信息名称" {...oneColumnLayout}>
        大海新能源
      </Form.Item>
      <Form.Item label="信息名称" {...oneColumnLayout}>
        大海新能源
      </Form.Item>
      <Form.Item label="信息名称" {...oneColumnLayout}>
        大海新能源
      </Form.Item>
      <Form.Item label="信息名称" {...oneColumnLayout}>
        大海新能源
      </Form.Item>
    </div>
  );
};

const TwoColumnsDetail = () => {
  const twoColumnsLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  return (
    <div className="modal-detail-content">
      <Row>
        <Col style={{ flex: 1 }}>
          <Form.Item label="信息名称" {...twoColumnsLayout}>
            大海新能源
          </Form.Item>
        </Col>
        <Col style={{ flex: 1 }}>
          <Form.Item label="信息名称" {...twoColumnsLayout}>
            大海新能源
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col style={{ flex: 1 }}>
          <Form.Item label="信息名称" {...twoColumnsLayout}>
            大海新能源
          </Form.Item>
        </Col>
        <Col style={{ flex: 1 }}>
          <Form.Item label="信息名称" {...twoColumnsLayout}>
            大海新能源
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col style={{ flex: 1 }}>
          <Form.Item label="信息名称" {...twoColumnsLayout}>
            大海新能源
          </Form.Item>
        </Col>
        <Col style={{ flex: 1 }}>
          <Form.Item label="信息名称" {...twoColumnsLayout}>
            大海新能源
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        label="信息名称"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        大海新能源
      </Form.Item>
    </div>
  );
};
