import React, { useEffect } from 'react';
import { Modal, Form, Input, Select, Spin } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { Store } from 'antd/es/form/interface';
import isEmpty from 'lodash/isEmpty';

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
  }

  const handleFinish = (values: Store) => {
    console.log(values);
    toggleVisible();
  };

  return (
    <Modal
      centered
      visible={visible}
      destroyOnClose
      forceRender
      getContainer={false} // -> 如果modal里面装form，这个配置必须，否则会报错
      maskClosable={false}
      title="单列表单弹窗"
      onOk={() => form.submit()}
      onCancel={handleCancel}
    >
      <OneColumnForm form={form} onFinish={handleFinish} loading={loading} />
    </Modal>
  );
};

const OneColumnForm = ({
  form,
  onFinish,
  loading,
}: {
  form: FormInstance;
  onFinish: (values: Store) => void;
  loading: boolean;
}) => {
  const oneColumnLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 17 },
  };
  return (
    <Spin spinning={loading}>
      <Form form={form} onFinish={onFinish} {...oneColumnLayout}>
        <Form.Item
          label="信息代码"
          name="code"
          required
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="信息名称"
          name="name"
          required
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="信息简称"
          name="simpleName"
          required
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="信息范围"
          name="area"
          required
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value="all">全国</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Spin>
  );
};
