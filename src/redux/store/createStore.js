import { createStore, applyMiddleware, compose } from 'redux'
import { reducers } from '../reducers'

import thunk from 'redux-thunk'

let middleware

if (window.devToolsExtension) {
  middleware = compose(
    applyMiddleware(
      thunk
    ),
    window.devToolsExtension()
  )
}else{
  middleware = compose(
    applyMiddleware(
      thunk
    )
  )
}

let store = createStore(
  reducers,
  middleware
)
export default store