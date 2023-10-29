import {Button, Col, DatePicker, Form, Input, Row} from 'antd';
import AddressCascader from './item/AddressCascader';
import {Rule} from 'antd/es/form';
import { Store } from 'antd/es/form/interface';

interface FormItem {
  label: string
  name: string
  type: string
  rules: Rule[]
}

type Props<Item> = {
  items: FormItem[],
  onFinish: (values: Item) => void
  initialValues?: Item,
}

function CustomForm<Item extends Store>({items, onFinish, initialValues}: Props<Item>) {
  return <Form
    layout="vertical"
    initialValues={initialValues}
    onFinish={onFinish}
  >
    <Row gutter={16}>
      {
        items.map(item =>
          <Col
            key={item.name}
            span={12}>
            <Form.Item
              key={item.name}
              name={item.name}
              label={item.label}
              rules={item.rules}
            >
              {mapFormItem(item)}
            </Form.Item>
          </Col>)
      }
    </Row>
    <Button htmlType="submit">
      提交
    </Button>
  </Form>
}

function mapFormItem(item: FormItem) {
  let component = null;

  switch (item.type) {
    case 'input': {
      component = <Input placeholder={item.label}/>;
      break;
    }
    case 'number': {
      component = <Input type="number" placeholder={item.label} min={1}/>;
      break;
    }
    case 'date': {
      component = <DatePicker/>;
      break;
    }
    case 'address': {
      component = <AddressCascader/>;
      break;
    }
    default: {
      component = null;
    }
  }
  return component;
}

export default CustomForm;