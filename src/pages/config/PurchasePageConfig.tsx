import type { ColumnsType } from 'antd/es/table';
import Purchase from '../../models/Purchase';

const columns: ColumnsType<Purchase> = [
  {
    title: 'id', key: 'id',
  },
  {
    title: '商品', key: 'product',
  },
  {
    title: '数量', key: 'quantity',
  },
  {
    title: '单价', key: 'price',
  },
  {
    title: '总价', key: 'total',
  },
  {
    title: '供应商', key: 'supplier',
  }
];

const formItems = [
  {
    label: '商品名称',
    name: 'name',
    type: 'input',
    rules: [
      {
        required: true,
        message: '请输入商品名称'
      }
    ]
  },
  {
    label: '单价',
    name: 'price',
    type: 'number',
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
    label: '供应商 ID',
    name: 'supplier',
    type: 'input',
    rules: [
      {
        required: true,
        message: '请输入供应商 ID'
      }
    ]
  }
];

export { formItems, columns };