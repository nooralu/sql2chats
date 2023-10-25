import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

// TODO: 加图标
const items: MenuItem[] = [
  {
    key: 'product',
    label: '商品管理',
  },
  {
    key: 'stock',
    label: '库存管理',
  },
  {
    key: 'purchase',
    label: '采购管理',
  },
  {
    key: 'sale',
    label: '销售管理',
  },
  {
    key: 'visualization',
    label: '可视化',
  }
];

function Root() {
  const navigate = useNavigate();

  function handleSelect(item: MenuItem) {
    // 根据 key 跳转到对应的页面
    navigate("/" + item?.key);
  }

  return (
    <Layout className='min-h-screen overflow-hidden'>
      <Sider theme="light">
        <Menu theme="light" defaultSelectedKeys={['product']} mode="inline" items={items} onSelect={handleSelect} />
      </Sider>
      <Layout>
        <Content className='min-h-screen bg-white'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Root;