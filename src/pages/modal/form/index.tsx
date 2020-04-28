import React from 'react';
import { Button, Modal, Form, Input, Row, Col, Select, DatePicker } from 'antd';
import { useToggle } from '@umijs/hooks';
import { FormInstance } from 'antd/lib/form';
import { Store } from 'antd/es/form/interface';

export default () => {
  const oneToggle = useToggle(false);
  const twoToggle = useToggle(false);

  const [oneForm] = Form.useForm();
  const [twoForm] = Form.useForm();

  const handleCancel1 = () => {
    oneToggle.toggle();
  };
  const handleFinish1 = (values: Store) => {
    console.log(values);
  };

  const handleCancel2 = () => {
    twoToggle.toggle();
  };
  const handleFinish2 = (values: Store) => {
    console.log(values);
  };

  return (
    <div>
      <Button onClick={() => oneToggle.toggle()}>单列表单弹窗</Button>
      <Button type="primary" onClick={() => twoToggle.toggle()}>
        两列表单弹窗
      </Button>

      <Modal
        centered
        visible={oneToggle.state}
        destroyOnClose
        forceRender
        getContainer={false} // -> 如果modal里面装form，这个配置必须，否则会报错
        maskClosable={false}
        title="单列表单弹窗"
        onOk={() => oneForm.submit()}
        onCancel={handleCancel1}
      >
        <OneColumnForm form={oneForm} onFinish={handleFinish1} />
      </Modal>
      <Modal
        width={650}
        centered
        visible={twoToggle.state}
        destroyOnClose
        forceRender
        getContainer={false} // -> 如果modal里面装form，这个配置必须，否则会报错
        maskClosable={false}
        title="两列表单弹窗"
        onOk={() => twoForm.submit()}
        onCancel={handleCancel2}
      >
        <TwoColumnsForm form={twoForm} onFinish={handleFinish2} />
      </Modal>
    </div>
  );
};

const OneColumnForm = ({
  form,
  onFinish,
}: {
  form: FormInstance;
  onFinish: (values: Store) => void;
}) => {
  const oneColumnLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 17 },
  };
  return (
    <Form form={form} onFinish={onFinish} {...oneColumnLayout}>
      <Form.Item label="信息代码" name="code" required>
        <Input />
      </Form.Item>
      <Form.Item label="信息名称" name="name" required>
        <Input />
      </Form.Item>
      <Form.Item label="信息简称" name="simpleName" required>
        <Input />
      </Form.Item>
      <Form.Item label="信息范围" name="area" required>
        <Select>
          <Select.Option value="all">全国</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

const TwoColumnsForm = ({
  form,
  onFinish,
}: {
  form: FormInstance;
  onFinish: (values: Store) => void;
}) => {
  const twoColumnsLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  return (
    <Form form={form} onFinish={onFinish} {...twoColumnsLayout}>
      <Row justify="space-between">
        <Col style={{ flex: 1 }}>
          <Form.Item label="信息代码" name="code" required>
            <Input />
          </Form.Item>
        </Col>
        <Col style={{ flex: 1 }}>
          <Form.Item label="信息名称" name="name" required>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col style={{ flex: 1 }}>
          <Form.Item label="信息简称" name="simpleName" required>
            <Input />
          </Form.Item>
        </Col>
        <Col style={{ flex: 1 }}>
          <Form.Item label="信息范围" name="area" required>
            <Select>
              <Select.Option value="all">全国</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col style={{ flex: 1 }}>
          <Form.Item label="录入日期" name="date" required>
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
        </Col>
        <Col style={{ flex: 1 }}>
          <Form.Item label="状态" name="status" required>
            <Select>
              <Select.Option value="all">正常</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
          <Form.Item label="备注" name="comment" required labelCol={{span: 4}} wrapperCol={{ span: 20 }}>
            <Input.TextArea rows={4} />
          </Form.Item>
    </Form>
  );
};
