import { useState } from 'react';
import { Button, Table } from 'antd';
import EntityPage from '../components/EntityPage';
import { formItems, columns } from "./config/StockPageConfig";
import CustomForm from '../components/form/CustomForm';

function StockPage() {
  const [showForm, setShowForm] = useState(false);

  function onCloseForm() {
    setShowForm(false);
  }

  function handleFormFinish(values: any) {
    console.log("handleFormFinish", values);
    setShowForm(false);
  }

  return <EntityPage
    title="添加商品库存"
    showForm={showForm}
    onCloseForm={onCloseForm}
    form={<CustomForm items={formItems} onFinish={handleFormFinish} />}
    table={<Table columns={columns} dataSource={[]} />}
    actionButtons={[
      <Button block key="add" onClick={() => {
        setShowForm(true);
      }}>添加商品库存</Button>,
      <Button block key="add" onClick={() => {
        setShowForm(true);
      }}>新增仓库</Button>,
    ]}
  />;
}

export default StockPage;
