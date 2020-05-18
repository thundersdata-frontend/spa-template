import React, { useEffect } from 'react';
import { Modal, Form, Input, Row, Col, Select, DatePicker, Spin } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { Store } from 'antd/es/form/interface';
import { isEmpty } from 'lodash-es';

export default ({
  visible,
  toggleVisible,
  formData,
  loading = false,
}: {
  visible: boolean;
  toggleVisible: () => void;
  formData?: Store;
  loading?: boolean;
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (formData && !isEmpty(formData)) {
      form.setFieldsValue(formData);
    }
  }, [formData]);

  const handleCancel = () => {
    toggleVisible();
  };

  const handleFinish = (values: Store) => {
    console.log(values);
    toggleVisible();
  };

  return (
    <Modal
      width={650}
      centered
      visible={visible}
      destroyOnClose
      forceRender
      getContainer={false} // -> 如果modal里面装form，这个配置必须，否则会报错
      maskClosable={false}
      title="两列表单弹窗"
      onOk={() => form.submit()}
      onCancel={handleCancel}
    >
      <TwoColumnsForm form={form} onFinish={handleFinish} loading={loading} />
    </Modal>
  );
};

const TwoColumnsForm = ({
  form,
  onFinish,
  loading,
}: {
  form: FormInstance;
  onFinish: (values: Store) => void;
  loading?: boolean;
}) => {
  const twoColumnsLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  return (
    <Spin spinning={loading}>
      <Form form={form} onFinish={onFinish} {...twoColumnsLayout}>
        <Row>
          <Col span={12}>
            <Form.Item label="信息代码" name="code" required>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="信息名称" name="name" required>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col span={12}>
            <Form.Item label="信息简称" name="simpleName" required>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="信息范围" name="area" required>
              <Select>
                <Select.Option value="all">全国</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col span={12}>
            <Form.Item label="录入日期" name="date" required>
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="状态" name="status" required>
              <Select>
                <Select.Option value="all">正常</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="备注"
          name="comment"
          required
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
      </Form>
    </Spin>
  );
};
