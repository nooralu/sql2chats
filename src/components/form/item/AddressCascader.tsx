import { Cascader } from 'antd';
import address from './address.json';

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const options: Option[] = address;

function AddressCascader() {
  return <Cascader defaultValue={[]} options={options} />
}

export default AddressCascader;