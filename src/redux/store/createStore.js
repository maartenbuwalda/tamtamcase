import { createStore, applyMiddleware, compose } from 'redux'
import { reducers } from '../reducers'
import instagramFeed from '../middleware/instagramFeed'
import formValidation from '../middleware/formValidation'
import singleInputValidation from '../middleware/singleInputValidation'

import thunk from 'redux-thunk'

let middleware

if (window.devToolsExtension) {
  middleware = compose(
    applyMiddleware(
      thunk,
      instagramFeed,
      formValidation,
      singleInputValidation
    ),
    window.devToolsExtension()
  )
}else{
  middleware = compose(
    applyMiddleware(
      thunk,
      instagramFeed,
      formValidation,
      singleInputValidation
    )
  )
}

let store = createStore(
  reducers,
  middleware
)
export default store