import React from 'react';
import {
  Form,
  Input,
  Button,
  Card,
  Row,
  Col,
  Select,
  DatePicker,
  TimePicker,
} from 'antd';
import { useToggle } from '@umijs/hooks';
import { Store } from 'antd/es/form/interface';
import Title from '@/components/Title';
import FooterToolbar from '@/components/FooterToolbar';
import styles from './index.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

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
    span: 8
  },
  md: {
    span: 12
  },
  sm: {
    span: 24
  }
}

export default () => {
  const [form] = Form.useForm();
  const btnToggle = useToggle(false);

  const handleFinish = (values: Store) => {
    console.log(values);
    btnToggle.toggle();
  };

  return (
    <Form form={form} onFinish={handleFinish} layout="vertical">
      <Card title={<Title text="仓库管理" />} className={styles.card}>
        <Row gutter={16}>
          <Col {...colLayout}>
            <Form.Item
              label={fieldLabels.name}
              name="name"
              rules={[{ required: true, message: '请输入仓库名称' }]}
            >
              <Input placeholder="请输入仓库名称" />
            </Form.Item>
          </Col>
          <Col {...colLayout}>
            <Form.Item
              label={fieldLabels.url}
              name="url"
              rules={[{ required: true, message: '请选择' }]}
            >
              <Input
                style={{ width: '100%' }}
                addonBefore="http://"
                addonAfter=".com"
                placeholder="请输入"
              />
            </Form.Item>
          </Col>
          <Col {...colLayout}>
            <Form.Item
              label={fieldLabels.owner}
              name="owner"
              rules={[{ required: true, message: '请选择管理员' }]}
            >
              <Select placeholder="请选择管理员">
                <Option value="xiao">付晓晓</Option>
                <Option value="mao">周毛毛</Option>
              </Select>
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
              <Select placeholder="请选择审批员">
                <Option value="xiao">付晓晓</Option>
                <Option value="mao">周毛毛</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col {...colLayout}>
            <Form.Item
              label={fieldLabels.dateRange}
              name="dateRange"
              rules={[{ required: true, message: '请选择生效日期' }]}
            >
              <RangePicker
                placeholder={['开始日期', '结束日期']}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
          <Col {...colLayout}>
            <Form.Item
              label={fieldLabels.type}
              name="type"
              rules={[{ required: true, message: '请选择仓库类型' }]}
            >
              <Select placeholder="请选择仓库类型">
                <Option value="private">私密</Option>
                <Option value="public">公开</Option>
              </Select>
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
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col {...colLayout}>
            <Form.Item
              label={fieldLabels.url2}
              name="url2"
              rules={[{ required: true, message: '请选择' }]}
            >
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col {...colLayout}>
            <Form.Item
              label={fieldLabels.owner2}
              name="owner2"
              rules={[{ required: true, message: '请选择管理员' }]}
            >
              <Select placeholder="请选择管理员">
                <Option value="xiao">付晓晓</Option>
                <Option value="mao">周毛毛</Option>
              </Select>
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
              <Select placeholder="请选择审批员">
                <Option value="xiao">付晓晓</Option>
                <Option value="mao">周毛毛</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col {...colLayout}>
            <Form.Item
              label={fieldLabels.dateRange2}
              name="dateRange2"
              rules={[{ required: true, message: '请输入' }]}
            >
              <TimePicker
                placeholder="提醒时间"
                style={{ width: '100%' }}
                getPopupContainer={(trigger) => {
                  if (trigger && trigger.parentNode) {
                    return trigger.parentNode as HTMLElement;
                  }
                  return trigger;
                }}
              />
            </Form.Item>
          </Col>
          <Col {...colLayout}>
            <Form.Item
              label={fieldLabels.type2}
              name="type2"
              rules={[{ required: true, message: '请选择仓库类型' }]}
            >
              <Select placeholder="请选择仓库类型">
                <Option value="private">私密</Option>
                <Option value="public">公开</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Card>
      <FooterToolbar>
        <Button
          type="primary"
          onClick={() => form.submit()}
          loading={btnToggle.state}
        >
          提交
        </Button>
      </FooterToolbar>
    </Form>
  );
};
