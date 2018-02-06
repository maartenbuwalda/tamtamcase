import { createStore, applyMiddleware, compose } from 'redux'
import { reducers } from '../reducers'
import instagramFeed from '../middleware/instagramFeed'
import formValidation from '../middleware/formValidation'

import thunk from 'redux-thunk'

let middleware

if (window.devToolsExtension) {
  middleware = compose(
    applyMiddleware(
      thunk,
      instagramFeed,
      formValidation
    ),
    window.devToolsExtension()
  )
}else{
  middleware = compose(
    applyMiddleware(
      thunk,
      instagramFeed,
      formValidation
    )
  )
}

let store = createStore(
  reducers,
  middleware
)
export default store