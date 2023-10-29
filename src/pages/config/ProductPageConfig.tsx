import type { ColumnsType } from 'antd/es/table';
import Product from '../../models/Product';

const columns: ColumnsType<Product> = [
  {
    title: 'id', dataIndex: 'id', key: 'id',
  },
  {
    title: '名称', dataIndex: 'name', key: 'name',
  }
];

const formItems = [
  {
    label: '产品名称',
    name: 'name',
    type: 'input',
    rules: [
      {
        required: true,
        message: '请输入产品名称'
      }
    ]
  },
];

export { formItems, columns };