import { createStore, applyMiddleware, compose } from 'redux'
import { reducers } from '../reducers'
import instagramFeed from '../middleware/instagramFeed'

import thunk from 'redux-thunk'

let middleware

if (window.devToolsExtension) {
  middleware = compose(
    applyMiddleware(
      thunk,
      instagramFeed
    ),
    window.devToolsExtension()
  )
}else{
  middleware = compose(
    applyMiddleware(
      thunk,
      instagramFeed
    )
  )
}

let store = createStore(
  reducers,
  middleware
)
export default store