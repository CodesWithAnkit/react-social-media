import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css'
import App from './app/layout/App'
import { BrowserRouter } from 'react-router-dom'
const rootEl = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  rootEl
)
