import {useEffect, useState} from 'react';
import {Button, Modal, Space, Table} from 'antd';
import EntityPage from '../components/EntityPage';
import {columns, formItems} from "./config/ProductPageConfig";
import CustomForm from '../components/form/CustomForm';
import {createProduct, deleteProduct, fetchAllProducts, updateProduct} from "../api/product.ts";
import Product from "../models/Product.ts";

function ProductPage() {
  const [isCreate, setIsCreate] = useState(true);
  const [formTitle, setFormTitle] = useState('添加商品');
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [formInitialValues, setFormInitialValues] = useState<Product | undefined>(undefined);
  const [updateId, setUpdateId] = useState<number | undefined>(undefined);
  const [modal, contextHolder] = Modal.useModal();

  const tableColumns: typeof columns = [...columns];
  tableColumns.push({
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Button
          onClick={() => {
            setUpdateId(record.id);
            setIsCreate(false);
            setFormTitle('编辑商品');
            setFormInitialValues(record);
            setShowForm(true);
          }}
        >
          编辑
        </Button>
        <Button
          danger
          onClick={() => {
            modal.confirm({
              title: `确定删除【${text.name}】吗？`,
              content: '删除后不可恢复',
              onOk: () => {
                deleteProduct(record.id)
                .finally(() => {
                  setProducts(products.filter((item) => item.id !== record.id));
                });
              },
            });
          }}
        >
          删除
        </Button>
      </Space>
    ),
  })

  function handleCloseForm() {
    setShowForm(false);
  }

  function handleAddProduct() {
    setFormTitle('添加商品');
    setFormInitialValues(undefined);
    setIsCreate(true);
    setShowForm(true);
  }

  function handleFormFinish(product: Product) {
    let handle = createProduct;
    if (!isCreate) {
      handle = updateProduct;
      product.id = updateId as number;
    }
    handle(product)
    .then((res) => {
      if (isCreate) {
        setProducts([...products, res])
      } else {
        setProducts(products.map((item) => {
          if (item.id === updateId) {
            return res;
          }
          return item;
        }));
      }
    })
    .finally(() => {
      handleCloseForm();
    });
  }

  useEffect(() => {
    fetchAllProducts().then((res) => {
      setProducts(res.map((item: Product) => {
        return {
          ...item,
          key: item.id,
        }
      }));
    });
  }, []);

  return <>
    <EntityPage
      title={formTitle}
      showForm={showForm}
      onCloseForm={handleCloseForm}
      form={<CustomForm key={Math.random()} items={formItems} onFinish={handleFormFinish}
                        initialValues={formInitialValues}/>}
      table={<Table columns={tableColumns} dataSource={products}/>}
      actionButtons={[
        <Button block key="add" onClick={handleAddProduct}>添加商品</Button>,
      ]}
    />
    {contextHolder}
  </>;
}

export default ProductPage;
