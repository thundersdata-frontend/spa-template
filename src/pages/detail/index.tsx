import React from 'react';
import { Card, Row, Col, Form, Spin } from 'antd';
import Title from '@/components/Title';
import styles from './index.less';
import DetailValue from '@/components/DetailValue';
import { useRequest } from 'umi';

const fieldLabels = {
  name: '仓库名',
  url: '仓库域名',
  owner: '仓库管理员',
  approver: '审批人',
  dateRange: '生效日期',
  type: '仓库类型',
  name2: '任务名',
  url2: '任务描述',
  owner2: '执行人',
  approver2: '责任人',
  dateRange2: '生效日期',
  type2: '任务类型',
};
const colLayout = {
  lg: {
    span: 8,
  },
  md: {
    span: 12,
  },
  sm: {
    span: 24,
  },
};

export default () => {
  const { data, loading } = useRequest('/api/detail');

  return (
    <Spin spinning={loading}>
      <Form initialValues={data}>
        <Card title={<Title text="仓库管理" />} className={styles.card}>
          <Row gutter={16}>
            <Col {...colLayout}>
              <Form.Item
                label={fieldLabels.name}
                name="name"
                rules={[{ required: true, message: '请输入仓库名称' }]}
              >
                <DetailValue />
              </Form.Item>
            </Col>
            <Col {...colLayout}>
              <Form.Item
                label={fieldLabels.url}
                name="url"
                rules={[{ required: true, message: '请选择' }]}
              >
                <DetailValue />
              </Form.Item>
            </Col>
            <Col {...colLayout}>
              <Form.Item
                label={fieldLabels.owner}
                name="owner"
                rules={[{ required: true, message: '请选择管理员' }]}
              >
                <DetailValue />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col {...colLayout}>
              <Form.Item
                label={fieldLabels.approver}
                name="approver"
                rules={[{ required: true, message: '请选择审批员' }]}
              >
                <DetailValue />
              </Form.Item>
            </Col>
            <Col {...colLayout}>
              <Form.Item
                label={fieldLabels.dateRange}
                name="dateRange"
                rules={[{ required: true, message: '请选择生效日期' }]}
              >
                <DetailValue />
              </Form.Item>
            </Col>
            <Col {...colLayout}>
              <Form.Item
                label={fieldLabels.type}
                name="type"
                rules={[{ required: true, message: '请选择仓库类型' }]}
              >
                <DetailValue />
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <Card title={<Title text="任务管理" />} className={styles.card}>
          <Row gutter={16}>
            <Col {...colLayout}>
              <Form.Item
                label={fieldLabels.name2}
                name="name2"
                rules={[{ required: true, message: '请输入' }]}
              >
                <DetailValue />
              </Form.Item>
            </Col>
            <Col {...colLayout}>
              <Form.Item
                label={fieldLabels.url2}
                name="url2"
                rules={[{ required: true, message: '请选择' }]}
              >
                <DetailValue />
              </Form.Item>
            </Col>
            <Col {...colLayout}>
              <Form.Item
                label={fieldLabels.owner2}
                name="owner2"
                rules={[{ required: true, message: '请选择管理员' }]}
              >
                <DetailValue />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col {...colLayout}>
              <Form.Item
                label={fieldLabels.approver2}
                name="approver2"
                rules={[{ required: true, message: '请选择审批员' }]}
              >
                <DetailValue />
              </Form.Item>
            </Col>
            <Col {...colLayout}>
              <Form.Item
                label={fieldLabels.dateRange2}
                name="dateRange2"
                rules={[{ required: true, message: '请输入' }]}
              >
                <DetailValue />
              </Form.Item>
            </Col>
            <Col {...colLayout}>
              <Form.Item
                label={fieldLabels.type2}
                name="type2"
                rules={[{ required: true, message: '请选择仓库类型' }]}
              >
                <DetailValue />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>
    </Spin>
  );
};
