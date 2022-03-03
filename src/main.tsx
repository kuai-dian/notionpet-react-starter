import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {defineRender} from '@notionpet/sdk'

defineRender(({options, data}: any) => {
  ReactDOM.render(
    <React.StrictMode>
      <App options={options} data={data} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}, process.env.NODE_ENV === 'development')