import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css'
import App from './app/layout/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from './app/store/configureStore'

const rootEl = document.getElementById('root')

const store = configureStore()

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  rootEl
)
