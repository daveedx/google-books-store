// @flow

import React from 'react'
import { Layout } from 'antd'
import type { Node as ReactNode } from 'react'

import './App.css'

const { Content } = Layout

const App = (): ReactNode => (
  <Layout className="app-container">
    <Content className="app-content">
      content
    </Content>
  </Layout>
)

export default App
