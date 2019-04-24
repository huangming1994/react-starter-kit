import React from 'react'
import { Spin } from 'antd'
import './Loading.css'

function Loading() {
  return <div className="loading"><Spin size="large" /></div>
}

export default React.memo(Loading)
