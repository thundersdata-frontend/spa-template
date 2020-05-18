import React, { useEffect } from 'react';
import { Modal, Row, Col, Form, Spin } from 'antd';
import { Store } from 'antd/es/form/interface';
import { isEmpty } from 'lodash-es';
import { FormInstance } from 'antd/lib/form';
import DetailValue from '@/components/DetailValue';

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

  return (
    <Modal
      width={650}
      centered
      visible={visible}
      destroyOnClose
      forceRender
      getContainer={false} // -> 如果modal里面装form，这个配置必须，否则会报错
      title="两列详情弹窗"
      onCancel={toggleVisible}
      footer={null}
    >
      <DetailContent form={form} loading={loading} />
    </Modal>
  );
};

const DetailContent = ({
  form,
  loading,
}: {
  form: FormInstance;
  loading: boolean;
}) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  return (
    <Spin spinning={loading}>
      <Form form={form} {...layout}>
        <Row>
          <Col span={12}>
            <Form.Item label="信息代码" name="code">
              <DetailValue />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="信息名称" name="name">
              <DetailValue />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label="信息简称" name="simpleName">
              <DetailValue />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="信息范围" name="area">
              <DetailValue />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Spin>
  );
};
