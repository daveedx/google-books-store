// @flow

import React from 'react'
import {
  Link,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import {
  BackTop,
  Layout,
  Menu,
  Spin,
} from 'antd'
import { connect } from 'react-redux'
import type { Node as ReactNode } from 'react'

import HomePage from '../Pages/HomePage'
import NotFoundPage from '../Pages/NotFoundPage'
import './App.css'
import logo from './books.svg'

const { Header, Content } = Layout

type Props = {
  isAppLoaderVisible: boolean,
}

const App = (props: Props): ReactNode => {
  const { isAppLoaderVisible } = props

  return (
    <Spin
      wrapperClassName="app-loader"
      spinning={isAppLoaderVisible}
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

      <BackTop />
    </Spin>
  )
}

const mapStateToProps = state => ({
  isAppLoaderVisible: state.appLoaderVisibility,
})

export default withRouter(connect(mapStateToProps)(App))
