import type { ColumnsType } from 'antd/es/table';
import Stock from '../../models/Stock';

const columns: ColumnsType<Stock> = [
  {
    title: 'id', key: 'id',
  },
  {
    title: '产品', key: 'name',
  },
  {
    title: '仓库', key: 'warehouse',
  },
  {
    title: '数量', key: 'quantity',
  },
  {
    title: '入库价格', key: 'purchasingPrice',
  },
];

const formItems = [
  {
    label: '产品 ID',
    name: 'productId',
    type: 'input',
    rules: [
      {
        required: true,
        message: '请输入产品 ID'
      }
    ]
  },
  {
    label: '仓库 ID',
    name: 'warehouseId',
    type: 'input',
    rules: [
      {
        required: true,
        message: '请输入仓库 ID'
      }
    ]
  },
  {
    label: '数量',
    name: 'quantity',
    type: 'number',
    rules: [
      {
        required: true,
        message: '请输入数量'
      }
    ]
  },
  {
    label: '入库价格',
    name: 'purchasingPrice',
    type: 'number',
    rules: [
      {
        required: true,
        message: '请输入入库价格'
      }
    ]
  },
];

export { formItems, columns };