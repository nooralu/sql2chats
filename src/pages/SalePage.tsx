import { useState } from "react";
import { Button, Table } from "antd";
import EntityPage from "../components/EntityPage";
import { formItems, columns } from "./config/SalePageConfig";
import CustomForm from "../components/form/CustomForm";

function SalePage() {
  const [showForm, setShowForm] = useState(false);

  function onCloseForm() {
    setShowForm(false);
  }

  function handleFormFinish(values: any) {
    console.log("handleFormFinish", values);
    setShowForm(false);
  }

  return <EntityPage
    title="Sale"
    showForm={showForm}
    onCloseForm={onCloseForm}
    form={<CustomForm items={formItems} onFinish={handleFormFinish} />}
    table={<Table columns={columns} dataSource={[]} />}
    actionButtons={[
      <Button block key="add" onClick={() => {
        setShowForm(true);
      }}> 添加 </Button>,
    ]}
  />;
}

export default SalePage;
