import type { ColumnsType } from 'antd/es/table';
import Sale from '../../models/Sale';

const columns: ColumnsType<Sale> = [
  {
    title: 'ID', key: 'id',
  },
  {
    title: '产品', key: 'productName',
  },
  {
    title: '单价', key: 'price',
  },
  {
    title: '数量', key: 'quantity',
  },
  {
    title: '总价', key: 'totalPrice',
  },
  {
    title: '客户', key: 'customer',
  },
  {
    title: '仓库', key: 'warehouse',
  }
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
    label: '单价',
    name: 'price',
    type: 'input',
    rules: [
      {
        required: true,
        message: '请输入采购单价'
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
        message: '请输入采购数量'
      }
    ]
  },
  {
    label: '客户 ID',
    name: 'cutomerId',
    type: 'input',
    rules: [
      {
        required: true,
        message: '请输入客户 ID'
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
];

export { formItems, columns };