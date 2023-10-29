import { Space } from "antd";
import FormWrapper from "./form/FormWrapper";

type Props = {
  title: string;
  showForm: boolean;
  onCloseForm: () => void;
  form: React.ReactNode;
  table: React.ReactNode;
  actionButtons: React.ReactNode[];
}

function EntityPage({ title, showForm, onCloseForm, form, table, actionButtons }: Props) {
  return <div>
    <Space wrap>
      {actionButtons}
    </Space>
    {table}
    <FormWrapper title={title} open={showForm} onClose={onCloseForm}>
      {form}
    </FormWrapper>
  </div>
}

export default EntityPage;