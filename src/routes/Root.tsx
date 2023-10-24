import { useState } from 'react';;
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

// TODO: 加图标
const items: MenuItem[] = [
  {
    key: '1',
    label: '商品管理',
  },
  {
    key: '2',
    label: '库存管理',
  },
  {
    key: '3',
    label: '采购管理',
  },
  {
    key: '4',
    label: '订单管理',
  },
  {
    key: '6',
    label: '可视化',
  }
];

function Root() {
  const [collapsed, setCollapsed] = useState(false);

  function handleSelect(item: MenuItem) {
    // TODO: 路由跳转
    console.log(item);
  }

  return (
    <Layout className='min-h-screen'>
      <Sider theme="light" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} onSelect={handleSelect} />
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