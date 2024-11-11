import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useRoutes } from "react-router-dom";
import routes from "./router/router";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const element = useRoutes(routes);
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="min-h-screen">
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]} items={routes} />
      </Sider>
      <Layout>
        <Header className="p-0" style={{ background: colorBgContainer }}>
          <Button
            className="size-16 text-base"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
        <Content
          className="m-2 p-2 min-h-72 backgra"
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {element}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
