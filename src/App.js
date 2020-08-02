import React from 'react'
import 'antd/dist/antd.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import Layout from './components/Layout'
import Suggester from './containers/Suggester'

function App() {
  return (
    <Layout>
      <Suggester />
    </Layout>
  )
}

export default App
