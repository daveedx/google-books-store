// @flow

import React from 'react'
import { Layout, Menu } from 'antd'
import type { Node as ReactNode } from 'react'

import './App.css'
import logo from './books.svg'

const { Header, Content } = Layout

const App = (): ReactNode => (
  <Layout className="app-container">
    <Header className="app-header">
      <a href="/">
        <img src={logo} className="logo" alt="logo" title="Google Books Store" />
      </a>

      <Menu
        className="main-menu"
        theme="dark"
        mode="horizontal"
        selectable={false}
      >
        <Menu.Item key="menu-home">
          <a href="/">Home</a>
        </Menu.Item>
      </Menu>
    </Header>

    <Content className="app-content">
      content
    </Content>
  </Layout>
)

export default App
