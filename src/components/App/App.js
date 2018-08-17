// @flow

import React from 'react'
import {
  Link,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import { Layout, Menu, Spin } from 'antd'
import type { Node as ReactNode } from 'react'

import HomePage from '../Pages/HomePage'
import NotFoundPage from '../Pages/NotFoundPage'
import './App.css'
import logo from './books.svg'

const { Header, Content } = Layout

const App = (): ReactNode => (
  <Spin
    wrapperClassName="app-loader"
    spinning={false}
  >
    <Layout className="app-container">
      <Header className="app-header">
        <img src={logo} className="logo" alt="logo" title="Google Books Store" />

        <Menu
          className="main-menu"
          theme="dark"
          mode="horizontal"
          selectable={false}
        >
          <Menu.Item key="menu-home">
            <Link to="/">Home</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content className="app-content">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Content>
    </Layout>
  </Spin>
)

export default withRouter(App)
