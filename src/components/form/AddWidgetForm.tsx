import { Col, Form, Input, Radio, Row } from 'antd';

type Props = {
  onFinish: (values: any) => void
}

function AddWidgetForm({ onFinish }: Props) {
  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Row gutter={16}>
        <Form.Item
          label="图表类型"
          name="chatType"
          rules={[
            {
              required: true,
              message: '请选择图表类型',
            },
          ]}
        >
          <Radio.Group defaultValue="a">
            <Radio.Button value="a">柱状图</Radio.Button>
            <Radio.Button value="b">饼图</Radio.Button>
            <Radio.Button value="c">折线图</Radio.Button>
            <Radio.Button value="d">世界地图</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="title"
            label="标题"
            rules={[{ required: true, message: '请输入标题' }]}
          >
            <Input placeholder="请输入标题" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="sql"
            label="数据源"
            rules={[
              {
                required: true,
                message: '请输入 SQL 语句',
              },
            ]}
          >
            <Input.TextArea rows={4} placeholder="请输入 SQL 语句" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="options"
            label="Echats 配置"
            rules={[
              {
                required: false
              },
            ]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default AddWidgetForm;