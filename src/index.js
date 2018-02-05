import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppContainer from './redux/containers/AppContainer'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './redux/store/createStore'

ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>
, document.getElementById('root'))

registerServiceWorker()
