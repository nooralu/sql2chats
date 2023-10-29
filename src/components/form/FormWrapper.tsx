import { Drawer } from "antd";

type Props = {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

function FormWrapper({ open, onClose, title, children }: Props) {
  return <Drawer
    open={open}
    title={title}
    width={720}
    onClose={onClose}
  >
    {children}
  </Drawer>
}

export default FormWrapper;